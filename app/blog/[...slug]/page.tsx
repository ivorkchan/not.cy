import { notFound } from "next/navigation";

import type { Blog } from "content-collections";
import type { Metadata } from "next";

import { getBlogFromParams } from "@/lib/contents";
import { Mdx } from "@/components/mdx";

type Params = Promise<{ slug: string[] }>;

async function fetchBlogOrFail(params: Params): Promise<Blog> {
  const blog = await getBlogFromParams(params);
  if (!blog) notFound();
  return blog;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const blog = await fetchBlogOrFail(params);

  const url = `https://not.cy/${blog.slug}`;
  const imageUrl = "https://not.cy/og.png";

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url,
      images: [{ url: imageUrl, width: 1_200, height: 630 }],
    },
    twitter: {
      title: blog.title,
      description: blog.description,
      images: [imageUrl],
    },
  };
}

export default async function Blog({ params }: { readonly params: Params }) {
  const blog = await fetchBlogOrFail(params);
  return <Mdx code={blog.mdx} />;
}
