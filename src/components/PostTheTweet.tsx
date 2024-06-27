import Image from "next/image";
import React, { useState } from "react";
// Icons
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import axios from "axios";

const PostTheTweet = ({
  session,
  fetchTweets,
}: {
  session: any;
  fetchTweets: Function;
}) => {
  const [tweetText, setTweetText] = useState("");
  const [isImageInput, setIsImageInput] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const postTweet = async () => {
    if (tweetText !== "") {
      await axios
        .post("/api/tweet", {
          image: imageUrl !== "" ? imageUrl : null,
          tweet: tweetText,
          userId: session.user.id,
        })
        .then(() => {
          setTweetText("");
          setImageUrl("");
          setIsImageInput(false);
          fetchTweets();
        });
    }
  };

  return (
    <div className="flex items-start gap-2 border-b border-[#383838] p-4 pb-2.5">
      <Image
        src={session.user.image}
        alt=""
        width={40}
        height={40}
        className="cursor-pointer rounded-full"
      />

      <div className="relative grid w-full gap-4">
        <input
          type="text"
          placeholder="What is happening?!"
          className="bg-inherit py-2 text-xl outline-none placeholder:text-[#6f6f6f]"
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <InsertPhotoOutlinedIcon
              sx={{ color: "#0096f4", cursor: "pointer", fontSize: 20 }}
              onClick={() => setIsImageInput((isImageInput) => !isImageInput)}
            />

            {isImageInput && (
              <div className="absolute bottom-[-55px] left-[-8px] flex items-center gap-3 rounded-lg border border-[#383838] bg-black px-5 py-3">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={(e: any) => setImageUrl(e.target.value)}
                  className="rounded-md border border-[#222222] bg-inherit px-3 py-1 outline-none"
                />

                <div
                  className={`rounded-full bg-[#0096f4] px-4 py-0.5 ${imageUrl === "" ? "cursor-default opacity-50" : "cursor-pointer"}`}
                  onClick={() => {
                    if (imageUrl !== "") {
                      setIsImageInput(false);
                    }
                  }}
                >
                  <span className="kanit-regular text-lg">Done</span>
                </div>
              </div>
            )}

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
            className={`w-fit cursor-pointer rounded-full bg-[#0096f4] px-[18px] py-1.5 ${tweetText === "" && "cursor-auto opacity-50"}`}
            onClick={() => {
              postTweet();
            }}
          >
            <span className="kanit-regular text-base">Post</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTheTweet;
