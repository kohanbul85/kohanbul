import { defineCollection, z } from 'astro:content';

const creditItemSchema = z.object({
  role: z.string(),
  names: z.array(z.string()),
});

const awardItemSchema = z.object({
  year: z.number(),
  festival: z.string(),
  award: z.string(),
  type: z.enum(['award', 'screening']).default('award'),
});

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_ko: z.string(),
    title_en: z.string(),
    slug: z.string().optional(),
    year: z.number(),
    type: z.string(),
    country: z.string().default('대한민국'),
    runtime_min: z.number().optional(),
    thumbnail: z.string(),
    gallery: z.array(z.string()).default([]),
    is_featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    credits: z.array(creditItemSchema).default([]),
    awards: z.array(awardItemSchema).default([]),
    cast: z.array(z.string()).default([]),
    genre_tags: z.array(z.string()).default([]),
    synopsis_en: z.string().optional(),
  }),
});

const directorCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name_ko: z.string(),
    name_en: z.string(),
    birth_year_display: z.string().optional(),
    primary_role: z.string().optional(),
    profile_image: z.string(),
    email: z.string().optional(),
    bio_en: z.string().optional(),
    sns: z.object({
      instagram: z.string().optional(),
      vimeo: z.string().optional(),
      youtube: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  works: worksCollection,
  director: directorCollection,
};
