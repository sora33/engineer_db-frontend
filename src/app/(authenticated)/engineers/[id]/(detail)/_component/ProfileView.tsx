"use client";

import { User } from "@/types/user";
import { formatDate } from "@/lib/date";
import {
  PurposeOptions,
  OccupationOptions,
  WorkOptions,
  GenderOptions,
  ExperienceOptions,
  PrefectureOptions,
} from "@/lib/ontions";
import { Link, Span } from "@/components/atoms";
import { formatContent, componentDecorator } from "@/lib/content";
import Linkify from "react-linkify";

type Props = {
  user: User;
};

export const ProfileView: React.FC<Props> = ({ user }) => {
  const ProfileList = [
    {
      label: "ユーザー名",
      value: user.name ? (
        <span>{user.name}</span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "生年月日",
      value: user.birthday ? (
        <span>{formatDate(user.birthday)}</span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "所在地",
      value: user.location ? (
        <span>{user.location}</span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "ウェブサイト（SNSなど）",
      value: user.website ? (
        <Link
          className="text-orange-500 hover:underline"
          href={user.website}
          target="_blank"
        >
          {user.website}
        </Link>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "ご経験年数",
      value: user.experience ? (
        <span>{user.experience}</span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "性別",
      value: user.gender ? (
        <span>
          {GenderOptions.find((option) => option.value === user.gender)?.label}
        </span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "ご利用の目的",
      value: user.purpose ? (
        <span>
          {
            PurposeOptions.find((option) => option.value === user.purpose)
              ?.label
          }
        </span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "ひとことコメント",
      value: user.comment ? (
        <span>{user.comment}</span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "職種",
      value: user.occupation ? (
        <span>
          {
            OccupationOptions.find((option) => option.value === user.occupation)
              ?.label
          }
        </span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "働き方",
      value: user.work ? (
        <span>
          {WorkOptions.find((option) => option.value === user.work)?.label}
        </span>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "趣味",
      value: user.hobby ? (
        <Linkify componentDecorator={componentDecorator}>
          {formatContent(user.hobby)}
        </Linkify>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
    {
      label: "自己紹介",
      value: user.introduction ? (
        <Linkify componentDecorator={componentDecorator}>
          {formatContent(user.introduction)}
        </Linkify>
      ) : (
        <span className="text-slate-500">未設定</span>
      ),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {ProfileList.map((item, index) => (
        <div key={index}>
          <p className="text-xs font-bold text-slate-500">{item.label}</p>
          <div className="postContent rounded bg-white p-2 text-sm">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};
