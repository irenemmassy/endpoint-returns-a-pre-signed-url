import S3 from "aws-sdk/clients/s3.js";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3();

export const s3Uploadv2 = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}-${file.originalname}`,
    Body: file.buffer,
  };

  return await s3.upload(params).promise();
};
