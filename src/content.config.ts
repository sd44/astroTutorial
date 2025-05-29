// 导入 glob 加载器（loader）
import { glob } from 'astro/loaders';
// 从 `astro:content` 导入工具函数
import { z, defineCollection } from 'astro:content';

const blogSchema :z.ZodSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  })

// 为每个集合定义一个 `loader` 和 `schema`
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: blogSchema,
});
// 导出一个单独的 `collections` 对象用以注册你的集合（们）
export const collections = { blog };

// 用 z.infer 推导类型，避免手写接口
export type PostFrontmatter = z.infer<typeof blogSchema>;
