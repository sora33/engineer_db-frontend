import { Inner } from "@/components/atoms";
import { Text } from "@/components/atoms";
import { EngineerDbAboutCtt } from "@/app/(login)/_component/EngineerDbAboutCtt";
import { MotionWhileInView } from "@/components/animation";

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

export default function Page() {
  return (
    <div className="relative">
      <MotionWhileInView>
        <div className="overflow-hidden bg-orange-50/70 py-20 text-center md:py-32">
          <Inner>
            <MotionWhileInView>
              <h1 className="text-2xl font-bold text-orange-500/90 md:text-4xl">
                エンジニアの全て、ここに集結。
              </h1>
            </MotionWhileInView>
            <MotionWhileInView>
              <Text className="mt-8 font-bold">
                スキルも経験も情熱も、ここでつながる。
              </Text>
              <Text className="mt-4">
                エンジニアの情報交換とマッチングの新しい形を提供します。
                <br />
                仕事目的、交流目的など、目的に合わせてご利用頂けます。
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
          <MotionWhileInView>
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              えんじにあDBとは？
            </h2>
          </MotionWhileInView>

          {EngineerDbAboutCttList.map((item, index) => (
            <MotionWhileInView key={index}>
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
          <MotionWhileInView>
            <h2 className="mb-8 inline-block border-b-4 border-orange-300 text-2xl font-bold md:text-3xl">
              つかってみる
            </h2>
          </MotionWhileInView>
        </section>
      </Inner>
    </div>
  );
}
