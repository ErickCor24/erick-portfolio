import { defineCollection, z } from "astro:content";

export const collections = {
    experience: defineCollection(
        {
            schema: z.object({
                title: z.string(),
                small_description: z.string(),
                imagen: z.array(z.string()),
                languages: z.array(z.string()),
                linkRepo: z.string(),
            })
        }
    )
};