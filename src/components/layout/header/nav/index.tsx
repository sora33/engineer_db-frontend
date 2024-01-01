import { getServerSession } from "next-auth/next";
import { SignInButton } from "@/components/layout/header/nav/SignInButton";
import { AvatarMenu } from "@/components/layout/header/nav/AvatarMenu";
import { BellIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Nav = async () => {
  const session = await getServerSession();
  const isLogin = session?.user;
  return (
    <nav aria-labelledby="aria-global-nav">
      <ul className="flex items-center gap-2 font-bold">
        {isLogin ? (
          <>
            <li className="flex items-center">
              <Button variant="ghost" className="px-2">
                <Link href="/engineers" className="flex items-center">
                  <SearchIcon className="mr-2 h-5 w-5" />
                  <span className="hidden md:inline-block">
                    エンジニアを探す
                  </span>
                </Link>
              </Button>
            </li>
            {/* <li className="flex items-center">
              <Button variant="ghost" className="px-2">
                <Link href="/notification">
                  <BellIcon className="h-5 w-5" />
                </Link>
              </Button>
            </li> */}
            <li className="ml-4 mt-1 flex items-center">
              <AvatarMenu />
            </li>
          </>
        ) : (
          <li className="flex items-center">
            <SignInButton />
          </li>
        )}
      </ul>
    </nav>
  );
};
