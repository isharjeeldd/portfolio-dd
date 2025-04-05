"use client"

import { motion } from "framer-motion"
import BlogCard from "./blog-card"
import { BlogPost } from "@/types/blogs"
import { LinePullUp } from "../line-pull-up"
import { paragraphCss, subheadingCss } from "@/constants"

interface BlogListProps {
    blogs: BlogPost[]
}

export default function BlogList({ blogs }: BlogListProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <section className="mb-12 sm:mb-16 lg:mb-20">
            {/* Section Heading Animation */}
            <motion.div whileInView="show" viewport={{ once: true }} className="w-full">
                <LinePullUp text={["All blog posts"]} gradient={false} className={subheadingCss} />
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`${paragraphCss} w-full mb-8 mt-2`}>
                    Explore a collection of insightful articles, expert opinions, and practical guides designed to inform, inspire, and empower.
                </motion.p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2, // Adjust stagger timing
                            delayChildren: 0.2,
                        },
                    },
                }}
            >
                {blogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                    >
                        <BlogCard key={blog.id} blog={blog} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
