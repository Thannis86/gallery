"use server";

import { db } from "../../utils/dbConnection";

export default async function FetchImages() {
  const images = await db.query(`SELECT * FROM gallery_images`);
  const brokenImages = await images.rows;
  console.log(brokenImages);
  return await brokenImages;
}
