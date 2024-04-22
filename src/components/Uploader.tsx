import React from "react";
import CloudArrowUp from "@assets/CloudArrowUp.svg?react";

export const Uploader = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative z-[1] w-[440px] h-40 rounded-lg border border-transparent before:content-[''] before:w-[440px] before:absolute before:top-[-1px] before:bottom-[-1px] before:right-[-1px] brefore:left-[-1px] before:z-[-1] before:bg-[repeating-linear-gradient(135deg,_transparent_0_4px,_#F3F0FF_4px_8px)] before:bg-[#C1B2FA] before:rounded-lg">
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full h-full flex flex-col justify-center items-center bg-[#F3F0FF] rounded-lg"
      >
        <CloudArrowUp />
        <h1 className="text-[#7A5FEC] text-[16px] mb-[1px] mt-3">
          Import your files
        </h1>
        <p className="text-[#746E82] text-sm">Drag or click to upload</p>
      </button>
      <input ref={fileInputRef} type="file" className="hidden" />
    </div>
  );
};
