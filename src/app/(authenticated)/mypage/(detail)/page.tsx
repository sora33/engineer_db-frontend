import { cookies } from "next/headers";
import { User } from "@/types/user";
import { Heading } from "@/components/atoms";
import { ProfileForm } from "@/app/(authenticated)/mypage/(detail)/_component/ProfileForm";
import { useCurrentUserId } from "@/app/(authenticated)/_component/useCurrentUserId";
import { ProfileDialog } from "@/app/(authenticated)/mypage/(detail)/_component/ProfileDialog";
import { formatDate } from "@/lib/date";
export default async function Page() {
  const token = cookies().get("next-auth.session-token")?.value;
  const currentUserId = await useCurrentUserId();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${currentUserId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const user: User = await res.json();
  const nullCount = Object.values(user).filter(
    (value) => value === null
  ).length;

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="lg">
          プロフィール
        </Heading>
      </div>
      <ProfileForm user={user} />
      <ProfileDialog nullCount={nullCount} />
    </>
  );
}
