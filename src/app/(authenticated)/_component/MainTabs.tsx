import { MainTabsComp } from "@/components/layout/tabs/MainTabsComp";
import { getServerSession } from "next-auth";
import { nextAuthOption, CustomSession } from "@/lib/nextAuthOption";

export const MainTabs = async () => {
  const session: CustomSession | null = await getServerSession(nextAuthOption);
  const id = session?.user?.providerUserId;
  const MainTabsItems = [
    {
      link: `/engineers`,
      name: "Engineers",
    },
    {
      link: `/posts`,
      name: "Posts",
    },
    {
      link: `/messages`,
      name: "Massages",
    },
    {
      link: `/engineers/${id}`,
      name: "MyPage",
    },
  ];

  return <MainTabsComp items={MainTabsItems} />;
};
