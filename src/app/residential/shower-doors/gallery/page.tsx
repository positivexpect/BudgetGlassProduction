"use client";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../../../lib/supabase";

interface GalleryImage {
  name: string;
  url: string;
  created_at: string;
  size?: number;
}

export default function ShowerGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadMessage, setUploadMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load gallery images on component mount
  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("websiteleads")
        .list("gallery", {
          limit: 100,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) {
        console.error("Error loading gallery images:", error);
        return;
      }

      if (data) {
        const imageUrls = data
          .filter(
            (file) =>
              file.name.toLowerCase().includes(".jpg") ||
              file.name.toLowerCase().includes(".jpeg") ||
              file.name.toLowerCase().includes(".png") ||
              file.name.toLowerCase().includes(".webp"),
          )
          .map((file) => ({
            name: file.name,
            url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/websiteleads/gallery/${file.name}`,
            created_at: file.created_at || "",
            size: file.metadata?.size,
          }));

        setImages(imageUrls);
      }
    } catch (error) {
      console.error("Error loading gallery:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/");
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      if (!isValidType) {
        setUploadMessage({
          type: "error",
          text: `${file.name} is not a valid image file`,
        });
        return false;
      }
      if (!isValidSize) {
        setUploadMessage({
          type: "error",
          text: `${file.name} is too large (max 10MB)`,
        });
        return false;
      }
      return true;
    });

    setSelectedFiles((prev) => [...prev, ...validFiles].slice(0, 10)); // Max 10 files
    setUploadMessage(null);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setUploadMessage(null);

    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`;
        const filePath = `gallery/${fileName}`;

        const { error } = await supabase.storage
          .from("websiteleads")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          throw new Error(`Failed to upload ${file.name}: ${error.message}`);
        }

        return fileName;
      });

      await Promise.all(uploadPromises);

      setUploadMessage({
        type: "success",
        text: `Successfully uploaded ${selectedFiles.length} image(s)`,
      });
      setSelectedFiles([]);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Reload gallery to show new images
      loadGalleryImages();
    } catch (error) {
      console.error("Upload error:", error);
      setUploadMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Upload failed",
      });
    } finally {
      setUploading(false);
    }
  };

  const clearUploadMessage = () => {
    setUploadMessage(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="mb-6">Shower Door Gallery</h1>
          <p className="text-xl mb-8">
            Browse our collection of custom shower door installations and share
            your own project photos
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn btn-white">
              Get Free Consultation
            </a>
            <a
              href="/residential/shower-doors"
              className="btn btn-outline-white"
            >
              Back to Shower Doors
            </a>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Share Your Project</h2>
            <p className="text-center text-gray-600 mb-8">
              Upload photos of your Budget Glass shower door installation to
              inspire others
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              {/* Upload Message */}
              {uploadMessage && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center justify-between ${
                    uploadMessage.type === "success"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  }`}
                >
                  <span>{uploadMessage.text}</span>
                  <button
                    onClick={clearUploadMessage}
                    className="text-lg font-bold hover:opacity-70"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* File Selection */}
              <div className="space-y-6">
                <div>
                  <label className="block mb-3 font-medium">
                    Select Images to Upload
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload high-quality photos of your shower door installation.
                    Max 10 files, 10MB each. Accepted formats: JPG, PNG, WebP
                  </p>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*"
                    multiple
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Selected Files Preview */}
                {selectedFiles.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Selected Files:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="relative border rounded-lg overflow-hidden"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-3">
                            <p className="text-sm font-medium truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(1)}MB
                            </p>
                          </div>
                          <button
                            onClick={() => removeFile(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleUpload}
                      disabled={uploading}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        uploading
                          ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                          : "btn-primary"
                      }`}
                    >
                      {uploading
                        ? "Uploading..."
                        : `Upload ${selectedFiles.length} Image(s)`}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Display */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center mb-12">Our Work</h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No images in the gallery yet. Be the first to upload!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-gray-200">
                    <img
                      src={image.url}
                      alt={`Shower door installation ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.innerHTML = `
                          <div class="flex items-center justify-center h-full text-gray-500">
                            <span>Image not available</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 bg-white text-primary px-4 py-2 rounded-lg font-medium transition-opacity hover:bg-primary hover:text-white"
                    >
                      View Full Size
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="mb-6">Ready for Your Custom Shower Door?</h2>
          <p className="text-xl mb-8">
            Get a free consultation and see how we can transform your bathroom
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn btn-white">
              Get Free Consultation
            </a>
            <a
              href="/residential/shower-doors"
              className="btn btn-outline-white"
            >
              Design Your Shower
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
