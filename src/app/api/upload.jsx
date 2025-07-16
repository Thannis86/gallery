import { useState } from "react";

import DataBaseAdd from "../../components/Images_Upload/DataBaseAdd";

export default function Home() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault(); // ✅ Prevent form from submitting

    if (!file) return;

    try {
      const res = await fetch(
        `/api/upload-url?fileType=${encodeURIComponent(file.type)}`
      );
      const { url, key } = await res.json();

      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      const finalUrl = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
      setImageUrl(finalUrl);

      console.log("Image uploaded to:", finalUrl);

      await fetch("/api/send-url-to-db", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: finalUrl }),
      });
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>

      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <img src={imageUrl} alt="Uploaded" width={300} />
        </div>
      )}
    </div>
  );
}
