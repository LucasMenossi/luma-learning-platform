import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async preVisit(page) {
    await page.setViewportSize({ width: 390, height: 844 });
  },
};

export default config;
