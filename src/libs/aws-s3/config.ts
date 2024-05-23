import { S3Client } from "@aws-sdk/client-s3";

const AWS_ACCESS_KEY_ID = import.meta.env.VITE_AWS_ACCESS_KEY_ID ?? "";
const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY ?? "";
const AWS_S3_REGION = import.meta.env.VITE_AWS_S3_REGION ?? "";

export const s3Client = new S3Client({
  region: AWS_S3_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});
