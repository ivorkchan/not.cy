import { notFound } from "next/navigation";

import { getPageFromParams } from "@/lib/mdxContents";

import { MdxProvider } from "@/components/mdx/MdxProvider";

import type { Page } from "content-collections";
import type { Metadata } from "next";

type Params = Promise<{ slug: string[] }>;

async function fetchPageOrFail(params: Params): Promise<Page> {
  const page = await getPageFromParams(params);
  if (!page) notFound();
  return page;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const page = await fetchPageOrFail(params);

  const url = `https://not.cy/${page.slug}`;
  const imageUrl = "https://not.cy/og.png";

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      images: [{ url: imageUrl, width: 1_200, height: 630 }],
    },
    twitter: {
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: { readonly params: Params }) {
  const page = await fetchPageOrFail(params);
  return <MdxProvider code={page.mdx} />;
}
