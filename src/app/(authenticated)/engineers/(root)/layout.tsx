import { Heading, LinkText, Description } from "@/components/atoms";
import { SearchForm } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { Inner } from "@/components/atoms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "一覧と検索",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 pb-20 pt-4">
      <section className="mt-4">
        <Inner size="xl">
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
            <section className="grid items-start gap-4 md:flex">
              <div className="rounded p-2 shadow md:sticky md:top-16 md:w-96 md:p-4">
                <SearchForm />
              </div>
              <div className="flex-1">{children}</div>
            </section>
          </div>
        </Inner>
      </section>
    </div>
  );
}
