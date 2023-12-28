"use client";
import { Post } from "@/types/post";
import "@/lib/zod";
import { PostItem } from "@/app/(authenticated)/posts/_component/PostItem";

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};
