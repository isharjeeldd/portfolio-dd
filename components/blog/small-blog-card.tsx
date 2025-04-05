"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import CategoryBadge from "./category-badge"
import { BlogPost } from "@/types/blogs"
import Link from 'next/link'

interface SmallBlogCardProps {
    blog: BlogPost
}

export default function SmallBlogCard({ blog }: SmallBlogCardProps) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <motion.article className="group" variants={item}>
            <Link href={`/blogs/${blog.slug}`} className="grid grid-cols-12 gap-4">
                <div className="col-span-7 sm:col-span-8">
                    <div className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <span className="text-purple-800 dark:text-purple-600">{blog.author}</span>
                            <span className="mx-2">•</span>
                            <span>{blog.date}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{blog.title}</h3>
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <p className="text-muted-foreground text-sm line-clamp-2">{blog.excerpt}</p>

                        <div className="flex flex-wrap gap-2 pt-1">
                            {blog.categories.map((category) => (
                                <CategoryBadge key={category} category={category} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-5 sm:col-span-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                            src={blog.coverImage || "/placeholder.svg"}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}