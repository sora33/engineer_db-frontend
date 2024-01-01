import { Heading, LinkText, Loading } from "@/components/atoms";
import { SearchForm } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { cookies } from "next/headers";
import { User } from "@/types/user";

export default async function Page({ searchParams }: { searchParams: string }) {
  const token = cookies().get("next-auth.session-token")?.value;
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
      <div className="grid gap-8 pb-4">
        <section>
          <Heading as="h1" size="md">
            エンジニアを検索
          </Heading>
          <LinkText className="text-orange-500" href="/engineers/dashboard">
            「エンジニアのダッシュボード」はこちら
          </LinkText>
        </section>
        <div>
          <SearchForm users={users} totalCount={totalCount} />
        </div>
      </div>
    </>
  );
}
