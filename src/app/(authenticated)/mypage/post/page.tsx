import { useCurrentUserId } from "@/app/(authenticated)/_component/useCurrentUserId";
import { InfinitePostList } from "@/app/(authenticated)/posts/_component/InfinitePostList";
import { Description, Heading } from "@/components/atoms";

export default async function Page() {
  const currentUserId = await useCurrentUserId();

  const apiEndpoint = currentUserId
    ? `/api/users/${currentUserId}/posts`
    : undefined;

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="md">
          投稿一覧
        </Heading>
        <Description>
          自分のアピール、イベント告知、求人などを投稿できます。
        </Description>
      </div>
      <div className="grid w-full gap-8">
        <InfinitePostList apiEndpoint={apiEndpoint} />
      </div>
    </>
  );
}
