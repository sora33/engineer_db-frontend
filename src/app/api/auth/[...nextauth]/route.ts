import NextAuth from "next-auth";
import { nextAuthOption } from "@/lib/nextAuthOption";

const handler = NextAuth(nextAuthOption);

export { handler as GET, handler as POST };
