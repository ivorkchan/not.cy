import { allBlogs, allPages } from "content-collections";

import type { Blog, Page } from "content-collections";

type Serializable = Blog | Page;
type Params = { slug: string[] };
type StaticParams = { slug: string[] };

function createContentMap(contents: Serializable[]): Map<string, Serializable> {
  return new Map(contents.map((content) => [content.slug, content]));
}

const blogMap = createContentMap(allBlogs);
const pageMap = createContentMap(allPages);

async function getContentFromParams(
  paramsPromise: Promise<Params>,
  contentMap: Map<string, Serializable>,
): Promise<Serializable | null> {
  const params = await paramsPromise;
  const { slug } = params;

  if (!Array.isArray(slug) || slug.length === 0) return null;

  const slugPath = slug.join("/");
  return contentMap.get(slugPath) ?? null;
}

export async function getBlogFromParams(params: Promise<Params>) {
  return getContentFromParams(params, blogMap);
}

export async function getPageFromParams(params: Promise<Params>) {
  return getContentFromParams(params, pageMap);
}

function generateStaticParams(contents: Serializable[]): StaticParams[] {
  return contents.map((content) => ({
    slug: content.slug.split("/"),
  }));
}

function once<T>(fn: () => T): () => T {
  let result: T | null = null;
  return () => {
    if (result === null) {
      result = fn();
    }

    return result;
  };
}

export const generateBlogStaticParams = once(() =>
  generateStaticParams(allBlogs),
);

export const generatePageStaticParams = once(() =>
  generateStaticParams(allPages),
);
