import Image from "next/image";
import React from "react";

const WhoToFollow = () => {
  return (
    <div className="flex flex-col rounded-xl border border-[#383838]">
      <h1 className="kanit-regular px-4 py-2.5 text-[22px]">Who to follow</h1>

      <div className="flex cursor-pointer items-center justify-between px-4 py-2.5 hover:bg-[#101010]">
        <div className="flex items-center gap-2">
          <div className="h-[40px] w-[40px]">
            <Image
              src="https://pngimg.com/d/chrome_logo_PNG34.png"
              alt=""
              width={1080}
              height={1080}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-base font-semibold hover:underline">Chrome</h1>
            <p className="text-sm text-gray-500">@googlechrome</p>
          </div>
        </div>

        <div className="rounded-full bg-white px-4 py-1">
          <span className="text-sm font-semibold text-black">Follow</span>
        </div>
      </div>

      <div className="flex cursor-pointer items-center justify-between px-4 py-2.5 hover:bg-[#101010]">
        <div className="flex items-center gap-2">
          <div className="h-[40px] w-[40px]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam7dK4a6nCf6yhn8M0RPFBa1yIbNrD_9EUJ3NNEk7-o0KGCIZ"
              alt=""
              width={1080}
              height={1080}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-base font-semibold hover:underline">
              Elon Musk
            </h1>
            <p className="text-sm text-gray-500">@elonmusk</p>
          </div>
        </div>

        <div className="rounded-full bg-white px-4 py-1">
          <span className="text-sm font-semibold text-black">Follow</span>
        </div>
      </div>

      <div className="cursor-pointer rounded-b-xl px-4 py-3 hover:bg-[#101010]">
        <p className="text-[#0096f4]">Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
