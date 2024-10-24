import { Metadata } from "next"
import { notFound } from "next/navigation"

import { allPages } from "contentlayer/generated"

import { Mdx } from "@/components/mdx"

interface PageProps {
  readonly params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((pageItem) => pageItem.slugAsParams === slug)

  if (!page) {
    return null
  }

  return page
}

/* eslint-disable-next-line react-refresh/only-export-components */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
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
          width: 1_200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: page.title,
      description: page.description,
      images: ["https://not.cy/og.png"],
    },
  }
}

/* eslint-disable-next-line react-refresh/only-export-components */
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return <Mdx code={page.body.code} />
}
