import { Inner } from "@/components/atoms";
import { Text } from "@/components/atoms";
import { EngineerDbAboutCtt } from "@/app/(unauthenticated)/login/_component/EngineerDbAboutCtt";
import { MotionWhileInView } from "@/components/animation";
import { SignOutToast } from "@/app/(unauthenticated)/login/_component/SignOutToast";
import { SignInButton } from "@/components/layout/header/nav/SignInButton";

const EngineerDbAboutCttList = [
  {
    title: "データを蓄積",
    description: (
      <>
        「えんじにあDB」に登録し、プロフィールプロフィール情報をご登録ください。ユーザー様自身が「えんじにあDB」の一部になるのです。
      </>
    ),
    imageAlt: "「えんじにあDB」にデータが蓄積される様子",
  },
  {
    title: "エンジニアを探す",
    description: (
      <>
        「えんじにあDB」を通して、エンジニアや企業と新しい出会いを見つけてください。
        <br />
        「えんじにあDB」では、ユーザー様にご登録いただいたデータを、ユーザー様みんなで共有することを目的としています。
      </>
    ),
    imageAlt: "「えんじにあDB」でエンジニアを探す様子",
  },
  {
    title: "データの可視化・活用",
    description: (
      <>
        「えんじにあDB」のデータを分析し、効率的に共有します。
        <br />
        ユーザー様のデータの価値を最大限引き出した上で、ユーザー様に還元します。
      </>
    ),
    imageAlt: "「えんじにあDB」にデータが蓄積される様子",
  },
];

export default async function Page() {
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
              <Text size="sm" className="mt-8 font-bold">
                仲間も仕事も情熱も、ここでつながる。
              </Text>
              <Text size="sm" className="mt-4">
                エンジニアユーザーが集まり、人や仕事に出会えるサービスです。
                <br />
                交流目的、仕事目的など、それぞれの目的に合わせてご利用頂けます。
              </Text>
              <Text size="sm" className="mt-4">
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
                現在、ログイン方法は、Github連携のみとなっております。
              </p>
              <SignInButton />
            </div>
          </MotionWhileInView>
        </section>
      </Inner>
    </div>
  );
}
