import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TrendsForYou = () => {
  return (
    <div className="flex flex-col rounded-xl border border-[#383838]">
      <h1 className="kanit-regular px-4 py-2.5 text-[22px]">Trends for you</h1>

      <div className="flex cursor-pointer items-center justify-between px-4 py-2.5 hover:bg-[#101010]">
        <div>
          <p className="text-sm leading-3 text-gray-500">
            Trending in Uzbekistan
          </p>
          <h1 className="kanit-regular text-xl">#uzbekistan</h1>
        </div>

        <div className="cursor-pointer rounded-full p-1 hover:bg-[#0096f4] hover:bg-opacity-30">
          <MoreHorizIcon sx={{ ":hover": { color: "#0096f4" } }} />
        </div>
      </div>

      <div className="flex cursor-pointer items-center justify-between px-4 py-2.5 hover:bg-[#101010]">
        <div>
          <p className="text-sm leading-3 text-gray-500">
            Business & finance · Trending
          </p>
          <h1 className="kanit-regular text-xl">#finance</h1>
        </div>

        <div className="cursor-pointer rounded-full p-1 hover:bg-[#0096f4] hover:bg-opacity-30">
          <MoreHorizIcon sx={{ ":hover": { color: "#0096f4" } }} />
        </div>
      </div>

      <div className="cursor-pointer rounded-b-xl px-4 py-3 hover:bg-[#101010]">
        <p className="text-[#0096f4]">Show more</p>
      </div>
    </div>
  );
};

export default TrendsForYou;
