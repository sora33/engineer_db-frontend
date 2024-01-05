"use client";
import { Message } from "@/types/message";
import { MessageItem } from "@/app/(authenticated)/messages/[id]/_component/MessageItem";
import { MessageForm } from "@/app/(authenticated)/messages/[id]/_component/MessageForm";
import { useState, useRef, useEffect } from "react";

type Props = {
  messages: Message[];
};

export const MessageList: React.FC<Props> = ({ messages }) => {
  const [messageList, setMessageList] = useState<Message[]>(messages);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    formRef.current?.scrollIntoView({ block: "end" });
  }, []);

  return (
    <>
      <div className="grid gap-4">
        {messageList?.length > 0 &&
          messageList.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
      </div>
      <div ref={formRef}>
        <MessageForm setFormInput={setMessageList} />
      </div>
      <p className="mt-12 font-bold md:hidden">メッセージ一覧</p>
    </>
  );
};
