import React from "react";
import Search from "./Search";
import SubscribeToPremium from "./SubscribeToPremium";
import TrendsForYou from "./TrendsForYou";
import WhoToFollow from "./WhoToFollow";

const RightPart = ({
  premium,
  session,
  fetchUserPremium,
  fetchTweets,
}: {
  premium: boolean;
  session: any;
  fetchUserPremium: Function;
  fetchTweets: Function;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Search />
      {!premium && (
        <SubscribeToPremium
          session={session}
          fetchUserPremium={fetchUserPremium}
          fetchTweets={fetchTweets}
        />
      )}
      <TrendsForYou />
      <WhoToFollow session={session} />

      <div className="flex flex-wrap gap-x-4 gap-y-0">
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Terms of Service
        </a>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Cookie Policy
        </a>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Accessibility
        </a>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Ads info
        </a>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          More •••
        </a>
        <span className="text-sm text-gray-500">© 2024 Oxa Developer</span>
      </div>
    </div>
  );
};

export default RightPart;
