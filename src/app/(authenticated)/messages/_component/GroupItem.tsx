"use client";

import "@/lib/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams, useRouter } from "next/navigation";
import { UserWithLastMessage } from "@/app/(authenticated)/messages/layout";
import { formatDateTime } from "@/lib/date";
import { useState } from "react";
import { Link } from "@/components/atoms";

type Props = {
  user: UserWithLastMessage;
};

export const GroupItem: React.FC<Props> = ({ user }) => {
  const [isNotRead, setIsNotRead] = useState(
    user.latestMessage?.isRead === false && user.latestMessage.userId == user.id
  );
  const router = useRouter();
  const { id } = useParams();

  const hundleClick = () => {
    setIsNotRead(false);
    router.push(`/messages/${user.id}`);
  };

  return (
    <div
      key={user.id}
      className={`rounde grid cursor-pointer gap-0 p-4 text-[14px] shadow hover:bg-orange-50
      ${id == user.id ? "border-r-2 border-r-orange-500 bg-orange-50" : ""}
      ${isNotRead && "shadow-lg"}
      `}
      onClick={hundleClick}
    >
      <div>
        {isNotRead && (
          <span className="ml-auto text-xs font-bold text-red-400">
            未読メッセージがあります。
          </span>
        )}
      </div>
      <div className="flex gap-4">
        <Link href={`/engineers/${user.id}`}>
          <Avatar>
            <AvatarImage
              src={
                user?.avatar
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}`
                  : ""
              }
            />
            <AvatarFallback>{user.name?.substring(0, 2) || ""}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="w-full">
          <div className="flex w-full">
            <p className="mr-4 font-bold">{user.name}</p>
            <p className="text-gray-400">
              {user.latestMessage?.createdAt
                ? formatDateTime(user.latestMessage?.createdAt)
                : ""}
            </p>
          </div>
          <div className="mr-4 w-full max-w-[240px] pr-4">
            <p className={`truncate ${!isNotRead && "text-gray-600"}`}>
              {user.latestMessage.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
