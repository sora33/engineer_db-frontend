"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  nullCount: number;
};

export const ProfileDialog: React.FC<Props> = ({ nullCount }) => {
  const isManyNull = nullCount >= 6;

  const [isShow, setIsShow] = useState(isManyNull);
  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>プロフィールを登録しましょう！</DialogTitle>
          <DialogDescription>
            「えんじにあDB」は、お互いのプロフィール情報が豊富な方が、より活発で楽しいコミュニティになると考えています。
            <br />
            プロフィール情報を充実させて、より多くの出会いに繋げましょう！
            <br />
            <br />
            <b>未登録の項目：{nullCount}個</b>
          </DialogDescription>
        </DialogHeader>
        <Button onClick={() => setIsShow(false)}>プロフィールを登録する</Button>
      </DialogContent>
    </Dialog>
  );
};
