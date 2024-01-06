// hooks/useAuthToken.ts
import { cookies } from "next/headers";

export function useAuthToken() {
  const secureCookie =
    process.env.NEXTAUTH_URL?.startsWith("https://") ?? !!process.env.VERCEL;
  const cookieName = secureCookie
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";
  const token = cookies().get(cookieName)?.value;

  return token;
}
