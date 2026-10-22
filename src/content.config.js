import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Blog yazıları: src/content/blog/ altında markdown dosyaları.
// Her yazının iki dilde dosyası vardır; `translationKey` eşleri birbirine bağlar,
// `slug` dil bazında yerelleştirilmiş URL'i belirler.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    lang: z.enum(['tr', 'en']),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    translationKey: z.string(),
  }),
})

export const collections = { blog }