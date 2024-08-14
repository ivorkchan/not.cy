import rehypeShiki from "@shikijs/rehype"
import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `page/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./contents",
  documentTypes: [Page, Blog],
  mdx: {
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
  },
})
