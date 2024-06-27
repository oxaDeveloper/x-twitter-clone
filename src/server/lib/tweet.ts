import { db } from "~/server/db";

export const createTweet = async ({
  image,
  tweet,
  userId,
}: {
  image: string;
  tweet: string;
  userId: string;
}) => {
  const newTweet = await db.tweet.create({
    data: {
      image,
      tweet,
      userId,
    },
  });

  return newTweet;
};

export const deleteTweet = async (id: string) => {
  const tweet = await db.tweet.delete({
    where: {
      id,
    },
  });
  return tweet;
};

export const getAllTweets = async () => {
  const tweets = await db.tweet.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return tweets;
};
