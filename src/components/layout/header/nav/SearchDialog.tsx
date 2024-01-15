"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchForm } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { SearchIcon } from "lucide-react";

type Props = {};

export const SearchDialog: React.FC<Props> = ({}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
      <DialogTrigger>
        <Button variant="ghost" className="flex items-center px-2">
          <SearchIcon className="mr-2 h-5 w-5" />
          <span className="hidden md:inline-block">エンジニアを探す</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="min-h-[420px] md:min-h-[560px]">
        <SearchForm />
      </DialogContent>
    </Dialog>
  );
};
