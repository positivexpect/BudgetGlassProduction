"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import type { ContactSubmission } from "../../../lib/supabase";

// Debounce utility function
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [noteValues, setNoteValues] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/admin/login");
      return;
    }

    setUser(session.user);
    fetchSubmissions();
  };

  const getDateRange = (filterType: string) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (filterType) {
      case "today":
        return {
          start: today.toISOString(),
          end: new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString(),
        };
      case "yesterday":
        const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
        return { start: yesterday.toISOString(), end: today.toISOString() };
      case "last7days":
        const week = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        return { start: week.toISOString(), end: null };
      case "last30days":
        const month = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        return { start: month.toISOString(), end: null };
      case "thismonth":
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return { start: monthStart.toISOString(), end: null };
      default:
        return { start: null, end: null };
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (filter !== "all") {
        query = query.eq("status", filter);
      }

      // Apply date filtering
      if (dateFilter !== "all") {
        const { start, end } = getDateRange(dateFilter);
        if (start) {
          query = query.gte("created_at", start);
        }
        if (end) {
          query = query.lt("created_at", end);
        }
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching submissions:", error);
      } else {
        setSubmissions(data || []);
        // Initialize note values
        const notes: { [key: string]: string } = {};
        data?.forEach((submission) => {
          if (submission.id) {
            notes[submission.id] = (submission as any).notes || "";
          }
        });
        setNoteValues(notes);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchSubmissions();
    }
  }, [filter, dateFilter, user]);

  const updateSubmission = async (id: string, updates: any) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update(updates)
        .eq("id", id);

      if (error) {
        console.error("Error updating submission:", error);
      } else {
        fetchSubmissions();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Debounced note update to prevent re-rendering on every keystroke
  const updateNotes = React.useCallback(
    debounce((id: string, notes: string) => {
      updateSubmission(id, { notes });
    }, 1000),
    [],
  );

  const handleNotesChange = (id: string, value: string) => {
    setNoteValues((prev) => ({ ...prev, [id]: value }));
    updateNotes(id, value);
  };

  const downloadFile = async (fileName: string) => {
    try {
      console.log("Attempting to download file:", fileName);

      // Clean the filename to remove any leading slashes
      const cleanFileName = fileName.startsWith("/")
        ? fileName.slice(1)
        : fileName;
      console.log("Clean filename for download:", cleanFileName);

      const { data, error } = await supabase.storage
        .from("websiteleads")
        .download(cleanFileName);

      if (error) {
        console.error("Error downloading file:", error);
        if (error.message.includes("not found")) {
          alert(
            `File "${fileName.split("-").slice(2).join("-")}" not found. It may have been deleted or the upload failed.`,
          );
        } else {
          alert(
            "Error downloading file. Please check your internet connection and try again.",
          );
        }
        return;
      }

      console.log("File downloaded successfully, starting browser download...");
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName.split("-").slice(2).join("-");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Unexpected error while downloading file. Please try again.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const checkStorageBucket = async () => {
    try {
      console.log("🔍 Checking storage bucket contents...");
      const { data: files, error } = await supabase.storage
        .from("websiteleads")
        .list("", {
          limit: 50,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) {
        console.error("❌ Storage bucket error:", error);
        alert(`Storage Error: ${error.message}`);
        return;
      }

      console.log("📁 Storage bucket files:", files);

      // Get all file URLs from database to compare
      const { data: dbSubmissions, error: dbError } = await supabase
        .from("contact_submissions")
        .select("file_urls")
        .not("file_urls", "is", null);

      if (dbError) {
        console.error("❌ Database query error:", dbError);
        alert("Error querying database for file comparison");
        return;
      }

      // Flatten all file URLs from database
      const allDbFiles =
        dbSubmissions?.flatMap((sub) => sub.file_urls || []) || [];
      const storageFileNames = files?.map((f) => f.name) || [];

      console.log("📊 File comparison:");
      console.log("Files in database:", allDbFiles.length);
      console.log("Files in storage:", storageFileNames.length);

      // Find missing files
      const missingFiles = allDbFiles.filter(
        (dbFile) => !storageFileNames.includes(dbFile),
      );
      if (missingFiles.length > 0) {
        console.log("⚠️ Missing files in storage:", missingFiles);
      }

      // Find orphaned files
      const orphanedFiles = storageFileNames.filter(
        (storageFile) => !allDbFiles.includes(storageFile),
      );
      if (orphanedFiles.length > 0) {
        console.log("🗑️ Orphaned files in storage:", orphanedFiles);
      }

      const summary = `
📁 Storage Analysis:
• Files in storage: ${storageFileNames.length}
• Files in database: ${allDbFiles.length}
• Missing from storage: ${missingFiles.length}
• Orphaned in storage: ${orphanedFiles.length}

Check console for detailed file lists.`;

      alert(summary);
    } catch (error) {
      console.error("❌ Storage check error:", error);
      alert("Error checking storage bucket");
    }
  };

  const cleanupMissingFiles = async () => {
    if (
      !confirm(
        "This will remove file references from database records where the files are missing from storage. Continue?",
      )
    ) {
      return;
    }

    try {
      console.log("🧹 Starting cleanup of missing files...");

      // Get all submissions with files
      const { data: submissions, error } = await supabase
        .from("contact_submissions")
        .select("id, file_urls")
        .not("file_urls", "is", null);

      if (error) {
        console.error("Error fetching submissions:", error);
        return;
      }

      let cleanedCount = 0;
      for (const submission of submissions || []) {
        if (!submission.file_urls || submission.file_urls.length === 0)
          continue;

        const validFiles: string[] = [];
        for (const fileName of submission.file_urls) {
          try {
            const { data: fileCheck } = await supabase.storage
              .from("websiteleads")
              .list("", { search: fileName });

            if (fileCheck?.some((f) => f.name === fileName)) {
              validFiles.push(fileName);
            } else {
              console.log(`🗑️ Removing missing file reference: ${fileName}`);
            }
          } catch (e) {
            console.log(
              `⚠️ Error checking file ${fileName}, removing reference`,
            );
          }
        }

        // Update the submission if files were removed
        if (validFiles.length !== submission.file_urls.length) {
          await supabase
            .from("contact_submissions")
            .update({ file_urls: validFiles.length > 0 ? validFiles : null })
            .eq("id", submission.id);

          cleanedCount++;
        }
      }

      alert(`✅ Cleanup complete! Updated ${cleanedCount} submissions.`);
      fetchSubmissions(); // Refresh the list
    } catch (error) {
      console.error("❌ Cleanup error:", error);
      alert("Error during cleanup");
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      new: "bg-red-100 text-red-800",
      contacted: "bg-yellow-100 text-yellow-800",
      qualified: "bg-blue-100 text-blue-800",
      proposal_sent: "bg-purple-100 text-purple-800",
      won: "bg-green-100 text-green-800",
      lost: "bg-gray-100 text-gray-800",
      not_interested: "bg-gray-100 text-gray-800",
      follow_up: "bg-orange-100 text-orange-800",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: "bg-gray-100 text-gray-800",
      medium: "bg-blue-100 text-blue-800",
      high: "bg-orange-100 text-orange-800",
      urgent: "bg-red-100 text-red-800",
    };
    return (
      colors[priority as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  if (loading && !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Budget Glass Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.email}
              </span>
              <button
                onClick={checkStorageBucket}
                className="bg-gray-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-gray-700"
                title="Check storage bucket for debugging"
              >
                🔍 Check Storage
              </button>
              <button
                onClick={cleanupMissingFiles}
                className="bg-orange-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-orange-700"
                title="Clean up missing file references"
              >
                🧹 Cleanup Files
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-6 space-y-4">
          {/* Status Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Filter by Status:
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "all",
                "new",
                "contacted",
                "qualified",
                "proposal_sent",
                "won",
                "lost",
                "not_interested",
                "follow_up",
              ].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    filter === status
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {status.charAt(0).toUpperCase() +
                    status.replace("_", " ").slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Date Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Filter by Date:
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Time" },
                { key: "today", label: "Today" },
                { key: "yesterday", label: "Yesterday" },
                { key: "last7days", label: "Last 7 Days" },
                { key: "last30days", label: "Last 30 Days" },
                { key: "thismonth", label: "This Month" },
              ].map((dateOption) => (
                <button
                  key={dateOption.key}
                  onClick={() => setDateFilter(dateOption.key)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    dateFilter === dateOption.key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {dateOption.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submissions */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-xl">Loading submissions...</div>
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">No submissions found</p>
            </div>
          ) : (
            submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white rounded-lg shadow p-6"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{submission.name}</h3>
                    {(submission as any).company_name && (
                      <p className="text-gray-700 font-medium">
                        {(submission as any).company_name}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {submission.email} • {submission.phone}
                    </p>
                    {(submission as any).address && (
                      <p className="text-gray-600 text-sm">
                        📍 {(submission as any).address}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {submission.created_at
                        ? new Date(submission.created_at).toLocaleString()
                        : "No date"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status || "new")}`}
                    >
                      {(submission.status || "new").replace("_", " ")}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor((submission as any).priority || "medium")}`}
                    >
                      {(submission as any).priority || "medium"} priority
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <select
                    value={submission.status || "new"}
                    onChange={(e) =>
                      updateSubmission(submission.id!, {
                        status: e.target.value,
                      })
                    }
                    className="px-3 py-1 border rounded text-sm"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal_sent">Proposal Sent</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                    <option value="not_interested">Not Interested</option>
                    <option value="follow_up">Follow Up</option>
                  </select>

                  <select
                    value={(submission as any).priority || "medium"}
                    onChange={(e) =>
                      updateSubmission(submission.id!, {
                        priority: e.target.value,
                      })
                    }
                    className="px-3 py-1 border rounded text-sm"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>

                  <input
                    type="date"
                    value={(submission as any).follow_up_date || ""}
                    onChange={(e) =>
                      updateSubmission(submission.id!, {
                        follow_up_date: e.target.value,
                      })
                    }
                    className="px-3 py-1 border rounded text-sm"
                    placeholder="Follow-up date"
                  />
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium mb-1">Service Type:</h4>
                    <p className="text-gray-700">{submission.service_type}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Message:</h4>
                    <p className="text-gray-700">{submission.message}</p>
                  </div>
                </div>

                {/* Shower Configuration */}
                {submission.shower_config && (
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium mb-2">Shower Configuration:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div>
                        <strong>Door:</strong>{" "}
                        {submission.shower_config.doorConfiguration?.name ||
                          "N/A"}
                      </div>
                      <div>
                        <strong>Frame:</strong>{" "}
                        {submission.shower_config.frameStyle?.name || "N/A"}
                      </div>
                      <div>
                        <strong>Hardware:</strong>{" "}
                        {submission.shower_config.hardwareFinish?.name || "N/A"}
                      </div>
                      <div>
                        <strong>Glass:</strong>{" "}
                        {submission.shower_config.glassType?.name || "N/A"}
                      </div>
                    </div>
                  </div>
                )}

                {/* Files */}
                {submission.file_urls && submission.file_urls.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">
                      Attachments ({submission.file_urls.length}):
                    </h4>
                    <div className="space-y-3">
                      {submission.file_urls.map((fileName, index) => {
                        const originalName = fileName
                          .split("-")
                          .slice(2)
                          .join("-");
                        const fileExtension = fileName
                          .split(".")
                          .pop()
                          ?.toLowerCase();
                        const isImage = [
                          "jpg",
                          "jpeg",
                          "png",
                          "gif",
                          "webp",
                        ].includes(fileExtension || "");
                        const isVideo = ["mp4", "mov", "avi", "wmv"].includes(
                          fileExtension || "",
                        );
                        const publicUrl = `https://xcwmzlxaozdmxxrwvqjn.supabase.co/storage/v1/object/public/websiteleads/${fileName}`;

                        return (
                          <div
                            key={index}
                            className="p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">
                                {isImage ? "🖼️" : isVideo ? "🎥" : "📎"}{" "}
                                {originalName}
                              </span>
                              <button
                                onClick={() => downloadFile(fileName)}
                                className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                                title="Download file"
                              >
                                ⬇️ Download
                              </button>
                            </div>

                            {/* Inline media display */}
                            {isImage && (
                              <div className="mt-2">
                                <img
                                  src={publicUrl}
                                  alt={originalName}
                                  className="max-w-full h-auto max-h-64 rounded border"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.nextElementSibling!.textContent =
                                      "Image failed to load - file may be missing";
                                  }}
                                />
                                <p className="text-xs text-red-500 mt-1 hidden"></p>
                              </div>
                            )}

                            {isVideo && (
                              <div className="mt-2">
                                <video
                                  src={publicUrl}
                                  controls
                                  className="max-w-full h-auto max-h-64 rounded border"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.nextElementSibling!.textContent =
                                      "Video failed to load - file may be missing";
                                  }}
                                >
                                  Your browser does not support the video tag.
                                </video>
                                <p className="text-xs text-red-500 mt-1 hidden"></p>
                              </div>
                            )}

                            {!isImage && !isVideo && (
                              <div className="mt-2 text-center py-4 border-2 border-dashed border-gray-300 rounded">
                                <p className="text-sm text-gray-500">
                                  Preview not available - Click download to
                                  access file
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <h4 className="font-medium mb-2">Notes:</h4>
                  <textarea
                    value={noteValues[submission.id!] || ""}
                    onChange={(e) =>
                      handleNotesChange(submission.id!, e.target.value)
                    }
                    placeholder="Add notes about this lead..."
                    className="w-full p-3 border rounded-lg"
                    rows={3}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
