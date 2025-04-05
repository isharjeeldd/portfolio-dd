"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BlogPost } from "@/types/blogs"
import CategoryBadge from "./category-badge"

interface BlogContentProps {
    blog: BlogPost
}

export default function BlogContent({ blog }: BlogContentProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-[16/9] mb-8 sm:mb-10"
            >
                <Image
                    src={blog.coverImage || "/placeholder.svg?height=600&width=1200"}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {blog.content && <div dangerouslySetInnerHTML={{ __html: blog.content }} />}

                <div className="flex flex-wrap gap-2 mt-8">
                    {blog.categories.map((category) => (
                        <CategoryBadge key={category} category={category} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}
