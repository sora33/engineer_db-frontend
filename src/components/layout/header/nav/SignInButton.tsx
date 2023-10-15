"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export const SignInButton = () => {
  return (
    <Button className="bg-black hover:bg-black/80" onClick={() => signIn()}>
      <GithubIcon className="mr-2 h-5 w-5 rounded-full bg-white p-[1px] text-black" />
      Githubでログイン
    </Button>
  );
};
