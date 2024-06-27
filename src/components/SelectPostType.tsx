import React from "react";

const SelectPostType = () => {
  return (
    <div className="flex items-center justify-center border-b border-[#383838]">
      <div className="relative flex w-full flex-1 cursor-pointer justify-center py-4 hover:bg-[#171717]">
        <span className="kanit-regular text-center text-base">For you</span>
        <div className="absolute bottom-0 h-1 w-14 rounded-full bg-[#0096f4]" />
      </div>
      <div className="flex w-full flex-1 cursor-pointer justify-center py-4 hover:bg-[#171717]">
        <span className="kanit-regular text-center text-base">Following</span>
      </div>
    </div>
  );
};

export default SelectPostType;
