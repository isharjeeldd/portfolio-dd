"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className={cn(
        "relative w-full border dark:border-zinc-800 rounded-3xl overflow-hidden", //max-w-xl
        "transition-all duration-300 ease-in-out",
        "group hover:shadow-xl",
        project.color,
      )}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-8">
        <h3 className="text-lg md:text-xl font-medium md:w-[80%] w-full mb-2">{project.shortDescription}</h3>
        <motion.div
          className="absolute right-8 top-8"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowRight className="h-6 w-6" />
        </motion.div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2}
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            View Live
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

