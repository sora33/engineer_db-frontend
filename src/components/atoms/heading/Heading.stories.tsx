import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./index";

const meta = {
  title: "Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    as: "h1",
    size: "sm",
    children: "This is a small text",
  },
};

export const Medium: Story = {
  args: {
    as: "h1",
    size: "md",
    children: "This is a medium text",
  },
};

export const Large: Story = {
  args: {
    as: "h1",
    size: "lg",
    children: "This is a large text",
  },
};
