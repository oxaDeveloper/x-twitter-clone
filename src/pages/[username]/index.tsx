import React, { useEffect, useState } from "react";
import ProfileTop from "~/components/ProfileTop";
import axios from "axios";
import { useRouter } from "next/router";
import ProfileMain from "~/components/ProfileMain";
import SelectProfileContent from "~/components/SelectProfileContent";
import Tweet from "~/components/Tweet";

const Profile = ({
  session,
  tweets,
  fetchTweets,
}: {
  session: any;
  tweets: any;
  fetchTweets: Function;
}) => {
  const router = useRouter();
  const [userFound, setUserFound] = useState(false);

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    await axios.get("/api/user").then((res) => setUsers(res.data));
  };

  const filterTweets = async () => {
    const array: any = [];

    await tweets.map((tweet: any) => {
      if (tweet.user.email === router.query.username + "@gmail.com") {
        array.push(tweet);
        setPosts(array);
      }
    });
  };

  useEffect(() => {
    fetchUsers();
    filterTweets();
  }, []);

  useEffect(() => {
    const userExists = users.some(
      (user: any) => user.email === router.query.username + "@gmail.com",
    );
    setUserFound(userExists);
  }, [users, router.query.username]);

  if (!userFound) {
    return (
      <div>
        <div className="relative">
          <ProfileTop userFound={userFound} />
          <div className="bg-[#383838] p-[100px]" />
          <ProfileMain username={router.query.username} />
        </div>

        <div className="flex h-[30vh] flex-col items-center justify-center">
          <div className="grid w-[22rem] gap-2">
            <h1 className="kanit-regular text-[34px] leading-9">
              This account doesn’t exist
            </h1>
            <p className="text-[15px] text-gray-500">
              Try searching for another.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return users.map((user: any) => {
    const username = user.email.split("@")[0];

    return (
      user.email === router.query.username + "@gmail.com" && (
        <div className="relative" key={user.id}>
          <ProfileTop user={user} posts={posts} />
          <div className="bg-[#383838] p-[100px]" />
          <ProfileMain user={user} username={username} session={session} />
          <SelectProfileContent />

          <div className="flex flex-col">
            {posts?.map((tweet: any, idx: number) => (
              <Tweet
                key={idx}
                {...tweet}
                session={session}
                fetchTweets={fetchTweets}
              />
            ))}
          </div>
        </div>
      )
    );
  });
};

export default Profile;
