// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getBlogBySlug } from '@/data/blog-data'

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    const pathname = url.pathname

    // Only intercept blog post pages
    if (pathname.startsWith('/blogs/') && !pathname.endsWith('/blogs/')) {
        const slug = pathname.split('/').pop() as string
        const blog = getBlogBySlug(slug)

        if (blog) {
            // Clone the response
            const response = NextResponse.next()

            const imageUrl = blog.coverImage?.startsWith("http")
                ? blog.coverImage
                : `https://www.sharjeelafzaal.com/blogs/${blog.slug}.png`
            // : `https://www.sharjeelafzaal.com${blog.coverImage || "/blogs/opengraph-image.png"}`


            // Add OpenGraph headers
            response.headers.set('x-og-title', `${blog.title} | Blog Post`)
            response.headers.set('x-og-description', blog.excerpt || '')
            response.headers.set('x-og-image', imageUrl)

            return response
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/blogs/:path*',
}