"use client"

import { motion } from "framer-motion"
import FeaturedBlogCard from "./featured-blog-card"
import { BlogPost } from "@/types/blogs"
import SmallBlogCard from "./small-blog-card"
import { headingCss, subheadingCss } from "@/constants"
import { LinePullUp } from "../line-pull-up"

interface RecentBlogsProps {
    blogs: BlogPost[]
    isCalledFromMain: boolean
}

export default function RecentBlogs({ blogs, isCalledFromMain }: RecentBlogsProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Staggers child animations
                delayChildren: 0.2,   // Delays the first child animation slightly
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    }

    return (
        <section className="mb-12 sm:mb-16 lg:mb-20 pb-16">
            {!isCalledFromMain ?
                <LinePullUp gradient={false} text={["Recent blog posts"]} className={`${headingCss} pb-5`} />
                : <>
                    <motion.section
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={container}
                    >
                        <motion.div
                            variants={item}
                            className="flex items-center justify-between mb-6"
                        >
                            <h2 className={`${subheadingCss}`}>Recent Blogs</h2>
                        </motion.div>
                    </motion.section>
                </>
            }
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when in view
            >
                {/* Featured Blog (Larger Card) */}
                <motion.div className="md:col-span-1" variants={item}>
                    {blogs[0] && <FeaturedBlogCard blog={blogs[0]} />}
                </motion.div>

                {/* Small Blogs (Staggered List) */}
                <motion.div className="md:col-span-1 space-y-12 sm:space-y-8" variants={container}>
                    {blogs.slice(1, 3).map((blog) => (
                        <motion.div key={blog.id} variants={item}>
                            <SmallBlogCard blog={blog} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}