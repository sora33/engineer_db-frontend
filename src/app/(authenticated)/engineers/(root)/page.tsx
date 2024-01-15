import { useAuthToken } from "@/hooks/useJwtToken";
import { User } from "@/types/user";
import { EngineerList } from "@/app/(authenticated)/engineers/(root)/_compoent/EngineerList";

export default async function Page({ searchParams }: { searchParams: string }) {
  const token = useAuthToken();
  const queryParams = new URLSearchParams(searchParams).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users?${queryParams}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  const users: User[] = data.users;
  const totalCount: number = data.totalCount;

  return (
    <>
      <EngineerList users={users} totalCount={totalCount} />
    </>
  );
}
