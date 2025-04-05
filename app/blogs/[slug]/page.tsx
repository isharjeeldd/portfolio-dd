import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogContent from "@/components/blog/blog-content"
import RecentPostsSidebar from "@/components/blog/recent-posts-sidebar"
import ShareButtons from "@/components/blog/share-buttons"
import { getBlogBySlug, getRecentBlogs } from "@/data/blog-data"

interface BlogDetailPageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const blog = getBlogBySlug(params.slug)

    if (!blog) {
        return {
            title: "Blog Post Not Found",
        }
    }

    return {
        title: `${blog.title} | Your Company Blog`,
        description: blog.excerpt,
        openGraph: {
            title: `${blog.title} | Your Company Blog`,
            description: blog.excerpt,
            url: `https://yourcompany.com/blogs/${blog.slug}`,
            siteName: "Your Company",
            images: [
                {
                    url: blog.coverImage || "https://yourcompany.com/default-og-image.jpg",
                    width: 1200,
                    height: 630,
                },
            ],
            locale: "en_US",
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author],
            tags: blog.categories,
        },
        twitter: {
            card: "summary_large_image",
            title: `${blog.title} | Your Company Blog`,
            description: blog.excerpt,
            images: [blog.coverImage || "https://yourcompany.com/default-twitter-image.jpg"],
        },
    }
}

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
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <article>
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
                            <p className="text-muted-foreground mb-6">
                                By {blog.author} | Published on {blog.date}
                            </p>
                            <BlogContent blog={blog} />
                        </article>
                    </div>
                    <div className="lg:col-span-4 order-1 lg:order-2">
                        <RecentPostsSidebar posts={recentPosts} />
                    </div>
                </div>
            </main>
        </>
    )
}