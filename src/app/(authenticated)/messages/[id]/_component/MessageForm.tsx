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
import { useParams } from "next/navigation";
import { Message } from "@/types/message";
const FormSchema = z.object({
  content: z.string().max(400),
});

type Props = {
  setFormInput: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const MessageForm: React.FC<Props> = ({ setFormInput }) => {
  const toast = useToast();
  const { id } = useParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const res = await fetch(`/api/users/${id}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resBody: Message = await res.json();
      setFormInput((prev) => [...prev, resBody]);
      form.setValue("content", "");
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="はじめまして、" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
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
    </>
  );
};
