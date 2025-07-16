"use client";

import { Card, Text } from "@radix-ui/themes";

import "./homepage.css";
import DisplayImages from "../components/Images/DisplayImages";
import { useState } from "react";

export default function homePage() {
  const [selectedImage, setSelectedImage] = useState(
    "https://res.cloudinary.com/lincolnsinn-site/image/upload/w_991,h_591,f_auto,c_fill,g_auto/web-main/2021/12/JY-1-smaller-scaled.jpg"
  );
  return (
    <div
      id="main"
      style={{
        backgroundImage: `url(${selectedImage.url})`,
      }}
    >
      <div>
        <DisplayImages onSelect={setSelectedImage} />
      </div>
    </div>
  );
}
