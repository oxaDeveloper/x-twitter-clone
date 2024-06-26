import Image from "next/image";
import React, { useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
// Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";
import Link from "next/link";

const Tweet = ({
  user,
  session,
  userId,
  id,
  image,
  tweet,
  createdAt,
  fetchTweets,
}: {
  user: any;
  session: any;
  userId: string;
  id: string;
  image: string;
  tweet: string;
  createdAt: string;
  fetchTweets: Function;
}) => {
  const [more, setMore] = useState(false);
  const username = user.email.split("@")[0];
  const time = formatDistanceToNow(parseISO(createdAt));

  const deleteTweet = async () => {
    await axios.delete(`/api/tweet?id=${id}`).then(() => fetchTweets());
  };

  return (
    <div className="cursor-pointer border-b border-[#383838] p-4 pb-1 hover:bg-[#171717]">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <Image
            src={user.image}
            alt=""
            width={40}
            height={40}
            className="rounded-md"
          />

          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Link href={`/${username}`}>
                  <h1 className="kanit-regular text-nowrap text-lg hover:underline">
                    {user.name}
                  </h1>
                </Link>
                {user.premium && (
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/Verified-badge.png"
                    alt=""
                    width={15}
                    height={15}
                  />
                )}
              </div>

              <p className=" text-gray-500">
                @{username}{" "}
                {time !== "less than a minute" && <span> · {time}</span>}
              </p>
            </div>

            <p className="text-base leading-4">{tweet}</p>
          </div>
        </div>

        {userId === session.user.id && (
          <div
            className="relative rounded-full p-1 hover:bg-[#0096f4] hover:bg-opacity-10"
            onClick={() => setMore((more) => !more)}
          >
            <MoreHorizIcon
              sx={{ ":hover": { color: "#0096f4" }, color: "#6b7280" }}
            />

            {more && (
              <div className="absolute bottom-[-2.5rem] right-0 flex items-center gap-2 rounded-lg border border-[#383838] bg-black">
                <div
                  className="flex items-center gap-2 px-4 py-2 hover:bg-red-500 hover:bg-opacity-10"
                  onClick={deleteTweet}
                >
                  <DeleteOutlineOutlinedIcon
                    sx={{ color: "red", fontSize: 22 }}
                  />
                  <span className="text-nowrap text-[15px] leading-[0px] text-red-500">
                    Delete tweet
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {image && (
        <div className="mt-4 w-full px-12">
          <Image
            src={image}
            alt=""
            width={1080}
            height={1080}
            className="h-full w-full rounded-2xl border border-[#383838] object-cover"
          />
        </div>
      )}

      <div className="mt-1 flex w-full justify-between">
        <div className="flex w-full items-center justify-between pl-10 pr-20">
          <div className="rounded-full px-[7px] py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
            <ChatBubbleOutlineOutlinedIcon
              sx={{
                ":hover": { color: "#0096f4" },
                color: "#6b7280",
                fontSize: 18,
              }}
            />
          </div>

          <div className="rounded-full px-1.5 py-1 hover:bg-[#31f400] hover:bg-opacity-10">
            <RepeatOutlinedIcon
              sx={{
                ":hover": { color: "#31f400" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>

          <div className="rounded-full px-1.5 py-1 hover:bg-[#f400ab] hover:bg-opacity-10">
            <FavoriteBorderOutlinedIcon
              sx={{
                ":hover": { color: "#f400ab" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>

          <div className="rounded-full px-1.5 py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
            <BarChartOutlinedIcon
              sx={{
                ":hover": { color: "#0096f4" },
                color: "#6b7280",
                fontSize: 22,
              }}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="rounded-full px-1.5 py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
            <BookmarkBorderOutlinedIcon
              sx={{
                ":hover": { color: "#0096f4" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>

          <div className="rounded-full px-1.5 py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
            <IosShareOutlinedIcon
              sx={{
                ":hover": { color: "#0096f4" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
