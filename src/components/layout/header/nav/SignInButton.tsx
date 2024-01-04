"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <Button
      className="bg-[#333] text-white hover:bg-[#444]"
      onClick={() => signIn("github", { callbackUrl: "/mypage" })}
    >
      Github ログイン
    </Button>
  );
};
