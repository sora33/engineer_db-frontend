"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { User } from "@/types/user";
import { formatTimeAgo, calculateAge, formatBirthDate } from "@/lib/date";
import { WorkOptions, OccupationOptions } from "@/lib/ontions";
import { useRouter } from "next/navigation";
import { Link } from "@/components/atoms";

type Props = {
  user: User;
};

export const EngineerItem: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [isHobbyShow, setIsHobbyShow] = useState(false);
  const [isIntroductionShow, setIsIntroductionShow] = useState(false);

  return (
    <Link href={`/engineers/${user.id}`}>
      <Card className="cursor-pointer hover:bg-slate-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={
                  user?.avatar
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user?.avatar}`
                    : ""
                }
              />
              <AvatarFallback>
                {user?.name?.substring(0, 1) || ""}
              </AvatarFallback>
            </Avatar>
            <span>{user?.name}</span>
            <span className="text-muted-foreground ml-auto text-xs">
              最終ログイン：{formatTimeAgo(user.lastSignInAt)}
            </span>
          </CardTitle>
          <CardDescription>
            {user?.birthday &&
              `${formatBirthDate(user?.birthday)}（${calculateAge(
                user?.birthday
              )}歳）｜`}
            {user?.location && `${user?.location}｜`}
            {user?.occupation &&
              OccupationOptions.find(
                (option) => option.value === user?.occupation
              )?.label + "｜"}
            {user?.work &&
              WorkOptions.find((option) => option.value === user?.work)?.label +
                "｜"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="pb-1">{user.comment}</p>
          <div className="text-xs">
            <p>
              {user.hobby ? (
                <>
                  <span className="font-bold text-slate-500">趣味：</span>
                  <span>
                    {isHobbyShow || user.hobby?.length <= 50
                      ? user.hobby
                      : `${user.hobby?.substring(0, 50)}`}
                    {!isHobbyShow && user.hobby?.length > 50 && (
                      <span className="">...</span>
                    )}
                  </span>
                </>
              ) : (
                <span></span>
              )}
            </p>
            <p>
              {user.introduction ? (
                <>
                  <span className="font-bold text-slate-500">自己紹介：</span>
                  <span>
                    {isIntroductionShow || user.introduction?.length <= 50
                      ? user.introduction
                      : `${user.introduction?.substring(0, 50)}`}
                    {!isIntroductionShow && user.introduction?.length > 50 && (
                      <span className="">...</span>
                    )}
                  </span>
                </>
              ) : (
                <span></span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
