import React, { useEffect, useState } from "react";
import SelectPostType from "./SelectPostType";
import PostTheTweet from "./PostTheTweet";
import Tweet from "./Tweet";
import axios from "axios";

const Main = ({ session }: { session: any }) => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    await axios.get("/api/tweet").then((res) => setTweets(res.data));
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div>
      <SelectPostType />
      <PostTheTweet session={session} fetchTweets={fetchTweets} />

      <div className="flex flex-col">
        {tweets?.map((tweet: any, idx) => (
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
