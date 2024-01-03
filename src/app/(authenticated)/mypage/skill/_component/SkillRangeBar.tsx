"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import "@/lib/zod";
import { Heading } from "@/components/atoms";
import { FormSchemaType } from "@/app/(authenticated)/mypage/skill/_component/SkillForm";
import { UseFormReturn } from "react-hook-form";

type Props = {
  title: string;
  skillList: { label: string; value: string }[];
  filter: string;
  form: UseFormReturn<FormSchemaType>;
  isView?: boolean;
};

export const SkillRangeBar: React.FC<Props> = ({
  title,
  skillList,
  form,
  filter,
  isView = false,
}) => {
  const filterNumber = Number(filter);
  const filteredSkillList =
    filterNumber === 0
      ? skillList
      : skillList.filter(
          (skill) =>
            Number(form.watch(skill.value as keyof FormSchemaType) || 0) >=
            filterNumber
        );
  const isEnpty = filteredSkillList.length === 0;
  if (isEnpty) {
    return null;
  }

  return (
    <section>
      <Heading as="h2">{title}</Heading>
      <div className="relative overflow-x-auto md:rounded-lg md:p-4 md:shadow-md">
        <div className="flex py-2 text-xs font-bold text-slate-600 sm:text-sm">
          <div className="flex w-full justify-between pr-4">
            {["未経験", "", "", "Lv.3", "", "Lv.5", "", "Lv.7"].map(
              (value, i) => (
                <p key={i} className="">
                  {value}
                </p>
              )
            )}
          </div>
        </div>
        {filteredSkillList.map((skill, index) => (
          <FormField
            key={skill.value}
            control={form.control}
            name={skill.value as keyof FormSchemaType}
            render={({ field }) => (
              <FormItem
                className={`flex items-center space-y-0 py-4 pr-4 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <FormLabel className="flex w-48 justify-between pl-4 text-xs sm:w-60 sm:text-sm">
                  <span>{skill.label}</span>
                  <span className="mr-1 md:mr-2">
                    {Number(form.watch(skill.value as keyof FormSchemaType)) ||
                      "未"}
                  </span>
                </FormLabel>
                <FormControl>
                  <input
                    type="range"
                    min={0}
                    max={7}
                    step={1}
                    {...field}
                    className={`range-sm mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-orange-500 disabled:accent-orange-500 dark:bg-gray-700 ${
                      isView ? "pointer-events-none" : ""
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </section>
  );
};
