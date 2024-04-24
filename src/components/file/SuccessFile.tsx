// icons
import FileSVG from "@assets/File.svg?react";

export const SuccessFile = () => {
  return (
    <div className="w-[440px] flex items-center gap-x-3 bg-white rounded-lg p-2 shadow-16">
      {/* left */}
      <div className="w-12 h-14 rounded bg-[#DAF2D9] text-[#73B172] flex justify-center items-center">
        <FileSVG />
      </div>
      {/* right */}
      <div className="flex-1">
        <div className="mb-1 flex justify-between items-start">
          <div>
            <h1 className="font-bold text-sm text-[#575361] mb-[2px]">
              Scan.pdf
            </h1>
            <p className="text-xs text-[#857E95]">30 MB</p>
          </div>
        </div>
        {/* progress bar */}
        <div className="w-full flex items-center gap-x-2">
          <div className="bg-[#73B172] h-2 w-[324px] rounded-lg overflow-hidden"></div>
          <p className="text-xs w-8 text-[#4E884D]">100%</p>
        </div>
      </div>
    </div>
  );
};
