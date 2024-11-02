import { Image, Inner } from "@/components/atoms";
import { Text, Heading } from "@/components/atoms";
import { EngineerDbAboutCtt } from "@/app/(unauthenticated)/login/_component/EngineerDbAboutCtt";
import { SignOutToast } from "@/app/(unauthenticated)/login/_component/SignOutToast";
import { SignInButton } from "@/components/layout/header/nav/SignInButton";

const EngineerDbAboutCttList = [
  {
    title: "データを蓄積",
    description: (
      <>
        「エンジニアDB」に登録し、プロフィール情報をご登録ください。あなたがが「エンジニアDB」の一部になります。
      </>
    ),
    imageAlt: "「エンジニアDB」にデータが蓄積される様子",
  },
  {
    title: "新たなつながりを",
    description: (
      <>
        「エンジニアDB」を通して、エンジニアや企業と新しい出会いを見つけてください。
      </>
    ),
    imageAlt: "「エンジニアDB」でエンジニアを探す様子",
  },
  {
    title: "データの可視化・活用",
    description: (
      <>
        「エンジニアDB」に蓄積されたデータを分析し、効率的に共有します。
        <br />
        データの価値を最大限引き出し、皆様に還元します。
      </>
    ),
    imageAlt: "「エンジニアDB」にデータが蓄積される様子",
  },
];

export default async function Page() {
  return (
    <div className="relative">
      <SignOutToast />
      <div className="overflow-hidden bg-slate-100 py-20 text-center md:py-32">
        <Inner>
          <div>
            <Text size="md" className="font-bold text-red-500">
              申し訳ございませんが、現在サービスは一時停止中です。
              <br />
              再開時期が決まり次第、お知らせいたします。
            </Text>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-orange-500/90 sm:text-5xl sm:leading-tight sm:tracking-wider">
              エンジニアのデータを
              <br />
              ここに集約
            </h1>
          </div>
          <div>
            <Text size="lg" className="mt-8 font-bold">
              仲間も仕事も情熱も、
              <br className="md:hidden" />
              ここでつながる。
            </Text>
            <Text size="md" className="mt-4 hidden md:block">
              エンジニアのデータがここに集まり、
              <br />
              それを通して、仲間や仕事に出会えるサービスです。
            </Text>
            <Text size="sm" className="mt-4 md:hidden">
              エンジニアのデータが集まり、
              <br />
              エンジニアや仕事に出会えるサービスです。
              <br />
              仕事や交流など、
              <br />
              それぞれの目的に合わせてご活用ください。
            </Text>
          </div>
        </Inner>
      </div>
      <Inner>
        <section className="mt-20">
          <div>
            <Heading as="h2" size="lg" className="mb-8 inline-block">
              エンジニアDBとは？
            </Heading>
          </div>
          <div className="grid gap-6">
            {EngineerDbAboutCttList.map((item, index) => (
              <EngineerDbAboutCtt
                key={index}
                index={index + 1}
                title={item.title}
                description={item.description}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </section>
        <section className="mt-20">
          <div>
            <Heading as="h2" size="lg" className="mb-8 inline-block">
              開発者の想い
            </Heading>
            <div className="grid gap-4">
              <Text>
                エンジニアDBは、エンジニア間の技術的なつながりを強化し、求人や求職、開発仲間をスムーズに検索できる仕組みを目指して開発しました。
              </Text>
              <span />
              <Text>
                現在、エンジニアの求人には、SNSや人材サービスを活用することが多いですが、その求人と求職の体制にはいくつか課題があります。
              </Text>
              <Text>
                SNSは検索性に欠け、特定の人材を見つけにくいという問題があります。また、人材サービスはデータを独占する傾向にあり、複数のサービスに登録する必要が生じます。
              </Text>
              <Text>
                そこで、エンジニアDBの提案です。
                <br />
                エンジニアDBは、登録されたデータを独占せず、共有し、民主化を図ります。
              </Text>
              <Text>
                最終的なビジョンは、
                <br />
                <span className="highlight">
                  「本サービスに登録するだけで、企業やエンジニアと繋がる状態を実現すること」です。
                </span>
              </Text>
            </div>
            <div className="mt-8 flex justify-center">
              <Image
                src={`/img/top_three.png`}
                alt={"３方よしの図解"}
                height={400}
                width={540}
              />
            </div>
          </div>
        </section>
        <section className="mt-20 pb-20">
          <div>
            <Heading as="h2" size="lg" className="mb-8 inline-block">
              使ってみる
            </Heading>
            <div className="pb-12">
              <Text className="mb-4">
                まずはGithubアカウントでログインし、エンジニアDBをお試しください。パスワード管理不要で、ご利用いただけます。
              </Text>
              <Text className="mb-4">
                エンジニアDBは、あなたのキャリアを次のレベルに引き上げるためのスプリングボードです。
                <span className="highlight">
                  プロフィールを充実させ、あなたのスキルと経験を前面に押し出しましょう。
                </span>
              </Text>
              <Text className="mb-4">
                さあ、今すぐ始めて、エンジニアとしての可能性を広げましょう。エンジニアDBがあなたの技術的な旅をサポートします。
              </Text>
              <div className="mt-12">
                <SignInButton />
              </div>
            </div>
          </div>
        </section>
      </Inner>
    </div>
  );
}
