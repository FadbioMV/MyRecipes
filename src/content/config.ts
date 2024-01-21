// Importar las utilidades de astro:cotent

import {z, defineCollection} from "astro:content"

const postsCollection = defineCollection({

    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        image: z.object({
            ulr: z.string(),
            alt: z.string(),
        }),
        tag: z.array(z.string()),
        colSpan: z.string(),
        rowSpan: z.string(),
    })
})

export const colletions={
    post: postsCollection,
}