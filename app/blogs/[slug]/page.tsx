import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogContent from "@/components/blog/blog-content"
import RecentPostsSidebar from "@/components/blog/recent-posts-sidebar"
import ShareButtons from "@/components/blog/share-buttons"
import { getAllBlogs, getBlogBySlug, getRecentBlogs } from "@/data/blog-data"

export const dynamic = 'force-static';

interface BlogDetailPageProps {
    params: {
        slug: string
    }
}

// This function will generate all possible static paths at build time
export async function generateStaticParams() {
    // Get all blogs from your data source
    const blogs = await getAllBlogs()

    // Return all the slugs as params objects
    return blogs.map(blog => ({
        slug: blog.slug,
    }))
}

export async function generateMetadata(
    { params }: BlogDetailPageProps
): Promise<Metadata> {
    const blog = await getBlogBySlug(params.slug)
    if (!blog) {
        return { title: "Blog Post Not Found" }
    }

    // Construct the image path
    const fullImage = `https://www.sharjeelafzaal.com${blog.coverImage}`

    return {
        title: `${blog.title} | Blog Post`,
        description: blog.excerpt,
        openGraph: {
            title: `${blog.title} | Blog Post`,
            description: blog.excerpt,
            url: `https://www.sharjeelafzaal.com/blogs/${blog.slug}`,
            siteName: "Muhammad Sharjeel - Blogs",
            images: [
                {
                    url: fullImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
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
            title: `${blog.title} | Blog Post`,
            description: blog.excerpt,
            images: [fullImage],
        },
    }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const blog = await getBlogBySlug(params.slug)
    if (!blog) {
        notFound()
    }

    const recentPosts = await getRecentBlogs(4, blog.id)

    return (
        <>
            <ShareButtons title={blog.title} slug={blog.slug} />
            <main className="container max-w-7xl mx-auto px-4 py-24 mt-28 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-8">
                        <article>
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
                            <p className="text-muted-foreground mb-6">
                                By {blog.author} | Published on {new Date(blog.date.toString()).toDateString()}
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