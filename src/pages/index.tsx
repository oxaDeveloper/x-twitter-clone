import Leftbar from "~/components/Leftbar";
import RightPart from "~/components/RightPart";

export default function Home({ session }: { session: any }) {
  return (
    <div className="flex min-h-screen px-24">
      <div className="w-[14rem]">
        <Leftbar session={session} />
      </div>

      <div className="ml-10 mr-8 flex-1 border-x border-[#383838]"></div>

      <div className="w-[22rem]">
        <RightPart />
      </div>
    </div>
  );
}
