import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";
import nodemailer from "nodemailer";

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  if (
    !process.env.RECAPTCHA_SECRET_KEY ||
    process.env.RECAPTCHA_SECRET_KEY === "your_recaptcha_secret_key_here"
  ) {
    console.warn("reCAPTCHA secret key not configured, skipping verification");
    return true;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    );

    const data = await response.json();
    return data.success && data.score > 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Upload files to Supabase storage
async function uploadFiles(files: File[]): Promise<string[]> {
  const uploadPromises = files.map(async (file, index) => {
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`;

    console.log(`📤 Uploading file ${index + 1}/${files.length}: ${fileName}`);
    console.log(`📋 File details: size=${file.size} bytes, type=${file.type}`);

    try {
      const { data, error } = await supabase.storage
        .from("websiteleads")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error(`❌ Upload error for ${fileName}:`, error);
        throw new Error(`Upload failed for ${file.name}: ${error.message}`);
      }

      if (!data) {
        console.error(`❌ No data returned for ${fileName}`);
        throw new Error(`Upload failed for ${file.name}: No data returned`);
      }

      console.log(`✅ Successfully uploaded: ${fileName}`, data);
      return fileName;
    } catch (uploadError) {
      console.error(`❌ Exception during upload of ${fileName}:`, uploadError);
      throw uploadError;
    }
  });

  try {
    const results = await Promise.all(uploadPromises);
    console.log(`🎉 All files uploaded successfully:`, results);
    return results;
  } catch (error) {
    console.error("❌ One or more file uploads failed:", error);
    throw error;
  }
}

// Send email notification
async function sendEmailNotification(
  data: any,
  fileUrls: string[] = [],
  supabaseClient: any,
) {
  if (
    !process.env.OUTLOOK_USER ||
    !process.env.OUTLOOK_PASSWORD ||
    process.env.OUTLOOK_PASSWORD === "your_outlook_app_password_here"
  ) {
    console.warn("Outlook credentials not configured, skipping email");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_PASSWORD,
    },
  });

  let emailContent = `
New Contact Form Submission - Budget Glass

Name: ${data.name}
${data.companyName ? `Company: ${data.companyName}` : ""}
Phone: ${data.phone}
Email: ${data.email}
${data.address ? `Address: ${data.address}` : ""}
Service Type: ${data.serviceType}
Message: ${data.message}
`;

  // Add shower configuration if provided
  if (data.showerConfig) {
    try {
      const config = JSON.parse(data.showerConfig);
      emailContent += `

Shower Configuration:
- Door Type: ${config.doorConfiguration?.name || "Not selected"}
- Frame Style: ${config.frameStyle?.name || "Not selected"}
- Hardware Finish: ${config.hardwareFinish?.name || "Not selected"}
- Glass Type: ${config.glassType?.name || "Not selected"}
`;
    } catch (e) {
      // If shower config parsing fails, just continue without it
    }
  }

  // Add file information with direct links
  if (fileUrls.length > 0) {
    emailContent += `

Uploaded Files (${fileUrls.length}):
`;

    // Generate signed URLs for direct access
    for (const fileName of fileUrls) {
      try {
        // Get a signed URL that's valid for 24 hours
        const { data: signedUrlData, error: urlError } =
          await supabaseClient.storage
            .from("websiteleads")
            .createSignedUrl(fileName, 86400); // 24 hours

        if (signedUrlData?.signedUrl) {
          const originalName = fileName.split("-").slice(2).join("-"); // Remove timestamp prefix
          emailContent += `- ${originalName}: ${signedUrlData.signedUrl}\n`;
        } else {
          emailContent += `- ${fileName} (URL generation failed)\n`;
        }
      } catch (error) {
        emailContent += `- ${fileName} (URL error)\n`;
      }
    }

    emailContent += `
These links are valid for 24 hours and will allow you to view/download the files directly.
You can also access all files through your Supabase dashboard in the 'websiteleads' bucket.
`;
  }

  emailContent += `
Submitted: ${new Date().toLocaleString()}
`;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New Website Lead - ${data.serviceType}`,
    text: emailContent,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const companyName = formData.get("companyName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;
    const serviceType = formData.get("serviceType") as string;
    const message = formData.get("message") as string;
    const showerConfig = formData.get("showerConfig") as string;
    const recaptchaToken = formData.get("recaptchaToken") as string;

    // Debug logging
    console.log("🔍 Form submission received:");
    console.log("Name:", name ? "✅" : "❌", name);
    console.log("Company:", companyName ? "✅" : "❌", companyName);
    console.log("Phone:", phone ? "✅" : "❌", phone);
    console.log("Email:", email ? "✅" : "❌", email);
    console.log("Address:", address ? "✅" : "❌", address);
    console.log("Service Type:", serviceType ? "✅" : "❌", serviceType);
    console.log("Message:", message ? "✅" : "❌", message);
    console.log("reCAPTCHA Token:", recaptchaToken ? "✅" : "❌");

    // Basic validation
    if (!name || !phone || !email || !serviceType || !message) {
      console.log("❌ Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "All required fields must be filled out" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ Email validation failed:", email);
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    console.log("✅ Basic validation passed");

    // Verify reCAPTCHA (temporarily disabled for localhost testing)
    console.log(
      "⚠️ reCAPTCHA verification temporarily disabled for localhost testing",
    );
    // if (recaptchaToken && !(await verifyRecaptcha(recaptchaToken))) {
    //   console.log('❌ reCAPTCHA verification failed')
    //   return NextResponse.json(
    //     { error: "reCAPTCHA verification failed" },
    //     { status: 400 },
    //   );
    // }

    console.log("✅ reCAPTCHA verification skipped");

    // Handle file uploads
    const files: File[] = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("file_") && value instanceof File) {
        files.push(value);
        console.log(
          `📎 File received: ${value.name} (${(value.size / 1024 / 1024).toFixed(2)}MB)`,
        );
      }
    }

    let fileUrls: string[] = [];
    if (files.length > 0) {
      console.log(`🔄 Starting upload of ${files.length} files...`);
      try {
        fileUrls = await uploadFiles(files);
        console.log(
          `✅ Successfully uploaded ${files.length} files:`,
          fileUrls,
        );

        // Verify files were actually uploaded
        for (const fileName of fileUrls) {
          try {
            const { data: fileCheck, error: checkError } =
              await supabase.storage
                .from("websiteleads")
                .list("", { search: fileName });

            if (checkError || !fileCheck?.some((f) => f.name === fileName)) {
              console.error(`❌ Verification failed for file: ${fileName}`);
              throw new Error(
                `File upload verification failed for ${fileName}`,
              );
            } else {
              console.log(`✅ Verified file exists: ${fileName}`);
            }
          } catch (verifyError) {
            console.error("File verification error:", verifyError);
            throw verifyError;
          }
        }
      } catch (error) {
        console.error("❌ File upload failed:", error);
        return NextResponse.json(
          { error: "File upload failed. Please try again." },
          { status: 500 },
        );
      }
    }

    // Save to Supabase database
    const submissionData = {
      name,
      company_name: companyName || null,
      phone,
      email,
      address: address || null,
      service_type: serviceType,
      message,
      shower_config: showerConfig ? JSON.parse(showerConfig) : null,
      file_urls: fileUrls,
      status: "new" as const,
    };

    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert([submissionData])
      .select()
      .single();

    if (dbError) {
      console.error("Database save error:", dbError);
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
        { status: 500 },
      );
    }

    console.log("✅ Submission saved to database:", submission.id);

    // Send email notification
    try {
      await sendEmailNotification(
        {
          name,
          companyName,
          phone,
          email,
          address,
          serviceType,
          message,
          showerConfig,
        },
        fileUrls,
        supabase,
      );
      console.log("✅ Email notification sent");
    } catch (error) {
      console.error("Email send error:", error);
      // Don't fail the request if email fails
    }

    // Log the submission for debugging
    console.log("\n--- NEW CONTACT SUBMISSION ---");
    console.log(`ID: ${submission.id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${serviceType}`);
    console.log(`Files: ${fileUrls.length}`);
    console.log("--- END SUBMISSION ---\n");

    // Return success response
    return NextResponse.json(
      { message: "Form submitted successfully", id: submission.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
