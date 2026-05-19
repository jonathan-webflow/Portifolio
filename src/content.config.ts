import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content Collection: projects (Astro v5+ Content Layer API)
 *
 * Loader: glob — lê arquivos .md e .mdx de src/content/projects/
 * Schema: Zod — valida o frontmatter em build time
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    /** Título do projeto (ex: "Redesign E-commerce") */
    title: z.string().min(1),

    /** Nome do cliente ou empresa */
    client: z.string().min(1),

    /** Ano de conclusão (ex: 2024) */
    year: z.number().int().min(2000).max(2100),

    /** Papel desempenhado (ex: "Design + Development") */
    role: z.string().min(1),

    /** Caminho da imagem de capa (relativo a /public ou URL absoluta) */
    coverImage: z.string().default(""),

    /** Tecnologias ou categorias usadas */
    tags: z.array(z.string()).default([]),

    /** Indústrias ou setores do projeto */
    industries: z.array(z.string()).default([]),

    /** Rascunho — projetos com draft: true não aparecem em produção */
    draft: z.boolean().default(false),

    /** Destacar na homepage */
    featured: z.boolean().default(false),

    /** Descrição curta para meta tags e cards */
    description: z.string().optional(),

    /** URL do projeto ao vivo */
    url: z.string().url().optional(),

    /** URL do case study (link externo, ex: Behance) */
    caseStudyUrl: z.string().url().optional(),

    /** Cor de destaque do projeto (hex, para theming dinâmico) */
    accentColor: z
      .string()
      .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/)
      .optional(),

    /** Ordem de exibição (menor número = exibido primeiro) */
    order: z.number().int().default(99),
  }),
});

export const collections = { projects };
