import React from "react";
import { DnDUploader } from "@components/Uploader";
import { UploadingFile, SuccessFile, ErrorFile } from "@components/file";
// utils
// import { returnFileSize } from "./lib/utils";

// const getProgress = (number: number) => {
//   return Math.round((number / 1000000) * 100);
// };
type UploadFile = {
  name: string;
  currentSize: number;
  totalSize: number;
  isComplete: boolean;
};

function App() {
  const [files, setFiles] = React.useState<UploadFile[]>([]);

  const handleUpload = (files: File[]) => {
    setFiles((prev) => {
      const newFiles = files.map((file) => {
        let currentSize = 0;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onprogress = (e) => {
          currentSize = e.loaded;
        };

        return {
          name: file.name,
          currentSize: 0,
          totalSize: file.size,
          isComplete: currentSize === file.size,
        };
      });

      return [...prev, ...newFiles];
    });
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#FBFAFF]">
      <DnDUploader onUpload={handleUpload} />
      <div className="mt-5 flex flex-col gap-y-3">
        {files.map((file) =>
          file.isComplete ? (
            <SuccessFile
              key={file.name}
              fileName={file.name}
              fileSize={file.totalSize}
            />
          ) : (
            <UploadingFile
              fileName={file.name}
              currentSize={file.currentSize.toString()}
              totalSize={file.totalSize.toString()}
            />
          )
        )}
        <ErrorFile fileName="a-song.mp3" fileSize={3} />
      </div>
    </div>
  );
}

export default App;
