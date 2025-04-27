import { ImageResponse } from 'next/og'
import { getBlogBySlug } from "@/data/blog-data"

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
    const blog = getBlogBySlug(params.slug)
    if (!blog) {
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
                    <h1 style={{ fontSize: 60, margin: 0 }}>Blog Post Not Found</h1>
                </div>
            ),
            { ...size }
        )
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