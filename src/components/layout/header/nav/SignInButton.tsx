"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const SignInButton = () => {
  return (
    <Button
      className="bg-[#333] p-2 text-xs text-white hover:bg-[#444] md:text-sm"
      onClick={() => signIn("github", { callbackUrl: "/mypage" })}
    >
      <Image
        src="/img/github-mark-white.png"
        alt=""
        height={16}
        width={16}
        className="mr-2"
      />
      Githubでログイン
    </Button>
  );
};
