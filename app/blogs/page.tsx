import type { Metadata } from "next"
import BlogList from "@/components/blog/blog-list"
import RecentBlogs from "@/components/blog/recent-blogs"
import Pagination from "@/components/blog/pagination"
import { getAllBlogs } from "@/data/blog-data"
import { initialSectionCss } from "@/constants"

export const metadata: Metadata = {
  title: "Blog | Muhammad Sharjeel – Full Stack Developer",
  description:
    "Read the latest articles by Muhammad Sharjeel – a full stack developer. Explore insights on web development, design systems, and AI-enhanced workflows.",
  openGraph: {
    title: "Blog | Muhammad Sharjeel – Full Stack Developer",
    description:
      "Explore blog posts and tutorials by Muhammad Sharjeel focused on frontend frameworks, performance, developer experience, and modern design.",
    url: "https://www.sharjeelafzaal.com/blogs",
    siteName: "Muhammad Sharjeel – Portfolio",
    images: [
      {
        url: "https://www.sharjeelafzaal.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Sharjeel Portfolio Blog Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Muhammad Sharjeel – Full Stack Developer",
    description:
      "Latest blog posts and thoughts from Muhammad Sharjeel, focused on building robust, user-friendly apps with modern stacks like Next.js, Tailwind, and AI tools.",
    images: ["https://www.sharjeelafzaal.com/twitter-image.png"],
  },
  keywords: [
    "Muhammad Sharjeel blog",
    "full stack developer blog",
    "frontend development",
    "Next.js tutorials",
    "Tailwind CSS tips",
    "developer experience",
    "web performance",
    "software engineering",
    "portfolio blog",
    "AI for developers",
  ],
  authors: [{ name: "Muhammad Sharjeel", url: "https://www.sharjeelafzaal.com" }],
  robots: {
    index: true,
    follow: true,
  },
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Await the searchParams if necessary (though in this case, it's not needed)
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page, 10) : 1
  const blogsPerPage = 12
  const allBlogs = await getAllBlogs()
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage)

  const startIndex = (page - 1) * blogsPerPage
  const endIndex = startIndex + blogsPerPage
  const currentBlogs = allBlogs.slice(startIndex, endIndex)

  const recentBlogs = allBlogs.slice(0, 3)

  return (
    <main className={initialSectionCss}>
      <RecentBlogs blogs={recentBlogs} isCalledFromMain={false} />
      <BlogList blogs={currentBlogs} />
      {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} />}
    </main>
  )
}