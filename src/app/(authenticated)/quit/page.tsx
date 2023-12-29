import { Heading, Link } from "@/components/atoms";
import { Button } from "@/components/ui/button";
import { QuitDialog } from "@/app/(authenticated)/quit/_component/QuitDialog";

export default function Page() {
  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="lg">
          退会のお手続き
        </Heading>
        <div className="mt-4 grid gap-2">
          <p>
            これまで当サービスをご利用いただき、本当にありがとうございました。
          </p>
          <p>
            当サービスを退会すると、あなたの全てのデータが削除されます。
            これには、投稿した記事やコメントも含まれます。退会手続きは取り消すことができません。よく考えてから進めて頂きますようお願いいたします。
          </p>
          <p>
            <span>それでも退会を希望される場合は、</span>
            <a
              className="text-orange-500 hover:underline"
              href="https://forms.gle/aeBUs6YQSRNgTaqz8"
              target="_blank"
            >
              問い合わせフォーム
            </a>
            より、退会理由や改善要望を伺いしたく存じます。
          </p>
          <p>
            退会後に、改めて当サービスをご利用する機会があれば、いつでもお気軽にご登録ください。
          </p>
        </div>
        <div className="mt-12 flex gap-4">
          <Link href="/engineers">
            <Button variant="outline" className="min-w-[120px]">
              戻る
            </Button>
          </Link>
          <QuitDialog />
        </div>
      </div>
    </>
  );
}
