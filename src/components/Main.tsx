import React, { useEffect, useState } from "react";
import SelectPostType from "./SelectPostType";
import PostTheTweet from "./PostTheTweet";
import Tweet from "./Tweet";

const Main = ({
  session,
  tweets,
  fetchTweets,
}: {
  session: any;
  tweets: any;
  fetchTweets: Function;
}) => {
  return (
    <div>
      <SelectPostType />
      <PostTheTweet session={session} fetchTweets={fetchTweets} />

      <div className="flex flex-col">
        {tweets?.map((tweet: any, idx: number) => (
          <Tweet
            key={idx}
            {...tweet}
            session={session}
            fetchTweets={fetchTweets}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
