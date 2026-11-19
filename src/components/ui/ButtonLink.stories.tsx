import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { ButtonLink } from "./ButtonLink";

const meta = {
  title: "UI/ButtonLink",
  component: ButtonLink,
  args: {
    href: "#courses",
    children: "Start learning",
    className: "min-h-11 px-5 text-[14px] leading-5",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "light", "outline"],
    },
  },
} satisfies Meta<typeof ButtonLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "primary" } };
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <ButtonLink href="#" variant="primary" className="min-h-11 px-5 text-[14px] leading-5">
        Primary
      </ButtonLink>
      <ButtonLink href="#" variant="secondary" className="min-h-11 px-5 text-[14px] leading-5">
        Secondary
      </ButtonLink>
      <ButtonLink href="#" variant="light" className="min-h-11 px-5 text-[14px] leading-5">
        Light
      </ButtonLink>
      <ButtonLink href="#" variant="outline" className="min-h-11 px-5 text-[14px] leading-5">
        Outline
      </ButtonLink>
    </div>
  ),
};
export const HoverAndKeyboard: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "Start learning" });
    await expect(link).toHaveAttribute("href", "#courses");
    await userEvent.hover(link);
    await userEvent.tab();
  },
};
