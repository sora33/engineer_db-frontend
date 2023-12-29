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
  gender: z.string().max(25).optional(),
  experience: z.string().max(25).optional(),
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

const GenderOptions = [
  { label: "男性", value: "male" },
  { label: "女性", value: "female" },
  { label: "その他", value: "other" },
];
const ExperienceOptions = [
  { label: "1年", value: "1" },
  { label: "2年", value: "2" },
  { label: "3年", value: "3" },
  { label: "4年", value: "4" },
  { label: "5年", value: "5" },
  { label: "6年", value: "6" },
  { label: "7年", value: "7" },
  { label: "8年", value: "8" },
  { label: "9年", value: "9" },
  { label: "10年", value: "10" },
  { label: "11年", value: "11" },
  { label: "12年", value: "12" },
  { label: "13年", value: "13" },
  { label: "14年", value: "14" },
  { label: "15年", value: "15" },
  { label: "16年", value: "16" },
  { label: "17年", value: "17" },
  { label: "18年", value: "18" },
  { label: "19年", value: "19" },
  { label: "20年", value: "20" },
  { label: "21年", value: "21" },
  { label: "22年", value: "22" },
  { label: "23年", value: "23" },
  { label: "24年", value: "24" },
  { label: "25年", value: "25" },
  { label: "26年", value: "26" },
  { label: "27年", value: "27" },
  { label: "28年", value: "28" },
  { label: "29年", value: "29" },
  { label: "30年", value: "30" },
  { label: "31年", value: "31" },
  { label: "32年", value: "32" },
  { label: "33年", value: "33" },
  { label: "34年", value: "34" },
  { label: "35年", value: "35" },
  { label: "36年", value: "36" },
  { label: "37年", value: "37" },
  { label: "38年", value: "38" },
  { label: "39年", value: "39" },
  { label: "40年", value: "40" },
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
      gender: user.gender ?? undefined,
      experience: user?.experience?.toString() ?? undefined,
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
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ご経験年数</FormLabel>
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
                    {ExperienceOptions.map((option) => (
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
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>性別</FormLabel>
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
                    {GenderOptions.map((option) => (
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
