import { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "~/server/lib/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const getUsers = await getAllUsers();
    return res.status(200).json(getUsers);
  }
};
