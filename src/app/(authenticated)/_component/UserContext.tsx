"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CustomSession } from "@/lib/nextAuthOption";
import { User } from "@/types/user";
type UserContext = {
  currentUser: { name: string; id: string; avatar: string } | null;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      id: string;
      avatar: string;
    } | null>
  >;
};
const UserContext = createContext<UserContext>({
  currentUser: null,
  setCurrentUser: () => {},
});

type CurrentUserProviderProps = {
  children: React.ReactNode;
};

export const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({
  children,
}) => {
  const { data } = useSession();
  const session = data as CustomSession;
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    id: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    if (session) {
      fetchUser();
    }
  }, [session]);

  const fetchUser = async () => {
    try {
      const res = await fetch(`/api/users/${session.user?.providerUserId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const fetchUser = (await res.json()) as User;
      setCurrentUser({
        name: fetchUser?.name ?? session.user?.name ?? "",
        id: session.user?.providerUserId ?? "",
        avatar: fetchUser?.avatar ?? session.user?.image ?? "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a CurrentUserProvider");
  }
  return context;
};
