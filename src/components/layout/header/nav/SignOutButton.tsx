"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export const SignOutButton = () => {
  return (
    <Button
      variant="ghost"
      onClick={() => signOut()}
      className="w-full justify-start "
    >
      <LogOutIcon className="mr-2 h-4 w-4" />
      ログアウト
    </Button>
  );
};
