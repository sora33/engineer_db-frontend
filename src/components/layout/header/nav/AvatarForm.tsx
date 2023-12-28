"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { useToast } from "@/providers/ToastProvider";
import imageCompression from "browser-image-compression";

type Props = {
  isShowDialog: boolean;
  setIsShowDialog: (value: boolean) => void;
};

export const AvatarForm: React.FC<Props> = ({
  isShowDialog,
  setIsShowDialog,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const toast = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const options = {
        maxSizeMB: 1, // 最大ファイルサイズ
        maxWidthOrHeight: 100, // 最大画像幅または高さ
        minWidthOrHeight: 50, // 最小画像幅または高さ
        // initialQuality: 0.85,
        useWebWorker: true, // Web Workerを使用して非同期処理を行う
      };

      try {
        const compressedFile = await imageCompression(file, options);
        setSelectedFile(compressedFile);
      } catch (error) {
        toast({
          title: "画像の取り込みでエラーが発生しました",
          type: "error",
        });
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast({ title: "画像を選択してください。", type: "error" });
      return;
    }
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    try {
      const res = await fetch("/api/avatars", {
        method: "PUT",
        body: formData,
      });
      const resData = await res.json();
      const resAvatar = resData.avatar;
      localStorage.setItem("userAvatar", resAvatar ?? "");
      toast({ title: "更新できました。", type: "success" });
      setIsShowDialog(false);
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    }
  };

  return (
    <>
      <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>アバター画像を変更</DialogTitle>
            <DialogDescription>
              <div className="grid gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  className="cursor-pointer"
                  ref={inputRef}
                  onChange={handleFileChange}
                />
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsShowDialog(false)}
                  >
                    キャンセル
                  </Button>
                  <Button onClick={handleSubmit}>更新</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};