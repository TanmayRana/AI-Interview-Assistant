import Image from "next/image";
import React from "react";

const InterviewHeader = () => {
  return (
    <div className="p-2 shadow-sm">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={100}
        height={40}
        className="w-[90px] h-[60px] object-contain"
      />
    </div>
  );
};

export default InterviewHeader;
