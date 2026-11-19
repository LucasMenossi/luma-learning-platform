import type { StorybookConfig } from "@storybook/nextjs-vite";
import tailwindcss from "@tailwindcss/postcss";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  async viteFinal(viteConfig) {
    return {
      ...viteConfig,
      css: {
        ...viteConfig.css,
        postcss: {
          plugins: [tailwindcss()],
        },
      },
    };
  },
};

export default config;
