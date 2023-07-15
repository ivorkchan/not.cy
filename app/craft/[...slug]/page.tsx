import { Metadata } from "next";
import { notFound } from "next/navigation";

import { allCrafts } from "contentlayer/generated";

import { Article } from "@/components/article";
import { MDX } from "@/components/mdx";

interface CraftProps {
  params: {
    slug: string[];
  };
}

async function getCraftFromParams(params: CraftProps["params"]) {
  const slug = params?.slug?.join("/");
  const craft = allCrafts.find((craft) => craft.slugAsParams === slug);

  if (!craft) {
    null;
  }

  return craft;
}

export async function generateMetadata({
  params,
}: CraftProps): Promise<Metadata> {
  const craft = await getCraftFromParams(params);

  if (!craft) {
    return {};
  }

  return {
    title: craft.title,
    description: craft.description,
    openGraph: {
      title: craft.title,
      description: craft.description,
      url: `https://not.cy${craft.slug}`,
      images: [
        {
          url: "https://not.cy/og.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: craft.title,
      description: craft.description,
      images: ["https://not.cy/twitter.png"],
    },
  };
}

export async function generateStaticParams(): Promise<CraftProps["params"][]> {
  return allCrafts.map((craft) => ({
    slug: craft.slugAsParams.split("/"),
  }));
}

export default async function Craft({ params }: CraftProps) {
  const craft = await getCraftFromParams(params);

  if (!craft) {
    notFound();
  }

  return (
    <Article>
      <MDX code={craft.body.code} />
    </Article>
  );
}
