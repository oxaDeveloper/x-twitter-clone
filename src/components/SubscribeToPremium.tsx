import axios from "axios";
import React from "react";

const SubscribeToPremium = ({
  session,
  fetchUserPremium,
  fetchTweets,
}: {
  session: any;
  fetchUserPremium: Function;
  fetchTweets: Function;
}) => {
  const getPremium = async () => {
    if (confirm("Do you want to Subscribe To Premium?")) {
      await axios
        .put(`/api/getUserPremium?userId=${session.user.id}`, { premium: true })
        .then(() => {
          fetchUserPremium();
          fetchTweets();
        });
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[#383838] px-4 py-2.5">
      <h1 className="kanit-regular text-[22px]">Subscribe to Premium</h1>
      <p className="text-[15px]">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div
        className="w-fit cursor-pointer rounded-full bg-[#0096f4] px-4 py-1.5"
        onClick={() => getPremium()}
      >
        <span className="kanit-regular text-base">Subscribe</span>
      </div>
    </div>
  );
};

export default SubscribeToPremium;
