import { defineNuxtModule, logger } from "@nuxt/kit";
import chalk from "chalk";
import { withoutTrailingSlash } from "ufo";

export default defineNuxtModule({
  hooks: {},
  setup(_moduleOptions, nuxt) {
    const path = "/_storybook/";
    nuxt.hook("listen", (_, listener) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const fullPath = `${withoutTrailingSlash(listener.url)}${path}`;
      logger.info(`Storybook: ${chalk.underline.yellow(fullPath)}`);
    });
  },
});
