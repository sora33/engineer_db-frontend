import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";

export const SignOutButton = () => {
  const hundleSignOut = () => {
    signOut({ callbackUrl: "/login?signOut=true" });
  };

  return (
    <div onClick={hundleSignOut} className="flex py-2">
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>ログアウト</span>
    </div>
  );
};
