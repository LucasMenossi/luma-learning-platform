import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { Header } from "./Header";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};

export const MobileMenuInteraction: Story = {
  globals: { viewport: { value: "mobile1", isRotated: false } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole("button", {
      name: "Open navigation menu",
    });

    await expect(openButton).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(openButton);

    const closeButton = canvas.getByRole("button", {
      name: "Close navigation menu",
    });
    await expect(closeButton).toHaveAttribute("aria-expanded", "true");

    const mobileNav = canvas.getByRole("navigation", {
      name: "Mobile navigation",
    });
    await expect(
      within(mobileNav).getByRole("link", { name: "Courses" }),
    ).toBeVisible();

    // Close the menu through its toggle. Do not click an anchor here:
    // href="#courses" would navigate the Storybook iframe away from the story.
    await userEvent.click(closeButton);
    await expect(
      canvas.getByRole("button", { name: "Open navigation menu" }),
    ).toHaveAttribute("aria-expanded", "false");
    await expect(
      canvas.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
  },
};
