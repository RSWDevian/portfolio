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
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#0f172a" }}>
      {/* LEFT SIDE - UPLOAD FORM */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          borderRight: "1px solid #334155",
          overflowY: "auto",
          backgroundColor: "#1e293b",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#f1f5f9", fontSize: "28px" }}>Upload Image</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="folderName" style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#cbd5e1" }}>
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
                borderRadius: "6px",
                border: "1px solid #475569",
                fontSize: "14px",
                boxSizing: "border-box",
                backgroundColor: "#0f172a",
                color: "#f1f5f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="imageName" style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#cbd5e1" }}>
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
                borderRadius: "6px",
                border: "1px solid #475569",
                fontSize: "14px",
                boxSizing: "border-box",
                backgroundColor: "#0f172a",
                color: "#f1f5f9",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="file" style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#cbd5e1" }}>
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
                borderRadius: "6px",
                border: "1px solid #475569",
                boxSizing: "border-box",
                backgroundColor: "#0f172a",
                color: "#f1f5f9",
                cursor: "pointer",
              }}
            />
            {file && <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "5px" }}>Selected: {file.name}</p>}
          </div>

          <button
            type="submit"
            disabled={uploading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: uploading ? "#475569" : "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: uploading ? "not-allowed" : "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "background-color 0.3s",
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
              backgroundColor: message.includes("success") ? "#1e3a2f" : "#3a2420",
              color: message.includes("success") ? "#86efac" : "#fca5a5",
              borderRadius: "6px",
              fontSize: "14px",
              border: message.includes("success") ? "1px solid #22c55e" : "1px solid #dc2626",
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
          backgroundColor: "#0f172a",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#f1f5f9", fontSize: "28px" }}>Image Gallery</h1>

        {loading ? (
          <p style={{ color: "#94a3b8" }}>Loading images...</p>
        ) : (
          <>
            {/* FOLDERS LIST */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ marginBottom: "15px", color: "#cbd5e1", fontSize: "18px" }}>Folders</h3>
              {folders.length === 0 ? (
                <p style={{ color: "#64748b" }}>No folders yet</p>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {folders.map((folder) => (
                    <button
                      key={folder}
                      onClick={() => setSelectedFolder(folder)}
                      style={{
                        padding: "12px",
                        backgroundColor: selectedFolder === folder ? "#3b82f6" : "#1e293b",
                        color: selectedFolder === folder ? "white" : "#cbd5e1",
                        border: `1px solid ${selectedFolder === folder ? "#3b82f6" : "#334155"}`,
                        borderRadius: "6px",
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
                <h3 style={{ marginBottom: "15px", color: "#cbd5e1", fontSize: "18px" }}>Images in {selectedFolder}</h3>
                {getImagesByFolder(selectedFolder).length === 0 ? (
                  <p style={{ color: "#64748b" }}>No images in this folder</p>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "10px",
                      maxHeight: "400px",
                      overflowY: "auto",
                      border: "1px solid #334155",
                      padding: "15px",
                      borderRadius: "6px",
                      backgroundColor: "#1e293b",
                    }}
                  >
                    {getImagesByFolder(selectedFolder).map((img) => (
                      <div
                        key={img.public_id}
                        style={{
                          padding: "12px",
                          backgroundColor: selectedImage?.public_id === img.public_id ? "#1e3a8a" : "#0f172a",
                          border: `1px solid ${selectedImage?.public_id === img.public_id ? "#3b82f6" : "#334155"}`,
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "all 0.3s",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: "13px", color: "#f1f5f9", margin: "0 0 5px 0", fontWeight: "500" }}>
                            {img.public_id.split("/").pop()}
                          </p>
                          <p style={{ fontSize: "11px", color: "#64748b", margin: "0", wordBreak: "break-all" }}>
                            {img.public_id}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedImage(img)}
                          style={{
                            padding: "6px 12px",
                            backgroundColor: "#10b981",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "12px",
                            marginLeft: "10px",
                            whiteSpace: "nowrap",
                            transition: "background-color 0.3s",
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
              <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #334155" }}>
                <h3 style={{ marginBottom: "15px", color: "#cbd5e1", fontSize: "18px" }}>Preview</h3>
                <img
                  src={selectedImage.secure_url}
                  alt={selectedImage.public_id}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "6px",
                    border: "1px solid #334155",
                    marginBottom: "15px",
                  }}
                />
                <div style={{ backgroundColor: "#1e293b", padding: "15px", borderRadius: "6px", fontSize: "12px", border: "1px solid #334155" }}>
                  <p style={{ margin: "0 0 10px 0", color: "#cbd5e1" }}>
                    <strong>Public ID:</strong> <span style={{ color: "#94a3b8" }}>{selectedImage.public_id}</span>
                  </p>
                  <p style={{ margin: "0", color: "#cbd5e1" }}>
                    <strong>URL:</strong>{" "}
                    <a
                      href={selectedImage.secure_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#60a5fa", textDecoration: "none", wordBreak: "break-all" }}
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