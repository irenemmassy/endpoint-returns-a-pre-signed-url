import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";

import { s3Uploadv2 } from "./S3Service.js";

dotenv.config();
const app = express();
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({
  storage,
});

// Upload Files
app.post("/", upload.single("file"), async (req, res) => {
  try {
    const results = await s3Uploadv2(req.file);
    return res.json(results);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
