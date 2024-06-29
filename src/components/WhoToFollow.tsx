import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhoToFollow = ({ session }: { session: any }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await axios.get("/api/user").then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const shuffle = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledUsers = shuffle([...users]);
  const randomUsers = shuffledUsers.slice(0, 2);

  return (
    <div className="flex flex-col rounded-xl border border-[#383838]">
      <h1 className="kanit-regular px-4 py-2.5 text-[22px]">Who to follow</h1>

      {randomUsers.map((user: any) => {
        const username = user.email.split("@")[0];

        return (
          session.user.id !== user.id && (
            <div
              key={user.id}
              className="flex cursor-pointer items-center justify-between px-4 py-2.5 hover:bg-[#101010]"
            >
              <div className="flex items-center gap-2">
                <div className="h-[40px] w-[40px]">
                  <Image
                    src={user.image}
                    alt=""
                    width={1080}
                    height={1080}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <h1 className="text-base font-semibold hover:underline">
                      {user.name}
                    </h1>
                    {user.premium && (
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/3/32/Verified-badge.png"
                        alt=""
                        width={15}
                        height={15}
                        className="mt-[-2px]"
                      />
                    )}
                  </div>

                  <p className="text-sm text-gray-500">@{username}</p>
                </div>
              </div>

              <div className="rounded-full bg-white px-4 py-1">
                <span className="text-sm font-semibold text-black">Follow</span>
              </div>
            </div>
          )
        );
      })}

      <div className="cursor-pointer rounded-b-xl px-4 py-3 hover:bg-[#101010]">
        <p className="text-[#0096f4]">Show more</p>
      </div>
    </div>
  );
};

export default WhoToFollow;
