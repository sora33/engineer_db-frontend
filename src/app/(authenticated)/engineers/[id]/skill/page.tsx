import { cookies } from "next/headers";
import { Skill } from "@/types/skill";
import { Heading } from "@/components/atoms";
import { SkillForm } from "@/app/(authenticated)/engineers/[id]/skill/_component/SkillForm";

export default async function Page({ params }: { params: { id: string } }) {
  const token = cookies().get("next-auth.session-token")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${params.id}/skills`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const skills: Skill[] = await res.json();
  const userId = params.id;

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="lg">
          スキルレベル
        </Heading>
        <p className="">
          レベルの概念は、
          <a
            href="https://www.ipa.go.jp/archive/files/000005100.pdf#page=32"
            target="_blank"
            className="text-orange-500 hover:underline"
          >
            IPAの「ITエンジニアのためのキャリア・レベル定義」
          </a>
          をご参照ください。
        </p>
        <p className="text-sm">
          ・<b>「Lv.3」</b>は、<b>「要求された作業を独力で推進できる」</b>
          レベルです。<span className="">（参考）2~4年目のエンジニア*</span>
        </p>
        <p className="text-sm">
          ・<b>「Lv.5」</b>
          は、スキルの専門分野が確立し、<b>「社内のテックリード」</b>
          レベルです。 <span className="">（参考）4~年目のエンジニア*</span>
        </p>
        <p className="text-sm">
          ・<b>「Lv.7」</b>
          は、<b>「世界で通用するプレーヤ」</b>
          で最も高いレベルです。
        </p>
        <p className="text-sm">※ 年数は目安です。</p>
      </div>
      <SkillForm skills={skills} userId={userId} />
    </>
  );
}
