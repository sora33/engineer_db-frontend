import { Meta, StoryObj } from "@storybook/react";
import { Description } from "./Description";

const meta = {
  title: "Description",
  component: Description,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Description>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "This is a small text",
  },
};
