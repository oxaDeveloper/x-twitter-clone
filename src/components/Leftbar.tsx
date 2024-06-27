import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import axios from "axios";
// Icons
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const Leftbar = ({
  premium,
  session,
  fetchUserPremium,
  fetchTweets,
}: {
  premium: boolean;
  session: any;
  fetchUserPremium: Function;
  fetchTweets: Function;
}) => {
  const username = session.user.email.split("@")[0];

  const getPremium = async () => {
    if (
      confirm(
        premium
          ? "Do you want to cancel your Premium Subscription?"
          : "Do you want to Subscribe To Premium?",
      )
    ) {
      await axios
        .put(`/api/getUserPremium?userId=${session.user.id}`, {
          premium: !premium,
        })
        .then(() => {
          fetchUserPremium();
          fetchTweets();
        });
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-col">
        <div className="w-fit cursor-pointer rounded-full p-3 hover:bg-[#171717]">
          <Link href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 hover:bg-[#171717]">
            <HomeIcon sx={{ fontSize: 35 }} />
            <span className="kanit-regular px-4 text-[22px]">Home</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <SearchIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Explore</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <NotificationsNoneOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Notifications</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-3 py-2 font-light hover:bg-[#171717]">
            <EmailOutlinedIcon sx={{ fontSize: 32 }} />
            <span className="px-4 text-[22px]">Messages</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <PsychologyAltOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Grok</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <ListAltOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Lists</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <BookmarkBorderOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Bookmarks</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <PeopleOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Communities</span>
          </div>

          <div
            className="flex w-fit cursor-pointer items-center rounded-full px-4 py-2 font-light hover:bg-[#171717]"
            onClick={() => getPremium()}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
              alt=""
              width={27}
              height={27}
            />
            <span className="px-4 text-[22px]">Premium</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <PermIdentityOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">Profile</span>
          </div>

          <div className="flex w-fit cursor-pointer items-center rounded-full px-2.5 py-2 font-light hover:bg-[#171717]">
            <MoreHorizOutlinedIcon sx={{ fontSize: 35 }} />
            <span className="px-4 text-[22px]">More</span>
          </div>

          <div className="mt-2 cursor-pointer rounded-full bg-[#0096f4] py-3">
            <p className="kanit-regular text-center text-lg">Post</p>
          </div>
        </div>
      </div>

      <div
        className="mb-4 flex cursor-pointer items-center gap-3 rounded-full px-2.5 py-2 hover:bg-[#171717]"
        onClick={() => signOut()}
      >
        <Image
          src={session.user.image}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />

        <div>
          <div className="flex items-center gap-1">
            <h1 className="kanit-regular text-nowrap">{session.user.name}</h1>
            {premium && (
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
    </div>
  );
};

export default Leftbar;
