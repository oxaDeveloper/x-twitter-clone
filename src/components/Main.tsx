import React from "react";
import SelectPostType from "./SelectPostType";
import PostTheTweet from "./PostTheTweet";

const Main = ({ session }: { session: any }) => {
  return (
    <div>
      <SelectPostType />
      <PostTheTweet session={session} />
    </div>
  );
};

export default Main;
