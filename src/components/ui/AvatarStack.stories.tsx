import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { AvatarStack } from "./AvatarStack";

const meta = {
  title: "UI/AvatarStack",
  component: AvatarStack,
  args: {
    images: [
      "/images-updated/Image_14.png",
      "/images-updated/Image_15.png",
      "/images-updated/Image_16.png",
    ],
    size: 44,
  },
} satisfies Meta<typeof AvatarStack>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const TwoAvatars: Story = {
  args: {
    images: ["/images-updated/Image_14.png", "/images-updated/Image_15.png"],
    size: 52,
  },
};
export const RendersAllAvatars: Story = {
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelectorAll("img")).toHaveLength(3);
  },
};
