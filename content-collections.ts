import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";

type Serializable = {
  [key: string]: string;
};

const transformWithMDX = async (
  doc: any,
  context: any,
): Promise<Serializable> => {
  const mdx = await compileMDX(context, doc, {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: {
            light: "vitesse-light",
            dark: "vitesse-dark",
          },
        },
      ],
    ],
  });

  return {
    ...doc,
    slug: doc._meta.path,
    mdx,
  };
};

const baseSchema = (zod: any) => ({
  title: zod.string(),
  description: zod.string(),
});

const createCollection = (name: string, directory: string) =>
  defineCollection({
    name,
    directory,
    include: "**/*.mdx",
    schema: baseSchema,
    transform: transformWithMDX,
  });

const Page = createCollection("Page", "contents/page");
const Blog = createCollection("Blog", "contents/blog");

export default defineConfig({
  collections: [Page, Blog],
});
