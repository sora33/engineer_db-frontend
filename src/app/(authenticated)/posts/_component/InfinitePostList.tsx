"use client";
import React, { useRef, useCallback, useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { useIntersection } from "./useIntersection";
import { PostList } from "./PostList";
import { Loading } from "@/components/atoms";
import { PostItemSkeleton } from "./PostItemSkeleton";
import { Post } from "@/types/post";
import { PostForm } from "@/app/(authenticated)/posts/_component/PostForm";

interface InfinitePostListProps {
  apiEndpoint: string;
  isPostCreate?: boolean;
}

export const InfinitePostList: React.FC<InfinitePostListProps> = ({
  apiEndpoint,
  isPostCreate = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(ref);
  const limit = 10;

  const getKey = (pageIndex: number, previousPageData: Post[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${apiEndpoint}/?page=${pageIndex + 1}`;
  };

  const {
    data: postList,
    error,
    isValidating,
    setSize,
    mutate,
    size,
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

  if (error) return <div>failed to load</div>;

  return (
    <div className="grid w-full gap-8">
      {isPostCreate && <PostForm hundleSubmit={mutate} />}
      {postList ? (
        <>
          <PostList posts={postList.flat()} />
          <div ref={ref}>
            {isEmpty ? (
              "取得できるデータはありません。"
            ) : !isReachingEnd ? (
              <Loading />
            ) : (
              "すべて読み込みました。"
            )}
          </div>
        </>
      ) : (
        Array.from({ length: 4 }).map((_, i) => <PostItemSkeleton key={i} />)
      )}
    </div>
  );
};
