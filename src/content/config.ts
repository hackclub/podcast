// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define a schema for each collection you'd like to validate.
const episodeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    season: z.number(),
    episode: z.number(),
    audioUrl: z.string().url(),
    blurb: z.string(),
    date: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  episodes: episodeCollection,
};
