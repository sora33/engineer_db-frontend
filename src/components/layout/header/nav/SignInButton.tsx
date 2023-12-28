"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <Button onClick={() => signIn("github", { callbackUrl: "/engineers" })}>
      Githubでログインする
    </Button>
  );
};
