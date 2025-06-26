"use client";

import { useEffect, useState } from "react";

import FetchImages from "./FetchImages";

import "./DisplayImages.css";

export default function DisplayImages() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const imageData = await FetchImages();
      setGallery(imageData);
    };
    getJobs();
  }, []);

  return (
    <div>
      {gallery.map((stuff) => (
        <div key={stuff.id}>
          <p>{stuff.id}</p>
          <img src={stuff.url} className="SideImage"></img>
        </div>
      ))}
    </div>
  );
}
