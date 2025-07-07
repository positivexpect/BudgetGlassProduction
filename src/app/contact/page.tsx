"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Contact() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showerConfig, setShowerConfig] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check for success message
    if (searchParams.get("success") === "true") {
      setShowSuccess(true);
    }

    // Check if coming from shower builder
    if (searchParams.get("from") === "shower-builder") {
      const storedConfig = sessionStorage.getItem("showerConfig");
      if (storedConfig) {
        try {
          const config = JSON.parse(storedConfig);
          setShowerConfig(config);
          // Pre-fill the service type
          setTimeout(() => {
            const serviceTypeSelect = document.getElementById(
              "serviceType",
            ) as HTMLSelectElement;
            if (serviceTypeSelect) {
              serviceTypeSelect.value = "shower-doors";
            }
          }, 100);
        } catch (e) {
          console.error("Error parsing shower config:", e);
        }
      }
    }
  }, [searchParams]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const isValidType =
        file.type.startsWith("image/") || file.type.startsWith("video/");
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValidType && isValidSize;
    });

    setSelectedFiles((prev) => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      // Add shower configuration if available
      if (showerConfig) {
        formData.append("showerConfig", JSON.stringify(showerConfig));
      }

      // Add files to form data
      selectedFiles.forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });

      // Get reCAPTCHA token if available
      if (
        recaptchaLoaded &&
        window.grecaptcha &&
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY !==
          "your_recaptcha_site_key_here"
      ) {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            {
              action: "contact_form",
            },
          );
          formData.append("recaptchaToken", token);
        } catch (e) {
          console.warn("reCAPTCHA error:", e);
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Clear shower config from session storage
        sessionStorage.removeItem("showerConfig");
        // Redirect to success page
        window.location.href = "/contact?success=true";
      } else {
        // Handle error response
        let errorMessage = "Failed to submit form";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // If we can't parse JSON, use status text or generic message
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        onLoad={() => setRecaptchaLoaded(true)}
      />
      <main>
        <section className="bg-primary text-white py-20">
          <div className="container">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl">
              Get in touch with Richmond's glass experts
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
                <strong>Thank you!</strong> Your message has been sent
                successfully. We'll get back to you soon.
              </div>
            )}

            {/* Shower Configuration Display */}
            {showerConfig && (
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Your Shower Door Configuration:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Door Type:</span>
                    <br />
                    {showerConfig.doorConfiguration?.name || "Not selected"}
                  </div>
                  <div>
                    <span className="font-medium">Frame Style:</span>
                    <br />
                    {showerConfig.frameStyle?.name || "Not selected"}
                  </div>
                  <div>
                    <span className="font-medium">Hardware:</span>
                    <br />
                    {showerConfig.hardwareFinish?.name || "Not selected"}
                  </div>
                  <div>
                    <span className="font-medium">Glass Type:</span>
                    <br />
                    {showerConfig.glassType?.name || "Not selected"}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  This configuration will be included with your message.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-xl">
                      <a
                        href="tel:804-231-1222"
                        className="text-primary hover:underline"
                      >
                        (804) 231-1222
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Available 24/7 for emergency service
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p>Richmond, VA</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving the greater Richmond area
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>24/7 Emergency Service Available</p>
                  </div>

                  <div className="pt-4">
                    <span className="inline-block bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                      Online Scheduling Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-neutral-lightest p-8 rounded-lg">
                <h2 className="mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block mb-2 font-medium"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block mb-2 font-medium">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Optional - Street address, city, state, zip"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block mb-2 font-medium"
                    >
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="shower-doors">Custom Shower Doors</option>
                      <option value="window-repair">Window Repair</option>
                      <option value="storefront-repair">
                        Storefront Repair
                      </option>
                      <option value="storefront-new">New Storefront</option>
                      <option value="commercial-glass">Commercial Glass</option>
                      <option value="emergency-repair">Emergency Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Please describe your project or service needs..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Photos/Videos (Optional)
                    </label>
                    <p className="text-sm text-gray-600 mb-3">
                      Upload photos or videos of your project. Max 5 files, 10MB
                      each.
                    </p>

                    <div className="space-y-3">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept="image/*,video/*"
                        multiple
                        capture="environment"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />

                      {selectedFiles.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">
                            Selected Files:
                          </h4>
                          {selectedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between bg-white p-2 rounded border"
                            >
                              <span className="text-sm truncate flex-1">
                                {file.name} (
                                {(file.size / 1024 / 1024).toFixed(1)}MB)
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700 ml-2 text-sm font-medium"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "btn-primary"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
