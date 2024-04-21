import React from "react";
import CloudArrowUp from "@assets/CloudArrowUp.svg?react";

export const Uploader = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="w-[440px] h-40 rounded-lg border-dashed border-[#C1B2FA] border bg-[#F3F0FF]">
      <button
        onClick={() => fileInputRef.current?.click()}
        className="w-full h-full flex flex-col justify-center items-center"
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
