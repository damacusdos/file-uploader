import React from "react";
import { DnDUploader } from "@components/Uploader";
import { UploadingFile, SuccessFile, ErrorFile } from "@components/file";
// utils
import { returnFileSize } from "./lib/utils";

const getProgress = (number: number) => {
  return Math.round((number / 1000000) * 100);
};

function App() {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleUpload = (files: File[]) => {
    setFiles(files);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#FBFAFF]">
      <DnDUploader onUpload={handleUpload} />
      <div className="mt-5 flex flex-col gap-y-3">
        {files.map((file) => (
          <UploadingFile
            key={file.name}
            fileName={file.name}
            currentSize={returnFileSize(file.size) ?? ""}
            totalSize={returnFileSize(file.size) ?? ""}
            progress={getProgress(file.size)}
          />
        ))}
        <SuccessFile fileName="README.md" fileSize={2} />
        <ErrorFile fileName="a-song.mp3" fileSize={3} />
      </div>
    </div>
  );
}

export default App;
