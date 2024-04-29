import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { s3Client } from "./config";

export async function createPresignedPostRequest(
  Bucket: string,
  Key: string,
  ContentType: string,
  Expires: number
) {
  const post = await createPresignedPost(s3Client, {
    Bucket,
    Key,
    Fields: {
      "Content-Type": ContentType,
    },
    Expires,
  });

  return post;
}
