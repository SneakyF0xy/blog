import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkWrap, { rehypeHandleSections } from "./src/plugins/wrap.js";

export default defineConfig({
    output: "static",
    site: "https://sneakyfoxy.com",
    integrations: [
        sitemap()
    ],
    markdown: {
        remarkPlugins: [
          remarkMath,
          remarkWrap,
        ],
        rehypePlugins: [rehypeKatex, rehypeHandleSections],
        shikiConfig: {
          themes: { light: "gruvbox-light-hard", dark: "gruvbox-dark-hard" },
          wrap: false,
        },
    },
});
