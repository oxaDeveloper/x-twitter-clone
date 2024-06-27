import axios from "axios";
import { useEffect, useState } from "react";
import Leftbar from "~/components/Leftbar";
import Main from "~/components/Main";
import RightPart from "~/components/RightPart";

export default function Home({ session }: { session: any }) {
  const [tweets, setTweets] = useState([]);
  const [premium, setPremium] = useState<any>(null);

  const fetchTweets = async () => {
    await axios.get("/api/tweet").then((res) => setTweets(res.data));
  };

  const fetchUserPremium = async () => {
    await axios
      .get(`/api/getUserPremium?userId=${session.user.id}`)
      .then((res) => setPremium(res.data));
  };

  useEffect(() => {
    fetchTweets();
    fetchUserPremium();
  }, []);

  return (
    <div className="flex min-h-screen px-24">
      <div className="w-[14rem]">
        <Leftbar
          premium={premium && premium[0].premium}
          session={session}
          fetchUserPremium={fetchUserPremium}
          fetchTweets={fetchTweets}
        />
      </div>

      <div className="ml-10 mr-8 max-h-screen flex-1 overflow-y-auto border-x border-[#383838]">
        <Main session={session} tweets={tweets} fetchTweets={fetchTweets} />
      </div>

      <div className="w-[22rem]">
        <RightPart
          premium={premium && premium[0].premium}
          session={session}
          fetchUserPremium={fetchUserPremium}
          fetchTweets={fetchTweets}
        />
      </div>
    </div>
  );
}
