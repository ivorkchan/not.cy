import { Metadata } from "next"
import { notFound } from "next/navigation"

import { allBlogs } from "contentlayer/generated"

import { MDX } from "@/components/mdx"

interface BlogProps {
  params: {
    slug: string[]
  }
}

async function getBlogFromParams(params: BlogProps["params"]) {
  const slug = params?.slug?.join("/")
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!blog) {
    return null
  }

  return blog
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://not.cy${blog.slug}`,
      images: [
        {
          url: "https://not.cy/og.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: blog.title,
      description: blog.description,
      images: ["https://not.cy/og.png"],
    },
  }
}

export async function generateStaticParams(): Promise<BlogProps["params"][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }))
}

export default async function Blog({ params }: BlogProps) {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    notFound()
  }

  return <MDX code={blog.body.code} />
}
