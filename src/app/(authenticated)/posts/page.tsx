import { InfinitePostList } from "./_component/InfinitePostList";

export default function Page() {
  const apiEndpoint = "/api/posts";

  return (
    <>
      <div className="grid w-full gap-8">
        <InfinitePostList apiEndpoint={apiEndpoint} />
      </div>
    </>
  );
}
