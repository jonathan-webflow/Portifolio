import type { CollectionEntry } from 'astro:content';

function toAbsoluteUrl(path: string, site: string | URL): string {
  return new URL(path, site).href;
}

function projectSlug(entry: CollectionEntry<'projects'>): string {
  return entry.id.replace(/\.mdx?$/, '');
}

export function buildProjectSchema(
  entries: CollectionEntry<'projects'>[],
  site: string | URL,
) {
  const siteHref = typeof site === 'string' ? site : site.href;
  const sorted = [...entries].sort((a, b) => a.data.order - b.data.order);

  const creativeWorks = sorted.map((entry) => {
    const slug = projectSlug(entry);
    const { title, client, year, role, coverImage, description, tags, industries, url, caseStudyUrl } =
      entry.data;
    const projectUrl = url ?? caseStudyUrl;
    const work: Record<string, unknown> = {
      '@type': 'CreativeWork',
      '@id': `${siteHref}#project-${slug}`,
      name: title,
      creator: { '@id': `${siteHref}#person` },
      dateCreated: `${year}-01-01`,
    };

    if (description) work.description = description;
    if (coverImage) work.image = toAbsoluteUrl(coverImage, site);
    if (projectUrl && projectUrl !== '#') work.url = projectUrl;
    if (client) {
      work.about = {
        '@type': 'Organization',
        name: client,
      };
    }
    if (tags.length > 0) work.keywords = tags.join(', ');
    if (industries.length > 0) work.genre = industries;

    return work;
  });

  const portfolioList = {
    '@type': 'ItemList',
    '@id': `${siteHref}#portfolio`,
    name: 'Selected Work',
    itemListElement: sorted.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@id': `${siteHref}#project-${projectSlug(entry)}` },
    })),
  };

  return [...creativeWorks, portfolioList];
}
