"use client";
import useSWRInfinite from "swr/infinite";
import { useEffect, useRef, useCallback } from "react";
import { useIntersection } from "@/app/(authenticated)/posts/_component/useIntersection";
import { Post } from "@/types/post";
import { PostList } from "@/app/(authenticated)/posts/_component/PostList";
import { useParams } from "next/navigation";
import { Heading } from "@/components/atoms";

export default function Page() {
  const { id } = useParams();
  // トリガーのdiv要素への参照
  const ref = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;
  // トリガーが表示されているか監視
  const intersection = useIntersection(ref);
  const limit = 10;
  // useSWRInfiniteのキーとなるパラメータ付きURLを生成
  const getKey = (pageIndex: number, previousPageData: Post[]) => {
    if (previousPageData && !previousPageData.length) return null;
    // pageIndexは0からのため+1をしてpageIndexを1からにする
    return `/api/users/${id}/posts?page=${pageIndex + 1}`;
  };
  // fetch　を使用してデータを取得
  const {
    data: postList,
    error,
    isValidating,
    mutate,
    size,
    setSize,
  } = useSWRInfinite(
    getKey,
    (url): Promise<Post[]> =>
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((r) => r.json()),
    {
      initialSize: 2,
    }
  );

  const isEmpty = postList?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (postList && postList[postList.length - 1]?.length < limit);

  const getPosts = useCallback(async () => {
    setSize(size + 1);
  }, [size, setSize]);

  useEffect(() => {
    if (intersection && !isReachingEnd && !isValidating) {
      getPosts();
    }
  }, [intersection, isReachingEnd, getPosts, isValidating]);

  if (error) return "failed to load";
  if (!postList) return "loading...";

  // 一覧表示でデータを扱いやすいように整形
  const posts = postList.flat();

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="lg">
          投稿一覧
        </Heading>
      </div>
      <div className="grid gap-8">
        <PostList posts={posts} />
        <div ref={ref}>
          {!isReachingEnd ? "loading..." : "すべて読み込みました。"}
          {isEmpty ? "取得するデータはありませんでした。" : null}
        </div>
      </div>
    </>
  );
}
