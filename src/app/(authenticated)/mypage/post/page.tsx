"use client";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";
import { InfinitePostList } from "@/app/(authenticated)/posts/_component/InfinitePostList";
import { Description, Heading } from "@/components/atoms";

export default function Page() {
  const { currentUser } = useCurrentUser();

  const apiEndpoint = `/api/users/${currentUser?.id}/posts`;

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
