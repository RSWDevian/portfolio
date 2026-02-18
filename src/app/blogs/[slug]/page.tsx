// src/app/picUpload29705/page.tsx
"use client";

import { useState, useEffect } from "react";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  folder: string;
}

export default function PictureUploadPage() {
  const [folderName, setFolderName] = useState("");
  const [imageName, setImageName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadedData, setUploadedData] = useState<any>(null);
  
  const [images, setImages] = useState<CloudinaryResource[]>([]);
  const [folders, setFolders] = useState<string[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<CloudinaryResource | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch all images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/images");
      const data = await response.json();
      
      if (data.success) {
        setImages(data.resources);
        // Extract unique folders
        const uniqueFolders = [...new Set(data.resources.map((img: CloudinaryResource) => img.folder))];
        setFolders(uniqueFolders.sort());
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!folderName.trim()) {
      setMessage("Please enter a folder name");
      return;
    }

    if (!imageName.trim()) {
      setMessage("Please enter an image name");
      return;
    }

    if (!file) {
      setMessage("Please select an image file");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folderName", folderName);
      formData.append("imageName", imageName);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Image uploaded successfully!");
        setUploadedData(data.data);
        setFolderName("");
        setImageName("");
        setFile(null);
        // Refresh images list
        fetchImages();
      } else {
        setMessage(`Upload failed: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    } finally {
      setUploading(false);
    }
  };

  const getImagesByFolder = (folder: string | null) => {
    if (!folder) return [];
    return images.filter((img) => img.folder === folder);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* LEFT SIDE - UPLOAD FORM */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          borderRight: "1px solid #ddd",
          overflowY: "auto",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Upload Image</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="folderName" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Folder Name:
            </label>
            <input
              type="text"
              id="folderName"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="e.g., portfolio, projects"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="imageName" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Image Name:
            </label>
            <input
              type="text"
              id="imageName"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              placeholder="e.g., hero-image"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="file" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Select Image:
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
            {file && <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Selected: {file.name}</p>}
          </div>

          <button
            type="submit"
            disabled={uploading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: uploading ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: uploading ? "not-allowed" : "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </form>

        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              backgroundColor: message.includes("success") ? "#d4edda" : "#f8d7da",
              color: message.includes("success") ? "#155724" : "#721c24",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            {message}
          </div>
        )}
      </div>

      {/* RIGHT SIDE - IMAGE GALLERY */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          overflowY: "auto",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>Image Gallery</h1>

        {loading ? (
          <p style={{ color: "#666" }}>Loading images...</p>
        ) : (
          <>
            {/* FOLDERS LIST */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ marginBottom: "15px", color: "#555" }}>Folders</h3>
              {folders.length === 0 ? (
                <p style={{ color: "#999" }}>No folders yet</p>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {folders.map((folder) => (
                    <button
                      key={folder}
                      onClick={() => setSelectedFolder(folder)}
                      style={{
                        padding: "12px",
                        backgroundColor: selectedFolder === folder ? "#007bff" : "#e9ecef",
                        color: selectedFolder === folder ? "white" : "#333",
                        border: "1px solid #dee2e6",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "500",
                        transition: "all 0.3s",
                      }}
                    >
                      {folder} ({getImagesByFolder(folder).length})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* IMAGES IN SELECTED FOLDER */}
            {selectedFolder && (
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ marginBottom: "15px", color: "#555" }}>Images in {selectedFolder}</h3>
                {getImagesByFolder(selectedFolder).length === 0 ? (
                  <p style={{ color: "#999" }}>No images in this folder</p>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "10px",
                      maxHeight: "400px",
                      overflowY: "auto",
                      border: "1px solid #dee2e6",
                      padding: "15px",
                      borderRadius: "4px",
                      backgroundColor: "#fafbfc",
                    }}
                  >
                    {getImagesByFolder(selectedFolder).map((img) => (
                      <div
                        key={img.public_id}
                        style={{
                          padding: "12px",
                          backgroundColor: selectedImage?.public_id === img.public_id ? "#d1ecf1" : "white",
                          border: "1px solid #dee2e6",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: "13px", color: "#333", margin: "0 0 5px 0", fontWeight: "500" }}>
                            {img.public_id.split("/").pop()}
                          </p>
                          <p style={{ fontSize: "11px", color: "#999", margin: "0", wordBreak: "break-all" }}>
                            {img.public_id}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedImage(img)}
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "12px",
                            marginLeft: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Show
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SELECTED IMAGE PREVIEW */}
            {selectedImage && (
              <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #dee2e6" }}>
                <h3 style={{ marginBottom: "15px", color: "#555" }}>Preview</h3>
                <img
                  src={selectedImage.secure_url}
                  alt={selectedImage.public_id}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "4px",
                    border: "1px solid #dee2e6",
                    marginBottom: "15px",
                  }}
                />
                <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "4px", fontSize: "12px" }}>
                  <p style={{ margin: "0 0 10px 0" }}>
                    <strong>Public ID:</strong> {selectedImage.public_id}
                  </p>
                  <p style={{ margin: "0" }}>
                    <strong>URL:</strong>{" "}
                    <a
                      href={selectedImage.secure_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007bff", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      {selectedImage.secure_url}
                    </a>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}