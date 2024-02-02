import { defineCollection, reference, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    category: z.enum(["behind-the-curtain"]),
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    date: z.date(),
    author: z.array(reference("authors")),
  }),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    songishUsername: z.string(),
    subtitle: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
  authors: authorsCollection,
};
