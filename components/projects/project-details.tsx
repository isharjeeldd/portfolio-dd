"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Sparkle } from "lucide-react"
import type { Project } from "@/types/project"
import { Badge } from "@/components/ui/badge"

interface ProjectDetailsProps {
    project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
            <motion.div variants={item} className="w-full flex gap-10 items-center mb-4">
                <h2 className={`text-2xl md:text-3xl font-bold flex items-center gap-5`}><div className="h-1 w-7 dark:bg-white bg-black rounded-full"></div> {project.title}</h2>
                {project.githubUrl && (
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub Repository</span>
                    </Link>
                )}
            </motion.div>

            <div className="pl-12">

                <motion.p variants={item} className="text-sm text-muted-foreground mb-6">
                    {project.description}
                </motion.p>

                <motion.div variants={item} className="mb-6">
                    <ul className="space-y-2 text-sm">
                        {project.features.map((feature, index) => (
                            <motion.li key={index} variants={item} className="flex items-start gap-2">
                                <Sparkle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div variants={item}>
                    <h3 className="text-lg font-medium mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="rounded-full px-3 py-1 bg-background hover:bg-background">
                                {tech.icon && <span className="mr-1">{tech.icon}</span>}
                                {tech.name}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}