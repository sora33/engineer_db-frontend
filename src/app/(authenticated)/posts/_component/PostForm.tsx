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
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import "@/lib/zod";
import { useToast } from "@/providers/ToastProvider";
import { useState } from "react";

const FormSchema = z.object({
  content: z.string().max(400),
});

type Props = {
  hundleSubmit: () => void;
};

export const PostForm: React.FC<Props> = ({ hundleSubmit }) => {
  const toast = useToast();
  const [isShowDisplay, setIsShowDisplay] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast({ title: "更新できました。", type: "success" });
      form.setValue("content", "");
      hundleSubmit();
      setIsShowDisplay(false);
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    }
  };

  const hundleClick = () => {
    if (!isShowDisplay) {
      window.scrollTo(0, 0);
    }
    setIsShowDisplay((prev) => !prev);
  };
  return (
    <>
      <span
        className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full bg-teal-500/90 px-4 py-2 text-sm text-white transition-all hover:bg-teal-600/100
          md:bottom-8 md:right-8 xl:bottom-20 xl:right-20"
        onClick={hundleClick}
      >
        {isShowDisplay ? "投稿を閉じる" : "投稿フォーム"}
      </span>
      {isShowDisplay && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="〇〇な人を募集しています〜！〇〇をリリースします〜！！https://example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                className="mr-4 w-[120px]"
                variant="outline"
                onClick={() => setIsShowDisplay(false)}
              >
                閉じる
              </Button>
              <Button
                className="w-[120px]"
                type="submit"
                isLoading={form.formState.isSubmitting}
              >
                投稿
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};
