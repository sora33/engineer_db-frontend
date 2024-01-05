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
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";

type Props = {
  isShowDialog: boolean;
  setIsShowDialog: (value: boolean) => void;
};

export const AvatarForm: React.FC<Props> = ({
  isShowDialog,
  setIsShowDialog,
}) => {
  const { setCurrentUser } = useCurrentUser();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const toast = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

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
    setIsLoading(true);
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    try {
      const res = await fetch("/api/avatars", {
        method: "PUT",
        body: formData,
      });
      const resData = await res.json();
      const resAvatar = resData.avatar;
      setCurrentUser((prev) => {
        if (prev) {
          return {
            ...prev,
            avatar: resAvatar ?? "",
          };
        }
        return null;
      });

      toast({ title: "更新できました。", type: "success" });
      setIsShowDialog(false);
      location.reload();
    } catch (error) {
      toast({ title: "エラーが発生しました", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="pb-2">アバター画像を変更</DialogTitle>
            <DialogDescription>
              <div className="grid gap-4">
                <Input
                  type="file"
                  accept="image/*"
                  className="cursor-pointer"
                  ref={inputRef}
                  onChange={handleFileChange}
                />
                <div>
                  {previewUrl && <img src={previewUrl} alt="プレビュー画像" />}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsShowDialog(false)}
                  >
                    キャンセル
                  </Button>
                  <Button isLoading={isLoading} onClick={handleSubmit}>
                    更新
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
