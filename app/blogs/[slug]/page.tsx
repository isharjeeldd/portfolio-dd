import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogContent from "@/components/blog/blog-content"
import RecentPostsSidebar from "@/components/blog/recent-posts-sidebar"
import ShareButtons from "@/components/blog/share-buttons"
import { getBlogBySlug, getRecentBlogs } from "@/data/blog-data"
export const dynamic = 'force-static';

interface BlogDetailPageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const blog = getBlogBySlug(params.slug);
    if (!blog) {
        return { title: "Blog Post Not Found" };
    }

    return {
        title: `${blog.title} | Blog Post`,
        description: blog.excerpt,
        openGraph: {
            title: `${blog.title} | Blog Post`,
            description: blog.excerpt,
            url: `https://www.sharjeelafzaal.com/blogs/${blog.slug}`,
            siteName: "Muhammad Sharjeel - Blogs",
            // Images are now handled by opengraph-image.tsx
            locale: "en_US",
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author],
            tags: blog.categories,
        },
        twitter: {
            card: "summary_large_image",
            title: `${blog.title} | Blog Post`,
            description: blog.excerpt,
            // Images are now handled by twitter-image.tsx
        },
        alternates: {
            canonical: `https://www.sharjeelafzaal.com/blogs/${blog.slug}`,
        },
    };
}

// export async function generateMetadata(
//     { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//     const blog = getBlogBySlug(params.slug)

//     if (!blog) {
//         return { title: "Blog Post Not Found" }
//     }

//     const fullImage =
//         blog.coverImage?.startsWith("http")
//             ? blog.coverImage
//             : `https://www.sharjeelafzaal.com${blog.coverImage || "/opengraph-image.png"}`

//     return {
//         title: `${blog.title} | Blog Post`,
//         description: blog.excerpt,
//         openGraph: {
//             title: `${blog.title} | Blog Post`,
//             description: blog.excerpt,
//             url: `https://www.sharjeelafzaal.com/blogs/${blog.slug}`,
//             siteName: "Muhammad Sharjeel - Blogs",
//             images: [
//                 {
//                     url: fullImage,
//                     width: 1200,
//                     height: 630,
//                 },
//             ],
//             locale: "en_US",
//             type: "article",
//             publishedTime: blog.date,
//             authors: [blog.author],
//             tags: blog.categories,
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: `${blog.title} | Blog Post`,
//             description: blog.excerpt,
//             images: [fullImage],
//         },
//     }
// }

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const blog = getBlogBySlug(params.slug)

    if (!blog) {
        notFound()
    }

    const recentPosts = getRecentBlogs(4, blog.id)

    return (
        <>
            <ShareButtons title={blog.title} slug={blog.slug} />
            <main className="container max-w-7xl mx-auto px-4 py-24 mt-28 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-8">
                        <article>
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
                            <p className="text-muted-foreground mb-6">
                                By {blog.author} | Published on {blog.date}
                            </p>
                            <BlogContent blog={blog} />
                        </article>
                    </div>
                    <div className="lg:col-span-4">
                        <RecentPostsSidebar posts={recentPosts} />
                    </div>
                </div>
            </main>
        </>
    )
}