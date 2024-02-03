"use client";

import { Heading } from "@/components/atoms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomSelect } from "@/app/(authenticated)/engineers/(root)/_compoent/CustomSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  PurposeOptions,
  OccupationOptions,
  WorkOptions,
  GenderOptions,
  SKILL_FILTER_OPTION,
} from "@/lib/ontions";

export const FormSchema = z.object({
  gender: z.string().optional(),
  location: z.string().optional(),
  purpose: z.string().optional(),
  work: z.string().optional(),
  occupation: z.string().optional(),
  skill: z.string().optional(),
  skillLevel: z.string().optional(),
});

type Props = {};

export const SearchForm: React.FC<Props> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gender: searchParams.get("gender") || undefined,
      location: searchParams.get("location") || undefined,
      purpose: searchParams.get("purpose") || undefined,
      work: searchParams.get("work") || undefined,
      occupation: searchParams.get("occupation") || undefined,
      skill: searchParams.get("skill") || undefined,
      skillLevel: searchParams.get("skillLevel") || "1",
    },
  });

  // formの値を監視
  const { watch } = form;
  watch((data, { name, type }) => {
    onSubmit(data);
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const queryParams = Object.entries(data)
      .filter(([_, value]) => value !== undefined && value !== "undefined")
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
      .join("&");
    router.push(`/engineers?${queryParams}`);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Heading as="h2" size="sm">
            検索条件
          </Heading>
          <Tabs defaultValue="basic" className="">
            <TabsList>
              <TabsTrigger value="basic">基本情報</TabsTrigger>
              <TabsTrigger value="skill">スキル</TabsTrigger>
            </TabsList>
            <TabsContent
              value="basic"
              className="grid grid-cols-2 gap-2 md:grid-cols-1"
            >
              <CustomSelect
                control={form.control}
                name="gender"
                label="性別"
                options={GenderOptions}
              />
              <CustomSelect
                control={form.control}
                name="location"
                label="所在地"
              />
              <CustomSelect
                control={form.control}
                name="purpose"
                label="ご利用の目的"
                options={PurposeOptions}
              />
              <CustomSelect
                control={form.control}
                name="occupation"
                label="職種"
                options={OccupationOptions}
              />
              <CustomSelect
                control={form.control}
                name="work"
                label="働き方"
                options={WorkOptions}
              />
            </TabsContent>
            <TabsContent value="skill" className="grid gap-2">
              <CustomSelect
                control={form.control}
                name="skill"
                label="スキル種別"
                options={GenderOptions}
              />
              <CustomSelect
                control={form.control}
                name="skillLevel"
                label="スキルレベル"
                options={SKILL_FILTER_OPTION}
              />
            </TabsContent>
          </Tabs>
          <Button className="">検索</Button>
        </form>
      </Form>
    </>
  );
};
