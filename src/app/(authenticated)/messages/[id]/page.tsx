import { cookies } from "next/headers";
import { User } from "@/types/user";
import { Message } from "@/types/message";
import { EngineerItem } from "@/app/(authenticated)/engineers/(root)/_compoent/EngineerItem";
import { MessageList } from "@/app/(authenticated)/messages/[id]/_component/MessageList";
type data = {
  otherUser: User;
  messages: Message[];
};

export default async function Page({ params }: { params: { id: string } }) {
  const token = cookies().get("next-auth.session-token")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${params.id}/messages`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data: data = await res.json();

  console.log(data);
  return (
    <>
      <div className="grid gap-8">
        {data.otherUser && <EngineerItem user={data.otherUser} />}
        <MessageList messages={data.messages} />
      </div>
    </>
  );
}
