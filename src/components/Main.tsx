import React from "react";
import SelectPostType from "./SelectPostType";
import PostTheTweet from "./PostTheTweet";
import Post from "./Post";

const Main = ({ session }: { session: any }) => {
  return (
    <div>
      <SelectPostType />
      <PostTheTweet session={session} />

      <div className="flex flex-col">
        <Post />
      </div>
    </div>
  );
};

export default Main;
