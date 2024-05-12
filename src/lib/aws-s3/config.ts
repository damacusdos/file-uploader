import { S3Client } from "@aws-sdk/client-s3";

const AWS_ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID ?? "";
const AWS_SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY ?? "";

export const s3Client = new S3Client({
  region: "",
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});
