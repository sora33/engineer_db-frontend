"use client";
import { Post } from "@/types/post";
import "@/lib/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { PostDelete } from "@/app/(authenticated)/posts/_component/PostDelete";
import { formatDateTime } from "@/lib/date";
import { Link } from "@/components/atoms";
import ReactMdEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";

type Props = {
  post: Post;
};

export const PostItem: React.FC<Props> = ({ post }) => {
  const [isShowDisplay, setIsShowDisplay] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { currentUser } = useCurrentUser();

  const isCurrentUser = post.user.id === currentUser?.id;

  if (isDeleted) {
    return null;
  }

  return (
    <div
      key={post.id}
      className="grid gap-2 rounded bg-white p-4 text-[14px] shadow"
    >
      <div className="grid gap-4">
        <div className="flex w-full items-center gap-4">
          <Link href={`/engineers/${post.user.id}`}>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={
                  post?.user?.avatar
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.user.avatar}`
                    : ""
                }
              />
              <AvatarFallback>
                {post.user.name?.substring(0, 2) || ""}
              </AvatarFallback>
            </Avatar>
          </Link>
          <p className="font-bold">{post.user.name}</p>
          <p className="text-gray-400">
            {post.updatedAt ? formatDateTime(post.updatedAt) : ""}
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
        <div className="postContent overflow-hidden" data-color-mode="light">
          <ReactMdEditor.Markdown
            source={post.content}
            rehypePlugins={[[rehypeSanitize]]}
            className=""
            linkTarget={"_blank"}
          />
        </div>
      </div>
    </div>
  );
};
