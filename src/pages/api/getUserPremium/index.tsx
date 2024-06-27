import { db } from "~/server/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.query;
  if (req.method === "GET") {
    const getUser = await db.user.findMany({
      where: { id: userId as string },
    });
    return res.status(200).json(getUser);
  } else if (req.method === "PUT") {
    const { premium } = req.body;
    await db.user.update({
      where: { id: userId as string },
      data: {
        premium: premium,
      },
    });
    return res.status(200).json({ message: "User edited!" });
  }
}
