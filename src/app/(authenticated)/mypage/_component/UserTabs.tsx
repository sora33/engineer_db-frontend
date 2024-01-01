"use client";
import { SecondTabsComp } from "@/components/layout/tabs/SecondTabsComp";
import { useParams } from "next/navigation";

type Props = {
  variant?: "mypage" | "engineer";
};

export const UserTabs: React.FC<Props> = ({ variant = "mypage" }) => {
  const { id } = useParams();
  let path;
  if (variant === "engineer") {
    path = `/engineers/${id}`;
  } else {
    path = "/mypage";
  }

  const UserTabsItems = [
    {
      link: `${path}`,
      name: "Profile",
    },
    {
      link: `${path}/skill`,
      name: "Skill",
    },
    {
      link: `${path}/post`,
      name: "Post",
    },
  ];

  return <SecondTabsComp items={UserTabsItems} />;
};
