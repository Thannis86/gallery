"use client";

import { useEffect, useState } from "react";

import FetchImages from "./FetchImages";

import "./DisplayImages.css";

export default function DisplayImages({ onSelect }) {
  const [gallery, setGallery] = useState([]);
  const [currentImageNumber, setCurrentImageNumber] = useState(0);
  const [currentImage, setCurrentImage] = useState([]);

  const fetchGallery = async () => {
    const imageData = await FetchImages();
    setGallery(imageData);
  };

  useEffect(() => {
    onSelect(currentImage);
  });

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setCurrentImageNumber((prev) => {
        const newIndex = (prev + 1) % gallery.length;
        setCurrentImage(gallery[newIndex]);
        console.log(newIndex);
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(intervalIndex);
  }, [gallery]);

  useEffect(() => {
    fetchGallery();
    const intervalId = setInterval(() => {
      fetchGallery();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  function newImage(index) {
    setCurrentImageNumber(index);
    setCurrentImage(gallery[index]);
    onSelect(currentImage);
  }

  return (
    <div id="display-images-main-div">
      <div id="display-images-container">
        {gallery.map((stuff, index) => (
          <div key={stuff.id} onClick={() => newImage(index)}>
            <img src={stuff.url} className="display-image"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
