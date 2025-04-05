"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import CategoryBadge from "./category-badge"
import { BlogPost } from "@/types/blogs"
import Link from 'next/link'

interface FeaturedBlogCardProps {
    blog: BlogPost
}

export default function FeaturedBlogCard({ blog }: FeaturedBlogCardProps) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <motion.article className="group relative" variants={item}>
            <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden rounded-lg mb-4">
                    <Image
                        src={blog.coverImage || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <span className="text-purple-800 dark:text-purple-600">{blog.author}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            {blog.title}
                        </h3>
                        <ArrowUpRight className="h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-muted-foreground line-clamp-2">{blog.excerpt}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {blog.categories.map((category) => (
                            <CategoryBadge key={category} category={category} />
                        ))}
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}