import Image from "next/image";
import React, { useState } from "react";
// Icons
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const PostTheTweet = ({ session }: { session: any }) => {
  const [tweetText, setTweetText] = useState("");

  return (
    <div className="flex items-start gap-2 border-b border-[#383838] p-4">
      <Image
        src={session.user.image}
        alt=""
        width={40}
        height={40}
        className="cursor-pointer rounded-full"
      />

      <div className="grid w-full gap-4">
        <input
          type="text"
          placeholder="What is happening?!"
          className="bg-inherit py-2 text-xl outline-none placeholder:text-[#6f6f6f]"
          onChange={(e) => setTweetText(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <InsertPhotoOutlinedIcon
              sx={{ color: "#0096f4", cursor: "pointer", fontSize: 20 }}
            />
            <GifBoxOutlinedIcon
              sx={{ color: "#0096f4", cursor: "pointer", fontSize: 20 }}
            />
            <FormatListBulletedOutlinedIcon
              sx={{ color: "#0096f4", cursor: "pointer", fontSize: 20 }}
            />
            <SentimentSatisfiedAltOutlinedIcon
              sx={{ color: "#0096f4", cursor: "pointer", fontSize: 20 }}
            />
            <CalendarMonthOutlinedIcon
              sx={{ color: "#0096f4", cursor: "pointer", fontSize: 20 }}
            />
            <FmdGoodOutlinedIcon
              sx={{ color: "#0096f4", opacity: "50%", fontSize: 22 }}
            />
          </div>

          <div
            className={`w-fit cursor-default rounded-full bg-[#0096f4] px-[18px] py-1.5 ${tweetText === "" && "opacity-50"}`}
          >
            <span className="kanit-regular text-base">Post</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTheTweet;
