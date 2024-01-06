import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};
export const date: Story = {
  args: {
    type: "date",
    placeholder: "Placeholder",
  },
};
