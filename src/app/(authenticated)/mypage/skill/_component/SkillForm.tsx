"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Skill } from "@/types/skill";
import "@/lib/zod";
import { SkillRangeBar } from "@/app/(authenticated)/mypage/skill/_component/SkillRangeBar";
import { useState } from "react";
import {
  PROJECT_SKILL_LIST,
  SOFTWHERE_SKILL_LIST,
  PROGRAMMING_SKILL_LIST,
  FRAMEWORK_SKILL_LIST,
  DATABASE_SKILL_LIST,
  TOOL_SKILL_LIST,
  SKILL_LIST,
} from "@/lib/ontions";
import { FileterSelect } from "@/app/(authenticated)/mypage/skill/_component/FileterSelect";
import { useToast } from "@/providers/ToastProvider";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";

let FormSchema = z.object({});
SKILL_LIST.forEach((skill) => {
  FormSchema = FormSchema.merge(
    z.object({
      [skill.value]: z.preprocess((v) => Number(v), z.number()),
    })
  );
});
export type FormSchemaType = z.infer<typeof FormSchema>;

type Props = {
  skills: Skill[];
  isView?: boolean;
};

export const SkillForm: React.FC<Props> = ({ skills, isView = false }) => {
  const { currentUser } = useCurrentUser();
  const userId = currentUser?.id;
  const [filter, setFilter] = useState(isView ? "1" : "0");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const defaultValues = SKILL_LIST.reduce((values, skill) => {
    const foundSkill =
      skills && skills.length > 0
        ? skills?.find((s) => s.name === skill.value)
        : null;
    return {
      ...values,
      [skill.value]: foundSkill ? foundSkill.level : 0,
    };
  }, {});

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (isView) {
      return;
    }
    const updatedFields = Object.keys(form.formState.dirtyFields);
    const updatedData = updatedFields.reduce((acc, curr) => {
      // @ts-ignore
      return { ...acc, [curr]: data[curr] };
    }, {});
    const skills = Object.entries(updatedData).map(([name, level]) => ({
      name,
      level,
    }));
    setIsLoading(true);
    try {
      await fetch("/api/skills", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, skills: skills }),
      });
      toast({ title: "更新できました。", type: "success" });
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div className="flex justify-end">
        <FileterSelect onChange={setFilter} defaultValue={isView ? "1" : "0"} />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <SkillRangeBar
          title="プロジェクト管理"
          skillList={PROJECT_SKILL_LIST}
          form={form}
          filter={filter}
          isView={isView}
        />
        <SkillRangeBar
          title="ソフトウェア開発"
          skillList={SOFTWHERE_SKILL_LIST}
          form={form}
          filter={filter}
          isView={isView}
        />
        <SkillRangeBar
          title="プログラミング言語"
          skillList={PROGRAMMING_SKILL_LIST}
          form={form}
          filter={filter}
          isView={isView}
        />
        <SkillRangeBar
          title="フレームワーク&ライブラリ"
          skillList={FRAMEWORK_SKILL_LIST}
          form={form}
          filter={filter}
          isView={isView}
        />
        <SkillRangeBar
          title="データベース技術"
          skillList={DATABASE_SKILL_LIST}
          form={form}
          filter={filter}
          isView={isView}
        />
        <SkillRangeBar
          title="サービス&ツール"
          skillList={TOOL_SKILL_LIST}
          form={form}
          filter={filter}
          isView={isView}
        />
        {!isView && (
          <Button
            className="mx-auto mt-4 w-full max-w-md"
            type="submit"
            onClick={() => form.formState.isSubmitting}
            isLoading={isLoading}
          >
            更新
          </Button>
        )}
      </form>
    </Form>
  );
};
