import type { Preview } from "@storybook/nextjs-vite";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    viewport: { options: MINIMAL_VIEWPORTS },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    layout: "centered",
  },
};

export default preview;
