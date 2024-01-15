import { getServerSession } from "next-auth/next";
import { SignInButton } from "@/components/layout/header/nav/SignInButton";
import { AvatarMenu } from "@/components/layout/header/nav/AvatarMenu";
import { SearchDialog } from "@/components/layout/header/nav/SearchDialog";

export const Nav = async () => {
  const session = await getServerSession();
  const isLogin = session?.user;
  return (
    <nav aria-labelledby="aria-global-nav">
      <ul className="flex items-center gap-2 font-bold">
        {isLogin ? (
          <>
            <li className="flex items-center">
              <SearchDialog />
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
