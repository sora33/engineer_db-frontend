"use client";
import { InfinitePostList } from "@/app/(authenticated)/posts/_component/InfinitePostList";
import { Heading } from "@/components/atoms";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const apiEndpoint = `/api/users/${id}/posts`;

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="md">
          投稿一覧
        </Heading>
      </div>
      <div className="grid w-full gap-8">
        <InfinitePostList apiEndpoint={apiEndpoint} isPostCreate={false} />
      </div>
    </>
  );
}
