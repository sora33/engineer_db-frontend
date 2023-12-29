"use client";
import { Post } from "@/types/post";
import "@/lib/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Linkify from "react-linkify";
import { useState } from "react";
import { PostDelete } from "@/app/(authenticated)/posts/_component/PostDelete";

type Props = {
  post: Post;
};

export const PostItem: React.FC<Props> = ({ post }) => {
  const [isShowDisplay, setIsShowDisplay] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false); // 追加

  const content = post.content
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
  const componentDecorator = (href: string, text: string, key: number) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
  const isCurrentUser = post.user.id === localStorage.getItem("userId");

  if (isDeleted) {
    return null;
  }

  return (
    <div
      key={post.id}
      className="grid gap-2 rounded bg-white p-4 text-[14px] shadow"
    >
      <div className="flex gap-4">
        <a href={`engineers/${post.user.id}`}>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.user.avatar}`}
            />
            <AvatarFallback>
              {post.user.name?.substring(0, 2) || ""}
            </AvatarFallback>
          </Avatar>
        </a>
        <div className="w-full">
          <div className="flex w-full">
            <p className="mr-4 font-bold">{post.user.name}</p>
            <p className="text-gray-400">
              {new Intl.DateTimeFormat("ja-JP", {
                timeZone: "Asia/Tokyo",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(new Date(post.updatedAt))}
            </p>
            {isCurrentUser && (
              <button
                className="ml-auto cursor-pointer text-sm font-bold text-red-500 hover:underline"
                onClick={() => setIsShowDisplay(true)}
              >
                削除
              </button>
            )}
            <PostDelete
              isShowDialog={isShowDisplay}
              setIsShowDialog={setIsShowDisplay}
              postId={post.id}
              onDeleted={() => setIsDeleted(true)}
            />
          </div>
          <div className="postContent">
            <Linkify componentDecorator={componentDecorator}>{content}</Linkify>
          </div>
        </div>
      </div>
    </div>
  );
};
