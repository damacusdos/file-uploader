import React from "react";
import { useDrop, DndProvider } from "react-dnd";
import { HTML5Backend, NativeTypes } from "react-dnd-html5-backend";
// icons
import CloudArrowUp from "@assets/CloudArrowUp.svg?react";

interface UploaderProps {
  onUpload: (files: File[]) => void;
}

export const Uploader = ({ onUpload }: UploaderProps) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: [NativeTypes.FILE],
    drop(item: { dataTransfer: DataTransfer; files: File[] }) {
      onUpload(item.files);
    },
    collect(monitor) {
      return {
        isOver: monitor.isOver(),
      };
    },
  }));

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      onUpload(Array.from(files));
    }

    fileInputRef.current!.value = "";
  };

  return (
    <div
      ref={drop}
      className="relative z-[1] w-[440px] h-40 rounded-lg border border-transparent before:content-[''] before:w-[440px] before:absolute before:top-[-1px] before:bottom-[-1px] before:right-[-1px] brefore:left-[-1px] before:z-[-1] before:bg-[repeating-linear-gradient(135deg,_transparent_0_4px,_#F3F0FF_4px_8px)] before:bg-[#C1B2FA] before:rounded-lg before:hover:bg-[#9a82f7] before:transition-all"
    >
      <button
        onClick={() => fileInputRef.current?.click()}
        className={`w-full h-full flex flex-col justify-center items-center hover:bg-[#EBE5FF] rounded-lg ${
          isOver ? "bg-[#EBE5FF]" : "bg-[#F3F0FF]"
        }`}
      >
        <CloudArrowUp />
        <h1 className="text-[#7A5FEC] text-[16px] mb-[1px] mt-3">
          Import your files
        </h1>
        <p className="text-[#746E82] text-sm">Drag or click to upload</p>
      </button>
      <input
        ref={fileInputRef}
        onChange={handleUpload}
        multiple
        type="file"
        className="hidden"
      />
    </div>
  );
};

interface DnDUploaderProps {
  onUpload: (files: File[]) => void;
}

export const DnDUploader = ({ onUpload }: DnDUploaderProps) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Uploader onUpload={onUpload} />
    </DndProvider>
  );
};
