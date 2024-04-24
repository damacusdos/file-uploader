import { DnDUploader } from "@components/Uploader";
import { UploadingFile, SuccessFile, ErrorFile } from "@components/file";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#FBFAFF]">
      <DnDUploader />
      <div className="mt-5 flex flex-col gap-y-3">
        <UploadingFile />
        <SuccessFile />
        <ErrorFile />
      </div>
    </div>
  );
}

export default App;
