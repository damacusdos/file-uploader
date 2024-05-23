import React from "react";
import { DnDUploader } from "@components/Uploader";
import { UploadingFile, SuccessFile, ErrorFile } from "@components/file";
import { uploadFileToS3 } from "@libs/aws-s3";
import { v4 as uuidv4 } from "uuid";
// type
import { AxiosProgressEvent } from "axios";

enum UploadStatus {
  Uploading = "Uploading",
  Success = "Success",
  Error = "Error",
}

type UploadFile = {
  id: string;
  name: string;
  currentSize: number;
  totalSize: number;
  status: UploadStatus;
};

type UploadedFiles = Record<string, UploadFile>;

function App() {
  const [files, setFiles] = React.useState<UploadedFiles>({});

  const onUploadProgress = (e: AxiosProgressEvent, newFile: UploadFile) => {
    const currentSize = e.loaded;
    const totalSize = e.total;

    if (currentSize === totalSize) {
      const uploadedFile = { ...newFile, status: UploadStatus.Success };
      console.log(uploadedFile);
      setFiles((prev) => ({ ...prev, [uploadedFile.id]: uploadedFile }));
    } else {
      const uploadingFile = { ...newFile, currentSize };
      setFiles((prev) => ({ ...prev, [uploadingFile.id]: uploadingFile }));
    }
  };

  const handleUpload = async (files: File[]) => {
    // call s3 upload function
    for (const file of files) {
      const fileId = uuidv4();
      const newFile = {
        [fileId]: {
          id: fileId,
          name: file.name,
          currentSize: 0,
          totalSize: file.size,
          status: UploadStatus.Uploading,
        },
      };
      setFiles((prev) => ({ ...prev, ...newFile }));
      try {
        await uploadFileToS3({
          file,
          onUploadProgress: (e) => onUploadProgress(e, newFile[fileId]),
        });
      } catch (error) {
        console.error(error);
        const errorFile = { ...newFile[fileId], status: UploadStatus.Error };
        setFiles((prev) => ({ ...prev, [fileId]: errorFile }));
      }
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#FBFAFF]">
      <DnDUploader onUpload={handleUpload} />
      <div className="mt-5 flex flex-col gap-y-3">
        {Object.keys(files).map((file) => {
          const { id, name, currentSize, totalSize, status } = files[file];

          switch (status) {
            case UploadStatus.Uploading:
              return (
                <UploadingFile
                  key={id}
                  fileName={name}
                  currentSize={currentSize.toString()}
                  totalSize={totalSize.toString()}
                />
              );
            case UploadStatus.Success:
              return (
                <SuccessFile key={id} fileName={name} fileSize={totalSize} />
              );
            case UploadStatus.Error:
              return (
                <ErrorFile key={id} fileName={name} fileSize={totalSize} />
              );
            default:
              return (
                <SuccessFile key={id} fileName={name} fileSize={totalSize} />
              );
          }
        })}
      </div>
    </div>
  );
}

export default App;
