import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { s3Client } from "./config";
import axios, { AxiosProgressEvent } from "axios";

const AWS_S3_BUCKET_NAME = import.meta.env.VITE_AWS_S3_BUCKET_NAME ?? "";

type UploadFileToS3 = {
  file: File;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

export async function uploadFileToS3({
  file,
  onUploadProgress,
}: UploadFileToS3) {
  // get presigned url
  const { url, fields } = await createPresignedPost(s3Client, {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: file.name,
    Fields: {
      "Content-Type": file.type,
    },
    Expires: 600,
  });

  await axios.create()({
    url: url,
    method: "post",
    data: { ...fields, file: file },
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress(progressEvent) {
      console.log(progressEvent);
      if (onUploadProgress) {
        onUploadProgress(progressEvent);
      }
    },
  });
}
