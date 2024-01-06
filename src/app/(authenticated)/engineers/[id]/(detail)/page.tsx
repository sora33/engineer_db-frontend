import { useAuthToken } from "@/hooks/useJwtToken";
import { User } from "@/types/user";
import { Heading } from "@/components/atoms";
import { ProfileView } from "@/app/(authenticated)/engineers/[id]/(detail)/_component/ProfileView";
export default async function Page({ params }: { params: { id: string } }) {
  const token = useAuthToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${params.id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const user: User = await res.json();

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="md">
          プロフィール
        </Heading>
      </div>
      <ProfileView user={user} />
    </>
  );
}
