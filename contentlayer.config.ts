import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files";

export const Image = defineNestedType(() => ({
    name: "Image",
    fields: {
      src: { type: "string", required: true },
      width: { type: "number", required: true },
      height: { type: "number", required: true },
    },
}));

export const Portfolio = defineDocumentType(() => ({
    name: "Portfolio",
    filePathPattern: `portfolio/**/*.md`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        tags: { type: "list", of: { type: "string" } },
        enabled: { type: "boolean", required: true },
        notionId: { type: "string", required: false },
        text: { type: "string", required: true },
        slug: { type: "string", required: true },
        image : { type: "json", of: Image, required: false },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (portfolio) => `/portfolio/${portfolio.slug}`,
        },
    },
}));

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `post/**/*.md`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        tags: { type: "list", of: { type: "string" } },
        enabled: { type: "boolean", required: false },
        notionId: { type: "string", required: false },
        text: { type: "string", required: true },
        slug: { type: "string", required: true },
        image : { type: "json", of: Image, required: false },
    },
    computedFields: {
        url: {
        type: "string",
        resolve: (post) => `/post/${post.slug}`,
        },
    },
}));

// Export the Contentlayer configuration
export default makeSource({
    contentDirPath: "app/content", // Directory containing your markdown files
    documentTypes: [Portfolio, Post],
});
