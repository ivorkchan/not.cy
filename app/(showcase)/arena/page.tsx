import Arena from "@/components/embed/Arena";

export default async function Page() {
  const channels = ["text-v-cq2ouaccq"];

  return (
    <>
      <div className="hidden max-w-[64ch] flex-col gap-16 lg:flex">
        {channels.map((channel) => (
          <Arena channel={channel} key={channel} />
        ))}
      </div>
      <div className="w-full px-5 py-4 lg:hidden">
        {channels.map((channel) => (
          <Arena channel={channel} key={channel} />
        ))}
      </div>
    </>
  );
}
