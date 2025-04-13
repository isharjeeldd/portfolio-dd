"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { allProjectsData } from "@/data/all-projects"
import { cn } from "@/lib/utils"
import { LinePullUp } from "../line-pull-up"
import { paragraphCss, subheadingCss } from "@/constants"

export default function AllProjects() {
    return (
        <section className="container max-w-7xl mx-auto pb-20">
            <div>
                {/* Section Heading Animation */}
                <motion.div whileInView="show" viewport={{ once: true }} className="w-full">
                    <LinePullUp text={["All Projects"]} className={subheadingCss} gradient={false} />
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={`${paragraphCss} w-full mb-8 mt-2`}>
                        A showcase of my best work—blending creativity, functionality, and innovation. Explore projects that define my craft and expertise.
                    </motion.p>
                </motion.div>

                {/* Staggered Scroll Animation for Projects */}
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
                    {allProjectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

interface ProjectCardProps {
    project: (typeof allProjectsData)[0]
    index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const tagColors: Record<string, string> = {
        Design: "bg-[#DBEAFE] text-[#1E40AF] dark:bg-[#1E40AF]/20 dark:text-[#93C5FD]",
        Research: "bg-[#FCE7F3] text-[#9D174D] dark:bg-[#9D174D]/20 dark:text-[#F9A8D4]",
        Presentation: "bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#5B21B6]/20 dark:text-[#C4B5FD]",
        Collaboration: "bg-[#DCFCE7] text-[#166534] dark:bg-[#166534]/20 dark:text-[#86EFAC]",
        Branding: "bg-[#E5E7EB] text-[#1F2937] dark:bg-[#1F2937]/20 dark:text-[#9CA3AF]",
        Identity: "bg-[#DBEAFE] text-[#1E40AF] dark:bg-[#1E40AF]/20 dark:text-[#93C5FD]",
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
            }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Image with Hover Effect */}
            <Link href={project.liveUrl} className="block relative overflow-hidden aspect-[16/9] object-cover rounded-lg" target="_blank" rel="noopener noreferrer">
                <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={250}
                        className="object-contain aspect-[16/9] transition-transform duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                    <motion.div
                        className="absolute aspect-[16/9] object-cover inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={false}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                    >
                        <span className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium">Go to Website</span>
                    </motion.div>
                </motion.div>
            </Link>

            {/* Project Details */}
            <div className="mt-4">
                <div className="flex items-start gap-2 mb-2">
                    <Link
                        href={project.liveUrl}
                        className="text-lg font-semibold hover:text-gray-200 transition-colors flex-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.title}
                    </Link>
                    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                        <ArrowUpRight className="w-5 h-5 mt-1 flex-shrink-0" />
                    </motion.div>
                </div>

                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{project.description}</p>

                <div className="flex items-center justify-between mt-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={cn("text-xs font-medium px-3 py-1 rounded-full", tagColors[tag] || "bg-gray-800 text-gray-300")}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.githubUrl && (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 dark:hover:text-white hover:text-black transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span className="sr-only">GitHub Repository</span>
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}