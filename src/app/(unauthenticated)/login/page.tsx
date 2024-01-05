import { Inner } from "@/components/atoms";
import { Text } from "@/components/atoms";
import { EngineerDbAboutCtt } from "@/app/(unauthenticated)/login/_component/EngineerDbAboutCtt";
import { SignOutToast } from "@/app/(unauthenticated)/login/_component/SignOutToast";
import { SignInButton } from "@/components/layout/header/nav/SignInButton";

const EngineerDbAboutCttList = [
  {
    title: "データを蓄積",
    description: (
      <>
        「エンジニアDB」に登録し、プロフィール情報をご登録ください。ユーザー様が「エンジニアDB」の一部になります。
      </>
    ),
    imageAlt: "「エンジニアDB」にデータが蓄積される様子",
  },
  {
    title: "新たなつながりを",
    description: (
      <>
        「エンジニアDB」を通して、エンジニアや企業と新しい出会いを見つけてください。
        <br />
        「エンジニアDB」では、エンジニアデータを、ユーザー様みんなで共有することを目的としています。
      </>
    ),
    imageAlt: "「エンジニアDB」でエンジニアを探す様子",
  },
  {
    title: "データの可視化・活用",
    description: (
      <>
        「エンジニアDB」のデータを分析し、効率的に共有します。
        <br />
        ユーザー様のデータの価値を最大限引き出した上で、ユーザー様に還元します。
      </>
    ),
    imageAlt: "「エンジニアDB」にデータが蓄積される様子",
  },
];

export default async function Page() {
  return (
    <div className="relative">
      <SignOutToast />
      <div className="overflow-hidden bg-slate-50 py-20 text-center md:py-32">
        <Inner>
          <div>
            <h1 className="text-2xl font-bold text-orange-500/90 md:text-3xl">
              エンジニアのデータを
              <br />
              ここに集約
            </h1>
          </div>
          <div>
            <Text size="sm" className="mt-8 font-bold">
              仲間も仕事も情熱も、ここでつながる。
            </Text>
            <Text size="sm" className="mt-4 hidden md:block">
              エンジニアのデータが集まり、エンジニアや仕事に出会えるサービスです。
              <br />
              仕事や交流など、それぞれの目的に合わせてご活用ください。
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
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              エンジニアDBとは？
            </h2>
          </div>
          <div className="grid gap-4">
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
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              開発者の想い
            </h2>
            <div className="grid gap-2">
              <p>
                「エンジニアDB」は、エンジニアがサービスに登録しているだけで、企業やエンジニアとつながる仕組みを目指しています。
                多くのエンジニアデータを集約し、データを民主化することで、実現していきます。
              </p>
              <p>
                昨今、エンジニアを募集する際には、SNSや人材サービスを活用することが多いですが、いくつか問題がありました。
                SNSは、検索性が優れておらず、〇〇な人！を探すことができません。人材サービスは、サービス提供者がデータを独占しており、エンジニア同士が繋がることはありません。
              </p>
              <p>
                そこで、「エンジニアDB」を提案します。
                <br />
                エンジニアは登録しているだけで、企業やエンジニアとつながることができます。
              </p>
              <p>
                ユーザー様が集まるほど、良いサービスになりますので、ぜひご登録お願いいたします。
              </p>
            </div>
          </div>
        </section>
        <section className="mt-20 pb-20">
          <div>
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              つかってみる
            </h2>
            <div className="pb-12">
              <p className="mb-4">Githubでログインをしてください。</p>
              <SignInButton />
            </div>
          </div>
        </section>
      </Inner>
    </div>
  );
}
