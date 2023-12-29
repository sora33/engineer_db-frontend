"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@/components/layout/header/nav/SignOutButton";
import { UserIcon, UserCircle2, X } from "lucide-react";
import { AvatarForm } from "@/components/layout/header/nav/AvatarForm";
import { useState, useEffect } from "react";

export const AvatarMenu = () => {
  const router = useRouter();
  const [isShowDialog, setIsShowDialog] = useState(false);

  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setAvatar(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${localStorage.getItem(
        "userAvatar"
      )}`
    );
    setUserName(localStorage.getItem("userName") ?? "");
    setUserId(localStorage.getItem("userId") ?? "");
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
            <AvatarImage src={avatar} />
            <AvatarFallback>{userName?.substring(0, 2) || ""}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer py-0">
            <div
              className="flex py-2"
              onClick={() => router.push(`/engineers/${userId}`)}
            >
              <UserIcon className="mr-2 h-4 w-4" />
              <span>マイページ</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-0">
            <div className="flex py-2" onClick={() => setIsShowDialog(true)}>
              <UserCircle2 className="mr-2 h-4 w-4" />
              <span>アバターを変更</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-0">
            <div className="flex py-2" onClick={() => router.push(`/quit`)}>
              <X className="mr-2 h-4 w-4" />
              <span>退会する</span>
            </div>
          </DropdownMenuItem>
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
