import Hero from "@/components/hero"
import { About } from '@/components/about'
import RecentProjects from '@/components/recent-projects'
import RecentBlogs from "@/components/blog/recent-blogs"
import { blogPosts } from "@/data/blog-data"
import BgGradient from "@/components/bg-gradient"

export default function Home() {
  const recentBlogs = blogPosts.slice(0, 3);
  return (
    <>
      <Hero />
      <About />
      <RecentProjects />
      <div className="container max-w-7xl mx-auto px-4 pt-28 md:px-0">
        <RecentBlogs blogs={recentBlogs} isCalledFromMain={true} />
      </div>
    </>
  )
}