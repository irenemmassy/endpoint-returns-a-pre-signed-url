import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import { s3Uploadv2 } from "./S3Service.js";

dotenv.config();
const app = express();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  //   limits: { fileSize: 1000000000 },
});

// Upload Files
app.post("/", upload.array("file"), async (req, res) => {
  try {
    const results = await s3Uploadv2(req.files);
    return res.json({ status: "success", results: results });
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
