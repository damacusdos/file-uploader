import React from "react";
import { DnDUploader } from "@components/Uploader";
import { UploadingFile, SuccessFile, ErrorFile } from "@components/file";
// utils
// import { returnFileSize } from "./lib/utils";

// const getProgress = (number: number) => {
//   return Math.round((number / 1000000) * 100);
// };
type UploadFile = {
  id: string;
  name: string;
  currentSize: number;
  totalSize: number;
  isComplete: boolean;
};

type UploadedFiles = Record<string, UploadFile>;

function App() {
  const [files, setFiles] = React.useState<UploadedFiles>({});

  const handleUpload = (files: File[]) => {
    setFiles((prev) => {
      let newFiles = {};
      files.forEach((file) => {
        return (newFiles = {
          ...newFiles,
          [file.name]: {
            id: file.name,
            name: file.name,
            currentSize: file.size,
            totalSize: file.size,
            isComplete: true,
          },
        });
      });

      return { ...prev, ...newFiles };
    });
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#FBFAFF]">
      <DnDUploader onUpload={handleUpload} />
      <div className="mt-5 flex flex-col gap-y-3">
        {Object.keys(files).map((file) => {
          const { name, currentSize, totalSize, isComplete } = files[file];

          return isComplete ? (
            <SuccessFile key={name} fileName={name} fileSize={totalSize} />
          ) : (
            <UploadingFile
              key={name}
              fileName={name}
              currentSize={currentSize.toString()}
              totalSize={totalSize.toString()}
            />
          );
        })}
        <ErrorFile fileName="a-song.mp3" fileSize={3} />
      </div>
    </div>
  );
}

export default App;
