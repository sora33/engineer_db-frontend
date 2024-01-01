import { cookies } from "next/headers";
import { Skill } from "@/types/skill";
import { Heading } from "@/components/atoms";
import { SkillForm } from "@/app/(authenticated)/mypage/skill/_component/SkillForm";
import { useCurrentUserId } from "@/app/(authenticated)/_component/useCurrentUserId";
import { SkillExplain } from "@/app/(authenticated)/mypage/skill/_component/SkillExplain";

export default async function Page() {
  const token = cookies().get("next-auth.session-token")?.value;
  const currentUserId = await useCurrentUserId();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${currentUserId}/skills`,
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
      <SkillForm skills={skills} />
    </>
  );
}
