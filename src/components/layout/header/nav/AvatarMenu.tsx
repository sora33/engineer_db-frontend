import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignOutButton } from "@/components/layout/header/nav/SignOutButton";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { nextAuthOption } from "@/lib/nextAuthOption";

export const AvatarMenu = async () => {
  const session = await getServerSession(nextAuthOption);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={session?.user?.image ?? ""} />
          <AvatarFallback>
            {session?.user?.name?.substring(0, 2) || ""}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mr-4 max-w-[15rem]">
        <ul className="grid gap-2">
          <li>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/profile">
                <UserIcon className="mr-2 h-4 w-4" />
                マイページ
              </Link>
            </Button>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
