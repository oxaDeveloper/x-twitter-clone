import Leftbar from "~/components/Leftbar";

export default function Home({ session }: { session: any }) {
  return (
    <div className="flex min-h-screen px-24">
      <div className="w-[14rem]">
        <Leftbar session={session} />
      </div>

      <div className="mx-10 flex-1 border-x border-[#383838]"></div>

      <div className="w-[21rem]"></div>
    </div>
  );
}
