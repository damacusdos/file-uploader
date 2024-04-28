// icons
import FileSVG from "@assets/File.svg?react";
import RetrySVG from "@assets/Retry.svg?react";

interface ErrorFileProps {
  fileName: string;
  fileSize: number;
}

export const ErrorFile = ({ fileName, fileSize }: ErrorFileProps) => {
  const handleRemoveFile = () => {};

  return (
    <div className="w-[440px] flex items-center gap-x-3 bg-white rounded-lg p-2 shadow-16">
      {/* left */}
      <div className="w-12 h-14 rounded bg-[#F2D9D9] text-[#E36363] flex justify-center items-center">
        <FileSVG />
      </div>
      {/* right */}
      <div className="flex-1">
        <div className="mb-1 flex justify-between items-start">
          <div>
            <h1 className="font-bold text-sm text-[#575361] mb-[2px]">
              {fileName}
            </h1>
            <p className="text-xs text-[#857E95]">{`${fileSize} MB`}</p>
          </div>
          <button onClick={handleRemoveFile} className="text-[#794FED]">
            <RetrySVG />
          </button>
        </div>
        {/* progress bar */}
        <div className="w-full flex items-center gap-x-2">
          <div className="bg-[#E3E3ED] h-2 w-[324px] rounded-lg overflow-hidden"></div>
          <p className="text-xs w-8 text-[#E36363]">Error</p>
        </div>
      </div>
    </div>
  );
};
