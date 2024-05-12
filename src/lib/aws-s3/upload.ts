import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { s3Client } from "./config";
import axios from "axios";

type UploadFileToS3 = {
  file: File;
};

export async function uploadFileToS3({ file }: UploadFileToS3) {
  // get presigned url
  const { url } = await createPresignedPost(s3Client, {
    Bucket: "",
    Key: file.name,
    Fields: {
      "Content-Type": file.type,
    },
    Expires: 600,
  });

  // use form data to upload file
  const formData = new FormData();
  formData.append("file", file);

  await axios.post(url, formData);
}
