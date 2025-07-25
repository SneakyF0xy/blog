import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/content/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      date: z.coerce.date(),
      modificationDate: z.coerce.date().optional().nullable(),
      title: z.string().min(10).max(60),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      category: z.string().default("research"),
      tags: z.array(z.string()).min(1).default(["research"]),
      og: image().or(z.string()).optional(),
      description: z.string().min(50).max(160),
      canonicalURL: z.string().url().optional(),
      hideEditPost: z.boolean().default(false),
      timezone: z.string().optional(),
    }),
});

export const collections = { blog };
