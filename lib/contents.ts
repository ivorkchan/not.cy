import { allBlogs, allPages } from "content-collections";

import type { Blog, Page } from "content-collections";

type Serializable = Blog | Page;
type Params = { slug: string[] };
type StaticParams = { slug: string[] };

// create hashmap by contents
function createContentMap(contents: Serializable[]): Map<string, Serializable> {
  return new Map(contents.map((content) => [content.slug, content]));
}

const blogMap = createContentMap(allBlogs);
const pageMap = createContentMap(allPages);

// get content from param
async function getContentFromParams(
  params: Promise<Params>,
  contentMap: Map<string, Serializable>,
): Promise<Serializable | null> {
  const { slug } = await params;
  if (!Array.isArray(slug) || slug.length === 0) return null;

  const slugPath = slug.join("/");
  return contentMap.get(slugPath) ?? null;
}

// get blog
export async function getBlogFromParams(params: Promise<Params>) {
  return getContentFromParams(params, blogMap);
}

// get page
export async function getPageFromParams(params: Promise<Params>) {
  return getContentFromParams(params, pageMap);
}

// generate static params
async function generateStaticParams(
  contents: Serializable[],
): Promise<StaticParams[]> {
  return contents.map((content) => ({
    slug: content.slug.split("/"),
  }));
}

// once utility function to ensure single execution
function once<T>(fn: () => Promise<T>): () => Promise<T> {
  let promise: Promise<T> | null = null;
  return async () => {
    if (!promise) {
      promise = fn();
    }

    return promise;
  };
}

// generate blog params only once
export const generateBlogStaticParams = once(async () =>
  generateStaticParams(allBlogs),
);

// generate page params only once
export const generatePageStaticParams = once(async () =>
  generateStaticParams(allPages),
);
