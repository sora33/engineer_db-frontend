"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types/user";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "@/lib/zod";
import { formatDate } from "@/lib/date";
import { useToast } from "@/providers/ToastProvider";

const FormSchema = z.object({
  name: z.string(),
  birthday: z.string().optional(),
  location: z.string().max(25).optional(),
  website: z.string().url("有効なURLを入力してください").max(200).optional(),
  purpose: z.string().max(25).optional(),
  comment: z.string().max(25).optional(),
  work: z.string().max(25).optional(),
  occupation: z.string().max(25).optional(),
  hobby: z.string().max(600).optional(),
  introduction: z.string().max(600).optional(),
});

const PurposeOptions = [
  { label: "一緒に開発をする人を見つけたい", value: "partner" },
  { label: "仕事を探している", value: "work" },
  { label: "趣味・プライベートの友達を見つけたい", value: "hobby" },
  { label: "その他", value: "other" },
];
const OccupationOptions = [
  { label: "エンジニア", value: "engineer" },
  { label: "プロジェクトマネージャー", value: "projectManager" },
  { label: "コンサルタント", value: "consultant" },
  { label: "デザイナー", value: "designer" },
  { label: "データアナリスト", value: "dataAnalyst" },
  { label: "CTO・技術顧問", value: "cto" },
  { label: "人事・人材担当者", value: "HumanResources" },
  { label: "その他", value: "other" },
];

const WorkOptions = [
  { label: "正社員", value: "fullTime" },
  { label: "フリーランス", value: "freelancer" },
  { label: "経営者", value: "businessOwner" },
  { label: "学生", value: "student" },
  { label: "その他", value: "other" },
];

type Props = {
  user: User;
};

export const ProfileForm: React.FC<Props> = ({ user }) => {
  console.log(user);
  const toast = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: user.name ?? "",
      birthday: user.birthday ? formatDate(user.birthday) : undefined,
      location: user.location ?? undefined,
      website: user.website ?? undefined,
      work: user.work ?? undefined,
      occupation: user.occupation ?? undefined,
      purpose: user.purpose ?? undefined,
      comment: user.comment ?? undefined,
      hobby: user.hobby ?? undefined,
      introduction: user.introduction ?? undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    try {
      await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id, user: data }),
      });
      toast({ title: "更新できました。", type: "success" });
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザー名</FormLabel>
                <FormControl>
                  <Input placeholder="たろう" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>生年月日</FormLabel>
                <FormControl>
                  <Input
                    placeholder="東京都渋谷区代々木"
                    type="date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>所在地</FormLabel>
                <FormControl>
                  <Input placeholder="東京都渋谷区代々木" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ウェブサイト（SNSなど）</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ご利用の目的</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="未選択" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PurposeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ひとことコメント</FormLabel>
                <FormControl>
                  <Input
                    placeholder="探している人、仕事をひとことで！"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="work"
            render={({ field }) => (
              <FormItem>
                <FormLabel>職種</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="未選択" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OccupationOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>働き方</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="未選択" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {WorkOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="hobby"
          render={({ field }) => (
            <FormItem>
              <FormLabel>趣味</FormLabel>
              <FormControl>
                <Textarea placeholder="読書" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="introduction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>自己紹介</FormLabel>
              <FormControl>
                <Textarea placeholder="こんにちは" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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
