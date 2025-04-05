import type { Metadata } from "next"
import BlogList from "@/components/blog/blog-list"
import RecentBlogs from "@/components/blog/recent-blogs"
import Pagination from "@/components/blog/pagination"
import { getAllBlogs } from "@/data/blog-data"
import { initialSectionCss } from "@/constants"

export const metadata: Metadata = {
  title: "Blog | Your Company",
  description: "Explore our latest articles, tutorials, and insights on design, technology, and business.",
  openGraph: {
    title: "Blog | Your Company",
    description: "Explore our latest articles, tutorials, and insights on design, technology, and business.",
    url: "https://yourcompany.com/blogs",
    siteName: "Your Company",
    images: [
      {
        url: "https://yourcompany.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Your Company",
    description: "Explore our latest articles, tutorials, and insights on design, technology, and business.",
    images: ["https://yourcompany.com/twitter-image.jpg"],
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
  const allBlogs = getAllBlogs()
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