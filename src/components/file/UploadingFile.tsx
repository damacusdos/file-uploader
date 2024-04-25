// icons
import FileSVG from "@assets/File.svg?react";
import CancelSVG from "@assets/Cancel.svg?react";

interface UploadingFileProps {
  fileName: string;
  currentSize: string;
  totalSize: string;
}

export const UploadingFile = ({
  fileName,
  currentSize,
  totalSize,
}: UploadingFileProps) => {
  const progress = (parseInt(currentSize) / parseInt(totalSize)) * 100;

  return (
    <div className="w-[440px] flex items-center gap-x-3 bg-white rounded-lg p-2 shadow-16">
      {/* left */}
      <div className="w-12 h-14 rounded bg-[#E9E3F8] text-[#AC96E4] flex justify-center items-center">
        <FileSVG />
      </div>
      {/* right */}
      <div className="flex-1">
        <div className="mb-1 flex justify-between items-start">
          <div>
            <h1 className="font-bold text-sm text-[#575361] mb-[2px]">
              {fileName}
            </h1>
            <p className="text-xs text-[#857E95]">{`${currentSize} / ${totalSize}`}</p>
          </div>
          <button className="text-[#794FED]">
            <CancelSVG />
          </button>
        </div>
        {/* progress bar */}
        <div className="w-full flex items-center gap-x-2">
          <div className="bg-[#E3E3ED] h-2 w-[324px] rounded-lg overflow-hidden">
            <div className="bg-[linear-gradient(to_right,rgba(58,97,237,.5),#7C3AED)] h-2 w-[50%]"></div>
          </div>
          <p className="text-xs w-8 text-[#9892A6]">{`${progress}%`}</p>
        </div>
      </div>
    </div>
  );
};
