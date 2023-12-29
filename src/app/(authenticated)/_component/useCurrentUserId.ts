import { getServerSession } from "next-auth";
import { nextAuthOption, CustomSession } from "@/lib/nextAuthOption";

export const useCurrentUserId = async () => {
  const session: CustomSession | null = await getServerSession(nextAuthOption);
  const currentUserId = session?.user?.providerUserId;
  return currentUserId;
};
