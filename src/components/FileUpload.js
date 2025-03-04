import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ setImageUrl }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    // Check file size (6 MB = 6 * 1024 * 1024 bytes)
    const maxFileSize = 6 * 1024 * 1024;
    if (file.size > maxFileSize) {
      alert("File size exceeds 6 MB. Please upload a smaller file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Uploading file:", file.name);
      const response = await axios.post("https://tptywd4f2c.execute-api.us-east-2.amazonaws.com/dev/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response from Flask:", response.data);
      if (response.data.image_url) {
        setImageUrl(response.data.image_url); // Assuming your API returns the presigned URL.
      } else {
        console.error("Unexpected response format:", response.data);
        alert("Unexpected response format from the server.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.status, error.response.data);
        alert(`Server Error: ${error.response.data || "Unknown error"}`);
      } else if (error.request) {
        console.error("No response received from the server:", error.request);
        alert("No response received from the server. Please check the backend.");
      } else {
        console.error("Error setting up the request:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;

