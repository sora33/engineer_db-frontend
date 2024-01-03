"use client";
import { formatDateTime } from "@/lib/date";
import { formatContent, componentDecorator } from "@/lib/content";
import Linkify from "react-linkify";
import { Message } from "@/types/message";
import { useState } from "react";
type Props = {
  message: Message;
};

export const MessageItem: React.FC<Props> = ({ message }) => {
  const [isMyNotRead, setIsMyNotRead] = useState(
    message?.isRead === false &&
      message.userId != localStorage.getItem("userId")
  );

  const currentUserId = localStorage.getItem("userId");
  const isMyMessage = message.userId == currentUserId;

  return (
    <div
      className={`inline-block min-w-[240px] max-w-[480px] text-sm ${
        isMyMessage && "ml-auto"
      }
    `}
    >
      <p
        className={`messageContent rounded-t-2xl p-2
          ${
            isMyMessage
              ? "ml-auto rounded-bl-2xl bg-orange-400 text-white"
              : "mr-auto rounded-br-2xl bg-gray-200 text-black"
          }
        `}
      >
        <Linkify componentDecorator={componentDecorator}>
          {formatContent(message.content)}
        </Linkify>
      </p>
      <div>
        <span className=" text-slate-500">
          {message.createdAt ? formatDateTime(message.createdAt) : ""}
        </span>
      </div>
    </div>
  );
};
