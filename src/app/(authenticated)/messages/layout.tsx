import { Heading, Inner, Link } from "@/components/atoms";
import { useAuthToken } from "@/hooks/useJwtToken";
import { User } from "@/types/user";
import { Message } from "@/types/message";
import { GroupItem } from "@/app/(authenticated)/messages/_component/GroupItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "メッセージ",
};

export type UserWithLastMessage = User & {
  latestMessage: Message;
};

type Props = {
  children: React.ReactNode;
};

export default async function MainLayout({ children }: Props) {
  const token = useAuthToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dm_groups`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const dmGroupUsers: UserWithLastMessage[] = await res.json();

  return (
    <div className="bg-gray-50 pb-20 pt-4">
      <section className="mt-4">
        <Inner size="xl">
          <div className="grid gap-4 pb-4">
            <section>
              <Heading as="h1" size="md">
                メッセージ
              </Heading>
            </section>
            <section className="grid  items-start gap-4 md:flex">
              <div className="overflow-hidden md:sticky md:top-12 md:h-[calc(100vh-16rem)]">
                <div className="grid h-full gap-4 rounded shadow md:w-96 md:overflow-y-scroll md:p-4">
                  <div className="flex flex-col gap-4">
                    {dmGroupUsers && dmGroupUsers.length > 0 ? (
                      dmGroupUsers
                        .sort(
                          (a, b) =>
                            new Date(b.latestMessage.createdAt).getTime() -
                            new Date(a.latestMessage.createdAt).getTime()
                        )
                        .map((user) => {
                          return <GroupItem user={user} key={user.id} />;
                        })
                    ) : (
                      <Link
                        href="/engineers"
                        className={`rounde group grid cursor-pointer gap-0 p-4 text-[14px] shadow hover:bg-orange-50`}
                      >
                        <p>メッセージ履歴がありません。</p>
                        <p className="text-orange-500 group-hover:underline">
                          エンジニアを探しにいきましょう。
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="-order-1 flex-1 md:order-2">{children}</div>
            </section>
          </div>
        </Inner>
      </section>
    </div>
  );
}
