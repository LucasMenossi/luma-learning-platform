import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "UI/SectionHeading",
  component: SectionHeading,
  args: {
    eyebrow: "DISCOVER",
    title: "Learn something new",
    description:
      "Practical courses taught by people who do the work every day.",
    className: "max-w-[560px]",
    eyebrowClassName:
      "text-xs leading-4 font-semibold tracking-[1.44px] text-primary",
    titleClassName:
      "mt-4 font-heading text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:text-[48px] xl:leading-[56px] xl:tracking-[-1.2px]",
    descriptionClassName: "mt-4 text-base leading-7 text-muted xl:text-[18px]",
  },
  argTypes: { title: { control: "text" }, description: { control: "text" } },
} satisfies Meta<typeof SectionHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const WithDescription: Story = {};
export const WithoutDescription: Story = { args: { description: undefined } };
export const HeadingIsSemantic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByRole("heading", { level: 2, name: "Learn something new" }),
    ).toBeInTheDocument();
  },
};
