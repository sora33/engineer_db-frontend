import { Inner } from "@/components/atoms";
import { Text } from "@/components/atoms";
import { EngineerDbAboutCtt } from "@/app/(login)/_component/EngineerDbAboutCtt";
import { MotionWhileInView } from "@/components/animation";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignOutToast } from "@/app/(login)/_component/SignOutToast";
import { SignInButton } from "@/components/layout/header/nav/SignInButton";

const EngineerDbAboutCttList = [
  {
    title: "データを蓄積",
    description: "サービスの利用者のデータを、エンジニアDBに蓄積します。",
    imageAlt: "エンジニアDBにデータが蓄積される様子",
  },
  {
    title: "エンジニアを探す",
    description: "エンジニアDBを通して、エンジニアや企業とマッチングできます。",
    imageAlt: "エンジニアDBでエンジニアを探す様子",
  },
  {
    title: "データの可視化・活用",
    description: "エンジニアDBのデータを分析し、効率的に共有します。",
    imageAlt: "エンジニアDBにデータが蓄積される様子",
  },
];

export default async function Page() {
  const session = await getServerSession();
  if (session) {
    redirect("/engineers");
  }

  return (
    <div className="relative">
      <SignOutToast />
      <MotionWhileInView duration={0.5}>
        <div className="overflow-hidden bg-orange-50/70 py-20 text-center md:py-32">
          <Inner>
            <MotionWhileInView duration={0.5}>
              <h1 className="text-2xl font-bold text-orange-500/90 md:text-4xl">
                エンジニアを、ここに集結。
              </h1>
            </MotionWhileInView>
            <MotionWhileInView duration={0.5}>
              <Text className="mt-8 font-bold">
                仲間も仕事も情熱も、ここでつながる。
              </Text>
              <Text className="mt-4">
                全国のエンジニアデータを民主化し、データを共有・活用するサービスです。
                <br />
                仕事目的、交流目的など、それぞれの目的に合わせてご利用頂けます。
              </Text>
              <Text className="mt-4">
                Githubでログインできますので、お気軽にご利用ください。
              </Text>
            </MotionWhileInView>
          </Inner>
        </div>
      </MotionWhileInView>
      <Inner>
        <section className="mt-8">
          <MotionWhileInView duration={0.5}>
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              えんじにあDBとは？
            </h2>
          </MotionWhileInView>
          {EngineerDbAboutCttList.map((item, index) => (
            <MotionWhileInView key={index} duration={0.5}>
              <EngineerDbAboutCtt
                index={index + 1}
                title={item.title}
                description={item.description}
                imageAlt={item.imageAlt}
              />
            </MotionWhileInView>
          ))}
        </section>
        <section className="mt-20">
          <MotionWhileInView duration={0.5}>
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              つかってみる
            </h2>
            <div className="pb-12">
              <p className="mb-4">
                本サービスのログインは、Githubアカウントのみをご利用いただけます。
                <br />
                もっとログイン方法を増やしてほしい旨の要望は、
                <a
                  className="text-orange-500 hover:underline"
                  href="https://forms.gle/aeBUs6YQSRNgTaqz8"
                  target="_blank"
                >
                  こちら
                </a>
                よりお問い合わせお願いいたします。
              </p>
              <SignInButton />
            </div>
          </MotionWhileInView>
        </section>
      </Inner>
    </div>
  );
}
