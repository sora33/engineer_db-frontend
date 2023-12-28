"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Skill } from "@/types/skill";
import "@/lib/zod";
import { SkillRangeBar } from "@/app/(authenticated)/engineers/[id]/skill/_component/SkillRangeBar";
import { useState } from "react";
import {
  PROJECT_SKILL_LIST,
  SOFTWHERE_SKILL_LIST,
  PROGRAMMING_SKILL_LIST,
  FRAMEWORK_SKILL_LIST,
  DATABASE_SKILL_LIST,
  TOOL_SKILL_LIST,
  SKILL_LIST,
} from "@/app/(authenticated)/engineers/[id]/skill/_component/constant";
import { FileterSelect } from "@/app/(authenticated)/engineers/[id]/skill/_component/FileterSelect";
import { useToast } from "@/providers/ToastProvider";

let FormSchema = z.object({});
SKILL_LIST.forEach((skill) => {
  FormSchema = FormSchema.merge(
    z.object({
      [skill.key]: z.preprocess((v) => Number(v), z.number()),
    })
  );
});
export type FormSchemaType = z.infer<typeof FormSchema>;

type Props = {
  skills: Skill[];
  userId: string;
};

export const SkillForm: React.FC<Props> = ({ skills, userId }) => {
  const [filter, setFilter] = useState("0");
  const toast = useToast();
  const defaultValues = SKILL_LIST.reduce((values, skill) => {
    const foundSkill = skills
      ? skills?.find((s) => s.name === skill.key)
      : null;
    return {
      ...values,
      [skill.key]: foundSkill ? foundSkill.level : 0,
    };
  }, {});

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const updatedFields = Object.keys(form.formState.dirtyFields);
    const updatedData = updatedFields.reduce((acc, curr) => {
      // @ts-ignore
      return { ...acc, [curr]: data[curr] };
    }, {});
    const skills = Object.entries(updatedData).map(([name, level]) => ({
      name,
      level,
    }));
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
    }
  };

  return (
    <Form {...form}>
      <div className="flex justify-end">
        <FileterSelect onChange={setFilter} />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <SkillRangeBar
          title="プロジェクト管理"
          skillList={PROJECT_SKILL_LIST}
          form={form}
          filter={filter}
        />
        <SkillRangeBar
          title="ソフトウェア開発"
          skillList={SOFTWHERE_SKILL_LIST}
          form={form}
          filter={filter}
        />
        <SkillRangeBar
          title="プログラミング言語"
          skillList={PROGRAMMING_SKILL_LIST}
          form={form}
          filter={filter}
        />
        <SkillRangeBar
          title="フレームワーク&ライブラリ"
          skillList={FRAMEWORK_SKILL_LIST}
          form={form}
          filter={filter}
        />
        <SkillRangeBar
          title="データベース技術"
          skillList={DATABASE_SKILL_LIST}
          form={form}
          filter={filter}
        />
        <SkillRangeBar
          title="サービス&ツール"
          skillList={TOOL_SKILL_LIST}
          form={form}
          filter={filter}
        />
        <Button
          className="mx-auto mt-4 w-full max-w-md"
          type="submit"
          isLoading={form.formState.isSubmitting}
        >
          更新
        </Button>
      </form>
    </Form>
  );
};
