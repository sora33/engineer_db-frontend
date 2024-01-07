"use client";
import { formatDateTime } from "@/lib/date";
import { formatContent, componentDecorator } from "@/lib/content";
import Linkify from "react-linkify";
import { Message } from "@/types/message";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";
type Props = {
  message: Message;
};

export const MessageItem: React.FC<Props> = ({ message }) => {
  const { currentUser } = useCurrentUser();
  const isMyMessage = message.userId == currentUser?.id;

  return (
    <div
      className={`inline-block max-w-[480px] text-sm ${
        isMyMessage ? "ml-auto" : "mr-auto"
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
