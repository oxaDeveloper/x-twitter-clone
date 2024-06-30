import Image from "next/image";
import React from "react";
import { format, parseISO } from "date-fns";
// Icons
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ProfileMain = ({
  session,
  user,
  username,
}: {
  session: any;
  user: any;
  username: string;
}) => {
  return (
    <div className="mt-[-6rem] w-full p-2">
      <div className="m-3 flex items-start justify-between">
        <div className="flex cursor-pointer flex-col items-start gap-5 rounded-full p-1">
          <Image
            src={user.image}
            alt=""
            width={135}
            height={135}
            className="rounded-full"
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h1 className="text-xl font-bold">{user.name}</h1>
              {user.premium && (
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Verified-badge.png"
                  alt=""
                  width={15}
                  height={15}
                />
              )}
            </div>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
        </div>

        {session.user.id === user.id ? (
          <div className="mt-[5.5rem] cursor-pointer rounded-full border border-gray-600 px-4 py-1">
            <span className="kanit-regular text-base">Edit profile</span>
          </div>
        ) : (
          <div className="mt-[5.5rem] flex items-center gap-2">
            <div className="cursor-pointer rounded-full border border-gray-600 p-1 hover:bg-[#fff] hover:bg-opacity-10">
              <MoreHorizIcon />
            </div>

            <div className="cursor-pointer rounded-full border border-gray-600 p-[5px] px-[7px] hover:bg-[#fff] hover:bg-opacity-10">
              <EmailOutlinedIcon sx={{ fontSize: 20 }} />
            </div>

            <div className="cursor-pointer rounded-full bg-white px-4 py-1.5">
              <span className="kanit-regular text-base text-black">Follow</span>
            </div>
          </div>
        )}
      </div>

      <div className="m-3 flex items-start gap-1">
        <CalendarMonthOutlinedIcon sx={{ color: "#6b7280", fontSize: 20 }} />
        <p className="text-[15px] text-[#6b7280]">
          Joined <span>{format(parseISO(user.createdAt), "MMMM yyyy")}</span>
        </p>
      </div>

      <div className="m-4 my-2 flex gap-6">
        <p className="cursor-pointer text-sm text-[#6b7280]">
          <span className="kanit-regular leading-3 text-white">7</span>{" "}
          Following
        </p>
        <p className="cursor-pointer text-sm text-[#6b7280]">
          <span className="kanit-regular leading-3 text-white">0</span>{" "}
          Followers
        </p>
      </div>
    </div>
  );
};

export default ProfileMain;
