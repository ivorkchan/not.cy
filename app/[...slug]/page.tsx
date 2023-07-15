import { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPages } from "contentlayer/generated";

import { Article } from "@/components/article";
import { MDX } from "@/components/mdx";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://not.cy${page.slug}`,
      images: [
        {
          url: "https://not.cy/og.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: page.title,
      description: page.description,
      images: ["https://not.cy/twitter.png"],
    },
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <Article>
      <MDX code={page.body.code} />
    </Article>
  );
}
