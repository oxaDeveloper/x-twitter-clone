import React from "react";

const SubscribeToPremium = () => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[#383838] px-4 py-2.5">
      <h1 className="kanit-regular text-[22px]">Subscribe to Premium</h1>
      <p className="text-[15px]">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div className="w-fit cursor-pointer rounded-full bg-[#0096f4] px-4 py-1.5">
        <span className="kanit-regular text-base">Subscribe</span>
      </div>
    </div>
  );
};

export default SubscribeToPremium;
