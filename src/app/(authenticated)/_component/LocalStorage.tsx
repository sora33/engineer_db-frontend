"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { CustomSession } from "@/lib/nextAuthOption";

export const LocalStorage = () => {
  const { data } = useSession();
  const session = data as CustomSession;

  useEffect(() => {
    if (session) {
      if (localStorage.getItem("userName")) {
        localStorage.setItem("userName", session?.user?.name ?? "");
      }
      if (localStorage.getItem("userId")) {
        localStorage.setItem("userId", session?.user?.providerUserId ?? "");
      }
      if (localStorage.getItem("userAvatar")) {
        fetchUserAvatar();
      }
    }
  }, [session]);

  const fetchUserAvatar = async () => {
    try {
      const res = await fetch(`/api/users/${localStorage.getItem("userId")}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      localStorage.setItem("userAvatar", data.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};
