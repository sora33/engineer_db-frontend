import { Meta, StoryObj } from "@storybook/react";
import { MainTabsComp } from "./MainTabsComp";

const meta = {
  title: "MainTabsComp",
  component: MainTabsComp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainTabsComp>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    items: [
      { link: "link1", name: "name1" },
      { link: "link2", name: "name2" },
      { link: "link3", name: "name3" },
    ],
  },
};
