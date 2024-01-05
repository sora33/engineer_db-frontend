"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import "@/lib/zod";
import { useToast } from "@/providers/ToastProvider";
import { useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import rehypeSanitize from "rehype-sanitize";
import { getCommands } from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const allCommands = getCommands();
const customCommands = allCommands.filter(
  (command) => command.name !== "image"
);
const FormSchema = z.object({
  content: z.string().min(2).max(400),
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
      {isShowDisplay ? (
        <div className="grid max-w-full gap-4 text-sm">
          <MDEditor
            value={form.watch("content") || ""}
            preview="edit"
            onChange={(val) => {
              form.setValue("content", val || "");
            }}
            textareaProps={{
              placeholder:
                "## 〇〇な人を募集しています〜！\n### 詳細\n来月から開発します。〇〇できる人、こちらから連絡してください！\n",
            }}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
            commands={customCommands}
          />
          {form.formState.errors.content && (
            <p className="text-sm text-red-500">
              {form.formState.errors.content.message}
            </p>
          )}
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
              onClick={form.handleSubmit(onSubmit)}
            >
              投稿
            </Button>
          </div>
        </div>
      ) : (
        <button
          className="fixed bottom-12 right-4 z-50 cursor-pointer rounded-full bg-teal-500/90 px-4 py-3 text-sm text-white transition-all hover:bg-teal-600/100 md:sticky md:top-14 md:py-2"
          onClick={hundleClick}
        >
          投稿フォームを開く
        </button>
      )}
    </>
  );
};
