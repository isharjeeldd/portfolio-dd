"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { BlogPost } from "@/types/blogs"

interface RecentPostsSidebarProps {
    posts: BlogPost[]
}

export default function RecentPostsSidebar({ posts }: RecentPostsSidebarProps) {
    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24"
        >
            <h2 className="text-3xl md:text-xl font-bold mb-6 mt-10 md:mt-0">Recent blog posts</h2>
            <div className="space-y-6">
                {posts.map((post, index) => (
                    <RecentPostCard key={post.id} post={post} index={index} />
                ))}
            </div>
        </motion.aside>
    )
}

interface RecentPostCardProps {
    post: BlogPost
    index: number
}

function RecentPostCard({ post, index }: RecentPostCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group"
        >
            <Link href={`/blogs/${post.slug}`} className="block space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                        src={post.coverImage || "/placeholder.svg?height=300&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="space-y-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <span className="text-purple-600 dark:text-purple-400">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
