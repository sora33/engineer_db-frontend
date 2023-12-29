import { SecondTabsComp } from "@/components/layout/tabs/SecondTabsComp";

export const UserTabs = async () => {
  const UserTabsItems = [
    {
      link: `/mypage`,
      name: "Profile",
    },
    {
      link: `/mypage/skill`,
      name: "Skill",
    },
    {
      link: `/mypage/post`,
      name: "Post",
    },
  ];

  return <SecondTabsComp items={UserTabsItems} />;
};
