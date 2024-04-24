import { DnDUploader } from "@components/Uploader";
import { UploadingFile, SuccessFile, ErrorFile } from "@components/file";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#FBFAFF]">
      <DnDUploader />
      <div className="mt-5 flex flex-col gap-y-3">
        <UploadingFile
          fileName="Scan.pdf"
          currentSize={30}
          totalSize={75}
          progress={50}
        />
        <SuccessFile fileName="README.md" fileSize={2} />
        <ErrorFile fileName="a-song.mp3" fileSize={3} />
      </div>
    </div>
  );
}

export default App;
