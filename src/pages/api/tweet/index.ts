import { NextApiRequest, NextApiResponse } from "next";
import { createTweet, deleteTweet, getAllTweets } from "~/server/lib/tweet";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { image, tweet, userId } = req.body;
    const newTweet = await createTweet({ image, tweet, userId });
    res.status(201).json(newTweet);
  } else if (req.method === "GET") {
    const getTweets = await getAllTweets();
    return res.status(200).json(getTweets);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteTweet(id as string);
    return res.status(200).json({ message: "Tweet deleted!" });
  }
};
