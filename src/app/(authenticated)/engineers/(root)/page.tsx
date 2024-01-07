import { Heading, LinkText, Description } from "@/components/atoms";
import { SearchForm } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { useAuthToken } from "@/hooks/useJwtToken";
import { User } from "@/types/user";

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
      <div className="grid gap-8 pb-4">
        <section className="w-full">
          <LinkText
            className="text-sm text-orange-500"
            href="/engineers/dashboard"
          >
            「エンジニアの集計ダッシュボード」はこちら
          </LinkText>
          <Heading as="h1" size="md">
            エンジニア一覧（検索）
          </Heading>
          <Description className="text-sm">
            あなたが求めるエンジニアを探してみましょう。
          </Description>
        </section>
        <div>
          <SearchForm users={users} totalCount={totalCount} />
        </div>
      </div>
    </>
  );
}
