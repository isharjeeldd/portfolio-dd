import { getBlogBySlug } from "@/data/blog-data"

export default function Head({ params }: { params: { slug: string } }) {
    const blog = getBlogBySlug(params.slug)
    if (!blog) return null
    const image = blog.coverImage?.startsWith("http")
        ? blog.coverImage
        : `https://www.sharjeelafzaal.com${blog.coverImage || "/opengraph-image.png"}`
    const url = `https://www.sharjeelafzaal.com/blogs/${blog.slug}`
    return (
        <>
            <meta property="og:title" content={`${blog.title} | Blog Post`} />
            <meta property="og:description" content={blog.excerpt} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${blog.title} | Blog Post`} />
            <meta name="twitter:description" content={blog.excerpt} />
            <meta name="twitter:image" content={image} />
        </>
    )
}