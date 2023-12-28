import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { customAxios } from "@/lib/customAxios";
import { User, Session } from "next-auth";

export type CustomUser = User & {
  providerUserId: string;
};
export type CustomSession = Session & {
  user?: CustomUser;
};

export const nextAuthOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          id: user.id,
          provider: account.provider,
          providerUserId: user.id,
          name: user.name,
          image: user.image,
          providerUserImage: user.image,
          accessToken: account.accessToken,
          accessTokenExpires: account.accessTokenExpires,
          refreshToken: account.refresh_token,
        };
      }

      return token;
    },

    async session({ session, token, user }) {
      session.user = token as unknown as CustomUser;
      return { ...session, ...token, ...user };
    },

    async signIn({ user, account }) {
      const provider = account?.provider;
      const providerId = user?.id;
      const name = user?.name;
      try {
        const res = await customAxios.post(`/api/v1/users`, {
          provider,
          providerId,
          name,
        });
        if (res.status === 200) {
          user.name = res.data?.name;
          user.id = res.data?.id;
          user.image = res.data?.avatar;
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log("エラー", error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
