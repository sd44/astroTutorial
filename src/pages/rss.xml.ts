import rss, { pagesGlobToRssItems } from '@astrojs/rss';

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site?.toString() || '',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-hans</language>`,
  });
}
