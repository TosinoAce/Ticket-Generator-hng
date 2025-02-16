import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "./AvatarUpload.css";

export default function AvatarUpload({ onUploadSuccess }) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "AceTicketPreset");

    try {
      setUploading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/daim6idjj/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;
      setPreviewUrl(imageUrl);
      onUploadSuccess(imageUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <p>Upload Profile Photo</p>
      <div id="photoBgBox">
        <div id="imgPreview">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
          <img src="/cloud-download.svg" alt="cloud-download svg" />
          <p>Drag & drop an image here, or click to select one</p>
          {previewUrl && (
            <img src={previewUrl} alt="Preview" id="preview"/>
          )}{" "}
        </div>
      </div>
    </>
  );
}
