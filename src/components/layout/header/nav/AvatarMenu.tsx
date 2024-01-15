"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@/components/layout/header/nav/SignOutButton";
import { UserIcon, UserCircle2, X, Settings } from "lucide-react";
import { AvatarForm } from "@/components/layout/header/nav/AvatarForm";
import { useState } from "react";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";
import { Link } from "@/components/atoms";

export const AvatarMenu = () => {
  const { currentUser } = useCurrentUser();
  const [isShowDialog, setIsShowDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={
                currentUser?.avatar
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${currentUser?.avatar}`
                  : ""
              }
            />
            <AvatarFallback>
              {currentUser?.name?.substring(0, 2) || ""}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{currentUser?.name ?? ""}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer py-0">
            <Link href="/mypage" className="flex py-2">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>マイページ</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="cursor-pointer">
              <div className="flex items-center py-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>設定</span>
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="cursor-pointer py-0">
                  <div
                    className="flex py-2"
                    onClick={() => setIsShowDialog(true)}
                  >
                    <UserCircle2 className="mr-2 h-4 w-4" />
                    <span>アバターを変更</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-0">
                  <Link href="/quit" className="flex py-2">
                    <X className="mr-2 h-4 w-4" />
                    <span>退会する</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer py-0">
            <SignOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AvatarForm
        isShowDialog={isShowDialog}
        setIsShowDialog={setIsShowDialog}
      />
    </>
  );
};
