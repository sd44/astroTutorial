import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site?.toString() || '',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
  });
}
