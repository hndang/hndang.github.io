import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**\/[^_]*.md", base: "./src/content/projects" }),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        media: image(),
        alt: z.string(),
        date: z.string().optional(),
        category: z.array(z.string()),
        frontpage: z.boolean(),
        skill: z.array(z.string()),
        link: z.string(),
    })
});

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**\/[^_]*.md", base: "./src/content/blog" }),
});

export const collections = {
    'projects': projectsCollection,
    'blog': blogsCollection,
};