'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function RecentPosts() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="container px-4 py-24 md:px-6"
    >
      <motion.div 
        variants={item}
        className="flex items-center justify-between mb-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Recent posts</h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          See All Posts
        </Link>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg block"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent p-6 flex items-end">
                <h3 className="font-medium text-lg text-foreground">{post.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

const posts = [
  {
    id: 1,
    title: "The Beauty of Nature",
    slug: "beauty-of-nature",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Modern Design Trends",
    slug: "modern-design-trends",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Tech Innovation",
    slug: "tech-innovation",
    image: "/placeholder.svg?height=400&width=600",
  },
]

