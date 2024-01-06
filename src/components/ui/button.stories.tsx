import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { within, userEvent } from "@storybook/testing-library";
import { jest, expect } from "@storybook/jest";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "デフォルト",
    variant: "default",
    size: "default",
    onClick: jest.fn(),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("ボタンにデフォルトの文字列が表示されている", async () => {
      await expect(canvas.getByText("デフォルト")).toBeInTheDocument();
    });

    await step(
      "ボタンがクリックされたときにonClickが呼び出される",
      async () => {
        await userEvent.click(canvas.getByText("デフォルト"));
        if (Default.args) {
          await expect(Default.args.onClick).toHaveBeenCalled();
        }
      }
    );
  },
};

export const SmallDestructive: Story = {
  args: {
    children: "小さな破壊的なボタン",
    variant: "destructive",
    size: "sm",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "ボタンに小さな破壊的なボタンの文字列が表示されている",
      async () => {
        await expect(
          canvas.getByText("小さな破壊的なボタン")
        ).toBeInTheDocument();
      }
    );
  },
};

export const LargeLoading: Story = {
  args: {
    children: "大きなローディングボタン",
    variant: "default",
    size: "lg",
    isLoading: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step(
      "ボタンに大きなローディングボタンの文字列が表示されている",
      async () => {
        await expect(
          canvas.getByText("大きなローディングボタン")
        ).toBeInTheDocument();
      }
    );

    await step("isLoadingがtrueのときにローダーが表示される", async () => {
      await expect(canvas.getByRole("progressbar")).toBeInTheDocument();
    });
  },
};
