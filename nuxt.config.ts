import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    // Support `import 'global'` used by storybook
    // ToDo: Remove this workaround once nuxt provides a proper polyfill for globals https://github.com/nuxt/framework/issues/1922
    global: "global.ts",
  },

  ssr: false,

  nitro: {
    prerender: {
      // Needed for storybook support
      routes: ["/_storybook/external-iframe"],
    },
  },
  modules: [
    // Add storybook support
    "./modules/storybook",
    // Add vue runtime compiler as temporary workaround for https://github.com/nuxt/framework/issues/4661, required for storybook
    "nuxt3-runtime-compiler-module",
  ],

  /**
   * Storybook integration with Nuxt
   * See https://storybook.nuxtjs.org/
   */
  storybook: {},

  vite: {
    plugins: [eslintPlugin()],
  },
});
