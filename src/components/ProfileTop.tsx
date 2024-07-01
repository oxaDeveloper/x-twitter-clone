import React, { FC } from "react";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Link from "next/link";
import Image from "next/image";

interface ProfileTopProps {
  user?: any;
  posts?: any;
  userFound?: any;
}

const ProfileTop: FC<ProfileTopProps> = ({
  user = { name: "Profile", premium: false },
  posts = null,
  userFound = true,
}) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-7 border-b border-[#383838] ${userFound ? "px-2 py-1" : "p-2"}`}
    >
      <Link
        href="/"
        className="rounded-full p-1.5 hover:bg-[#cacaca] hover:bg-opacity-10"
      >
        <KeyboardBackspaceOutlinedIcon sx={{ color: "#cacaca" }} />
      </Link>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-semibold">{user.name}</h1>
          {user.premium && (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/Verified-badge.png"
              alt=""
              width={15}
              height={15}
            />
          )}
        </div>
        {userFound && (
          <p className="text-xs text-gray-500">
            {posts.length} post{posts.length !== 1 && "s"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
