import { Inner, LinkText } from "@/components/atoms";
import { UserTabs } from "@/app/(authenticated)/mypage/_component/UserTabs";
import { useAuthToken } from "@/hooks/useJwtToken";
import { User } from "@/types/user";
import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cookies } from "next/headers";
import { useCurrentUserId } from "@/app/(authenticated)/_component/useCurrentUserId";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> {
  const secureCookie =
    process.env.NEXTAUTH_URL?.startsWith("https://") ?? !!process.env.VERCEL;
  const cookieName = secureCookie
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";
  const token = cookies().get(cookieName)?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${params.id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const user: User = await res.json();
  const title = `${user.name}`;

  return {
    title,
  };
}

type Props = {
  children: React.ReactNode;
  params: { id: string };
};
export default async function MainLayout({ children, params }: Props) {
  const currentUserId = await useCurrentUserId();
  const isMyPage = currentUserId == params.id;
  if (isMyPage) {
    redirect("/mypage");
  }

  const token = useAuthToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${params.id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const user: User = await res.json();

  return (
    <div className="bg-gray-50 pb-20">
      <Inner>
        <div className="flex items-center pt-4 text-sm text-slate-500">
          <LinkText className="text-orange-500" href="/engineers">
            エンジニア一覧
          </LinkText>
          <span className="mx-4">{">"}</span>
          <div className="flex items-center">
            <Avatar className="mr-2">
              <AvatarImage
                src={
                  user?.avatar
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user?.avatar}`
                    : ""
                }
              />
              <AvatarFallback>
                {user?.name?.substring(0, 1) || ""}
              </AvatarFallback>
            </Avatar>
            <span>{user?.name}</span>
          </div>
        </div>
      </Inner>
      <div className="pt-4">
        <UserTabs variant="engineer" />
      </div>
      <section className="mt-4">
        <Inner>{children}</Inner>
      </section>
    </div>
  );
}
