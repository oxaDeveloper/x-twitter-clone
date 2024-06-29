import { db } from "~/server/db";

export const getAllUsers = async () => {
  const users = await db.user.findMany();
  return users;
};
