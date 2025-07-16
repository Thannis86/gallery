"use server";

import { db } from "../../utils/dbConnection";

export default async function DataBaseAdd(url) {
  await db.query(
    `INSERT INTO gallery_images (url, hidden)
        VALUES($1, FALSE)`,
    [url]
  );
  console.log("Done");
}
