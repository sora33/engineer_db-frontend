import { MainTabsComp } from "@/components/layout/tabs/MainTabsComp";

export const MainTabs = async () => {
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
      link: `/mypage`,
      name: "MyPage",
    },
  ];

  return <MainTabsComp items={MainTabsItems} />;
};
