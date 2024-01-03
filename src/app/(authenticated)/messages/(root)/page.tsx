import { Heading } from "@/components/atoms";
export default async function Page() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div>
          <Heading as="h2">メッセージを選択</Heading>
          <p className="text-slate-500">
            メッセージを選択して、会話をはじめでみましょう。
          </p>
        </div>
      </div>
    </>
  );
}
