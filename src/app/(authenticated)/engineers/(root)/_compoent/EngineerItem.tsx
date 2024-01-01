"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { User } from "@/types/user";
import { formatTimeAgo, calculateAge, formatBirthDate } from "@/lib/date";
import { WorkOptions, OccupationOptions } from "@/lib/ontions";
import { useRouter } from "next/navigation";

type Props = {
  user: User;
};

export const EngineerItem: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [isHobbyShow, setIsHobbyShow] = useState(false);
  const [isIntroductionShow, setIsIntroductionShow] = useState(false);

  return (
    <Card
      className="cursor-pointer hover:bg-slate-50"
      onClick={() => router.push(`/engineers/${user.id}`)}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${user?.avatar}`}
            />
            <AvatarFallback>{user?.name?.substring(0, 1) || ""}</AvatarFallback>
          </Avatar>
          <span>{user?.name}</span>
          <span className="text-muted-foreground ml-auto text-sm font-normal">
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
        <div className="text-sm">
          <p>
            {user.hobby ? (
              <>
                <span className="">趣味：</span>
                <span>
                  {isHobbyShow || user.hobby?.length <= 20
                    ? user.hobby
                    : `${user.hobby?.substring(0, 20)}`}
                  {!isHobbyShow && user.hobby?.length > 20 && (
                    <span
                      className="cursor-pointer text-orange-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsHobbyShow(true);
                      }}
                    >
                      [...]
                    </span>
                  )}
                </span>
              </>
            ) : (
              <span>趣味：未設定</span>
            )}
          </p>
          <p>
            {user.introduction ? (
              <>
                <span className="">自己紹介：</span>
                <span>
                  {isIntroductionShow || user.introduction?.length <= 20
                    ? user.introduction
                    : `${user.introduction?.substring(0, 20)}`}
                  {!isIntroductionShow && user.introduction?.length > 20 && (
                    <span
                      className="cursor-pointer text-orange-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsIntroductionShow(true);
                      }}
                    >
                      [...]
                    </span>
                  )}
                </span>
              </>
            ) : (
              <span>自己紹介：未設定</span>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
