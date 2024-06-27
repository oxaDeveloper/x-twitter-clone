import Image from "next/image";
import React from "react";
// Icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

const Post = () => {
  return (
    <div className="border-b border-[#383838] p-4 pb-1">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <Image
            src="https://yt3.googleusercontent.com/WwX1G6HXgGi4A7MUbHroRtxH3DdISGCzl9eQnb8Nh98mIgoNP6Y-ASYUsBhdcjbqZu0AtK-W=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            width={40}
            height={40}
            className="cursor-pointer rounded-sm"
          />

          <div>
            <div className="flex items-center gap-2">
              <h1 className="kanit-regular text-lg">FC Barcelona</h1>
              <p className=" text-gray-500">
                @fcbarcelona <span> · 19h</span>
              </p>
            </div>

            <p className="text-base leading-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              voluptas!
            </p>
          </div>
        </div>

        <div className="cursor-pointer rounded-full p-1 hover:bg-[#0096f4] hover:bg-opacity-10">
          <MoreHorizIcon
            sx={{ ":hover": { color: "#0096f4" }, color: "#6b7280" }}
          />
        </div>
      </div>

      <div className="mt-4 w-full px-12">
        <Image
          src="https://assets.goal.com/images/v3/blte4136512c4eba7e9/GOAL_-_Blank_WEB_-_Facebook_-_2023-10-06T143531.895.png?auto=webp&format=pjpg&width=3840&quality=60"
          alt=""
          width={1080}
          height={1080}
          className="h-full w-full rounded-2xl border border-[#383838] object-cover"
        />
      </div>

      <div className="mt-1 flex w-full justify-between">
        <div className="flex w-full items-center justify-between pl-10 pr-20">
          <div className="cursor-pointer rounded-full px-[7px] py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
            <ChatBubbleOutlineOutlinedIcon
              sx={{
                ":hover": { color: "#0096f4" },
                color: "#6b7280",
                fontSize: 18,
              }}
            />
          </div>

          <div className="cursor-pointer rounded-full px-1.5 py-1 hover:bg-[#31f400] hover:bg-opacity-10">
            <RepeatOutlinedIcon
              sx={{
                ":hover": { color: "#31f400" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>

          <div className="cursor-pointer rounded-full px-1.5 py-1 hover:bg-[#f400ab] hover:bg-opacity-10">
            <FavoriteBorderOutlinedIcon
              sx={{
                ":hover": { color: "#f400ab" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>

          <div className="cursor-pointer rounded-full px-1.5 py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
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
          <div className="cursor-pointer rounded-full px-1.5 py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
            <BookmarkBorderOutlinedIcon
              sx={{
                ":hover": { color: "#0096f4" },
                color: "#6b7280",
                fontSize: 20,
              }}
            />
          </div>

          <div className="cursor-pointer rounded-full px-1.5 py-1 hover:bg-[#0096f4] hover:bg-opacity-10">
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

export default Post;
