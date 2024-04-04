import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        media: image(),
        alt: z.string(),
        category: z.array(z.string()),
        frontpage: z.boolean(z.string()),
    })
});

const blogsCollection = defineCollection({});

// expoert single collections obj
export const collections = {
    'projects': projectsCollection,
    'blog': blogsCollection,
};