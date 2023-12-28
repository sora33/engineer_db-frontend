import { SecondTabsComp } from "@/components/layout/tabs/SecondTabsComp";
import { getServerSession } from "next-auth";
import { nextAuthOption, CustomSession } from "@/lib/nextAuthOption";

export const UserTabs = async () => {
  const session: CustomSession | null = await getServerSession(nextAuthOption);
  const id = session?.user?.providerUserId;
  const UserTabsItems = [
    {
      link: `/engineers/${id}`,
      name: "Profile",
    },
    {
      link: `/engineers/${id}/skill`,
      name: "Skill",
    },
    {
      link: `/engineers/${id}/post`,
      name: "Post",
    },
  ];

  return <SecondTabsComp items={UserTabsItems} />;
};
