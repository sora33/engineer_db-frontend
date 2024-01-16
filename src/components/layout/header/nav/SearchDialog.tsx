"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { SearchForm } from "@/app/(authenticated)/engineers/(root)/_compoent/SearchForm";
import { SearchIcon } from "lucide-react";

type Props = {};
const buttonStyle =
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground";

export const SearchDialog: React.FC<Props> = ({}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
      <DialogTrigger className={`flex items-center p-2 ${buttonStyle}`}>
        <SearchIcon className="h-5 w-5 md:mr-2 " />
        <span className="hidden md:inline-block">エンジニアを探す</span>
      </DialogTrigger>
      <DialogContent className="min-h-[420px] md:min-h-[560px]">
        <SearchForm />
      </DialogContent>
    </Dialog>
  );
};
