import { ImageResponse } from 'next/og'
import { getBlogBySlug } from "@/data/blog-data"

export const runtime = 'edge'

export async function GET(request, { params }) {
    const { slug } = params
    const blog = getBlogBySlug(slug)

    // Default image URL
    let imageUrl = 'https://www.sharjeelafzaal.com/opengraph-image.png'

    if (blog && blog.coverImage) {
        imageUrl = blog.coverImage.startsWith("http")
            ? blog.coverImage
            : `https://www.sharjeelafzaal.com${blog.coverImage}`
    }

    // Redirect to the actual image
    return new Response(null, {
        status: 302,
        headers: {
            'Location': imageUrl
        }
    })
}