"use client";
import { FormSchema } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { Control } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  PrefectureOptions,
  PROJECT_SKILL_LIST,
  SOFTWHERE_SKILL_LIST,
  PROGRAMMING_SKILL_LIST,
  FRAMEWORK_SKILL_LIST,
  DATABASE_SKILL_LIST,
  TOOL_SKILL_LIST,
} from "@/lib/ontions";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  control: Control<z.infer<typeof FormSchema>>;
  name:
    | "gender"
    | "location"
    | "purpose"
    | "work"
    | "occupation"
    | "skill"
    | "skillLevel";
  label: string;
  options?: Option[];
};

const SKILL_LIST = [
  { name: "プロジェクト管理", options: PROJECT_SKILL_LIST },
  { name: "ソフトウェア開発", options: SOFTWHERE_SKILL_LIST },
  { name: "プログラミング言語", options: PROGRAMMING_SKILL_LIST },
  { name: "フレームワーク&ライブラリ", options: FRAMEWORK_SKILL_LIST },
  { name: "データベース技術", options: DATABASE_SKILL_LIST },
  { name: "サービス&ツール", options: TOOL_SKILL_LIST },
];

export const CustomSelect: React.FC<CustomSelectProps> = ({
  control,
  name,
  label,
  options,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="w-auto">
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="未選択" />
            </SelectTrigger>
          </FormControl>
          {name === "location" ? (
            <SelectContent>
              <SelectItem key={undefined} value={"undefined"}>
                未選択
              </SelectItem>
              {PrefectureOptions.map((prefecture) => (
                <SelectGroup key={prefecture.name}>
                  <SelectLabel>{prefecture.name}</SelectLabel>
                  {prefecture.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          ) : name === "skill" ? (
            <SelectContent>
              <SelectItem key={undefined} value={"undefined"}>
                未選択
              </SelectItem>
              {SKILL_LIST.map((skill) => (
                <SelectGroup key={skill.name}>
                  <SelectLabel>{skill.name}</SelectLabel>
                  {skill.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          ) : (
            <SelectContent>
              <SelectItem key={undefined} value={"undefined"}>
                未選択
              </SelectItem>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);
