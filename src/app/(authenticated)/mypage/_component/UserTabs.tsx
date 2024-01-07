"use client";
import { SecondTabsComp } from "@/components/layout/tabs/SecondTabsComp";
import { useParams } from "next/navigation";
import { useCurrentUser } from "@/app/(authenticated)/_component/UserContext";

type Props = {
  variant?: "mypage" | "engineer";
};

export const UserTabs: React.FC<Props> = ({ variant = "mypage" }) => {
  const { id } = useParams();
  const { currentUser } = useCurrentUser();
  const isMyPage = currentUser?.id == id;

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

  if (variant === "engineer" && !isMyPage) {
    UserTabsItems.push({
      link: `/messages/${id}`,
      name: "Message",
    });
  }

  return <SecondTabsComp items={UserTabsItems} />;
};
