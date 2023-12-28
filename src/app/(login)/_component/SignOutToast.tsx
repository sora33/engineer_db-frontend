"use client";
import { useEffect } from "react";
import { useToast } from "@/providers/ToastProvider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const SignOutToast = () => {
  const toast = useToast();
  const router = useRouter();
  const isSignOut = useSearchParams().get("signOut");

  useEffect(() => {
    if (isSignOut === "true") {
      toast({
        type: "success",
        title: "ログアウトしました",
      });
      router.replace("/");
    }
  }, [toast, isSignOut, router]);
  return null;
};
