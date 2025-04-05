"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { projectsData } from "@/data/projects"
import ProjectCard from "./project-card"
import ProjectDetails from "./project-details"

export default function ProjectsShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)
    const rightPanelRef = useRef<HTMLDivElement>(null)
    const [activeProject, setActiveProject] = useState(0)
    const [isRightPanelFixed, setIsRightPanelFixed] = useState(true)

    // Create refs for each project section
    const projectRefs = useRef(projectsData.map(() => useRef<HTMLDivElement>(null)))

    const handleScroll = useCallback(() => {
        const scrollPosition = (window.scrollY - 1000) + window.innerHeight / 2

        // Find which project is currently in view
        let currentActiveProject = 0
        projectRefs.current.forEach((ref, index) => {
            const element = ref.current
            if (!element) return

            const rect = element.getBoundingClientRect()
            const offsetTop = element.offsetTop
            const offsetBottom = offsetTop + rect.height

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                currentActiveProject = index
            }
        })

        setActiveProject(currentActiveProject)

        // Check if we've scrolled past all projects
        const lastProjectRef = projectRefs.current[projectRefs.current.length - 1].current
        if (lastProjectRef) {
            const lastProjectBottom = lastProjectRef.offsetTop + lastProjectRef.offsetHeight
            setIsRightPanelFixed((window.scrollY - 1000) < lastProjectBottom - window.innerHeight)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    return (
        //py-24 pt-28
        <div>
            <div ref={containerRef} className="relative flex flex-col lg:flex-row">
                {/* Left side - scrollable content */}
                <div className="w-full lg:w-[60%]">
                    <div className="flex flex-col">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                ref={projectRefs.current[index]}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6,
                                    ease: "easeOut",
                                }}
                                className="min-h-screen flex items-center justify-center"
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right side - fixed content that becomes absolute */}
                <div
                    ref={rightPanelRef}
                    className={`w-full lg:w-[40%] ${isRightPanelFixed ? "lg:sticky lg:top-0" : "lg:absolute lg:bottom-0 lg:right-0" //lg:right-[-10%]
                        } lg:h-screen`}
                >
                    <div className="h-full flex items-center justify-center p-8">
                        <div className="relative w-full max-w-xl">
                            {projectsData.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: activeProject === index ? 1 : 0,
                                        y: activeProject === index ? 0 : 20,
                                        pointerEvents: activeProject === index ? "auto" : "none",
                                    }}
                                    transition={{ duration: 0.6, delay: 0.2}}
                                    className="absolute inset-0"
                                    style={{
                                        position: activeProject === index ? "relative" : "absolute",
                                        visibility: activeProject === index ? "visible" : "hidden",
                                    }}
                                >
                                    <ProjectDetails project={project} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}