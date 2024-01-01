import { cookies } from "next/headers";
import { Skill } from "@/types/skill";
import { Heading } from "@/components/atoms";
import { SkillForm } from "@/app/(authenticated)/mypage/skill/_component/SkillForm";
import { SkillExplain } from "@/app/(authenticated)/mypage/skill/_component/SkillExplain";

export default async function Page({ params }: { params: { id: string } }) {
  const token = cookies().get("next-auth.session-token")?.value;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${params.id}/skills`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const skills: Skill[] = await res.json();

  return (
    <>
      <div className="pb-4">
        <Heading as="h1" size="lg">
          スキルレベル
        </Heading>
        <SkillExplain />
      </div>
      <SkillForm skills={skills} isView={true} />
    </>
  );
}
