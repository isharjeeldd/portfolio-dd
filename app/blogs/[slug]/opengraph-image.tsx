// app/blogs/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { getAllBlogs, getBlogBySlug } from "@/data/blog-data"
import { notFound } from "next/navigation"

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Generate images for all static paths
export async function generateStaticParams() {
    // Get all blogs from your data source
    const blogs = await getAllBlogs()

    // Return all the slugs as params objects
    return blogs.map(blog => ({
        slug: blog.slug,
    }))
}

export default async function Image({ params }: { params: { slug: string } }) {
    const blog = await getBlogBySlug(params.slug)
    if (!blog) {
        return notFound()
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom, #111827, #1f2937)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    padding: '40px',
                }}
            >
                <h1 style={{ fontSize: 60, textAlign: 'center', margin: 0, marginBottom: 20 }}>
                    {blog.title}
                </h1>
                <p style={{ fontSize: 30, opacity: 0.8 }}>By {blog.author}</p>
                <div style={{ marginTop: 'auto', fontSize: 24 }}>sharjeelafzaal.com</div>
            </div>
        ),
        { ...size }
    )
}