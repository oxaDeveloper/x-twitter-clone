import PostTheTweet from "~/components/PostTheTweet";
import SelectPostType from "~/components/SelectPostType";
import Tweet from "~/components/Tweet";

export default function Home({
  session,
  tweets,
  fetchTweets,
}: {
  session: any;
  tweets: any;
  fetchTweets: Function;
}) {
  return (
    <div>
      <SelectPostType />
      <PostTheTweet session={session} fetchTweets={fetchTweets} />

      <div className="flex flex-col">
        {tweets?.map((tweet: any, idx: number) => (
          <Tweet
            key={idx}
            {...tweet}
            session={session}
            fetchTweets={fetchTweets}
          />
        ))}
      </div>
    </div>
  );
}
