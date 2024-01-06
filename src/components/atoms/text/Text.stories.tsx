import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index";

const meta = {
  title: "Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
    children: "This is a small text",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "This is a medium text",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "This is a large text",
  },
};
