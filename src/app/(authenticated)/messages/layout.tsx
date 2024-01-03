import { Heading, LinkText, Loading, Inner } from "@/components/atoms";
import { SearchForm } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { cookies } from "next/headers";
import { User } from "@/types/user";
import { Message } from "@/types/message";
import { GroupItem } from "@/app/(authenticated)/messages/_component/GroupItem";

export type UserWithLastMessage = User & {
  latestMessage: Message;
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("next-auth.session-token")?.value;

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
          <div className="grid gap-8 pb-4">
            <section>
              <Heading as="h1" size="md">
                メッセージ
              </Heading>
            </section>
            <section className="grid  items-start gap-4 md:flex">
              <div className="sticky top-12 h-[calc(100vh-16rem)] overflow-hidden">
                <div className="grid h-full gap-4 overflow-y-scroll rounded p-4 shadow md:w-96">
                  <div className="flex flex-col gap-4">
                    {dmGroupUsers
                      .sort(
                        (a, b) =>
                          new Date(b.latestMessage.createdAt).getTime() -
                          new Date(a.latestMessage.createdAt).getTime()
                      )
                      .map((user) => {
                        return <GroupItem user={user} key={user.id} />;
                      })}
                  </div>
                </div>
              </div>
              <div className="flex-1">{children}</div>
            </section>
          </div>
        </Inner>
      </section>
    </div>
  );
}
