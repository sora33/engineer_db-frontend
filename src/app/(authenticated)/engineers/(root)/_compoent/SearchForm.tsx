"use client";

import { Heading, Loading } from "@/components/atoms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EngineerList } from "@/app/(authenticated)/engineers/(root)/_compoent/EngineerList";
import { useState } from "react";
import { CustomSelect } from "@/app/(authenticated)/engineers/(root)/_compoent/CustomSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchPagination } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchPagination";
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

type Props = {
  users: User[];
  totalCount: number;
};

export const SearchForm: React.FC<Props> = ({ users, totalCount }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const [isSerchFormShow, setIsSerchFormShow] = useState(true);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gender: searchParams.get("gender") || undefined,
      location: searchParams.get("location") || undefined,
      purpose: searchParams.get("purpose") || undefined,
      work: searchParams.get("work") || undefined,
      occupation: searchParams.get("occupation") || undefined,
      skill: searchParams.get("skill") || undefined,
      skillLevel: searchParams.get("skillLevel") || undefined,
    },
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
      <div>
        <button
          className="cursor-pointer text-sm text-orange-500 hover:underline"
          onClick={() => setIsSerchFormShow((prev) => !prev)}
        >
          {isSerchFormShow ? "検索条件を隠す" : "検索条件を表示"}
        </button>
      </div>
      <section className="grid items-start gap-4 md:flex">
        <Form {...form}>
          {isSerchFormShow && (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-4 rounded p-4 shadow md:sticky md:top-16 md:w-96"
            >
              <Heading as="h2" size="sm">
                検索条件
              </Heading>
              <Tabs defaultValue="basic" className="w-[400px]">
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
              <Button className="w-80">検索</Button>
            </form>
          )}
        </Form>
        <div className="flex-1">
          {users ? (
            users.length > 0 ? (
              <>
                <EngineerList users={users} />
                <div className="mt-4">
                  <SearchPagination
                    totalCount={totalCount}
                    currentPage={currentPage}
                  />
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500">
                0件でした。条件を変えて再度検索してください。
              </p>
            )
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
  );
};
