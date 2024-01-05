"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/providers/ToastProvider";
import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";

type Props = {};

export const QuitDialog: React.FC<Props> = ({}) => {
  const [isShow, setIsShow] = useState(false);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, setCurrentUser } = useCurrentUser();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch(`/api/users/${currentUser?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast({
        title: "退会できました。",
        description: "今までご利用ありがとうございました。",
        type: "success",
      });
      await signOut({ callbackUrl: "/" });
      setCurrentUser(null);
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
      <DialogTrigger>
        <Button className="min-w-[120px]">退会</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>退会手続き</DialogTitle>
          <DialogDescription>
            <p className="text-base">
              退会すると、すべての情報が削除されます。
              <br />
              本当に退会しますか？
            </p>
            <div className="mt-4 flex gap-4">
              <Button
                className="min-w-[100px]"
                variant="outline"
                onClick={() => setIsShow(false)}
              >
                キャンセル
              </Button>
              <Button
                className="min-w-[100px]"
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                削除
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
