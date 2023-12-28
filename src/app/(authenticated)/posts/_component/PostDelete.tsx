"use client";
import "@/lib/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/providers/ToastProvider";
import { useState } from "react";

type Props = {
  isShowDialog: boolean;
  setIsShowDialog: (value: boolean) => void;
  onDeleted: () => void;
  postId: string;
};

export const PostDelete: React.FC<Props> = ({
  isShowDialog,
  setIsShowDialog,
  postId,
  onDeleted,
}) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsShowDialog(false);
      onDeleted();
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>本当に削除してよろしいですか？</DialogTitle>
          <DialogDescription>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => setIsShowDialog(false)}>
                キャンセル
              </Button>
              <Button
                isLoading={isLoading}
                variant="destructive"
                onClick={handleSubmit}
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
