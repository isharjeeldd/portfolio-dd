"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import * as React from "react"

export function LinePullUp({
    text,
    className = "",
    gradient = false
}: {
    text: string | string[]
    className?: string
    gradient: boolean
}) {
    // Handle both string with newlines and array of strings
    const lines = Array.isArray(text) ? text : text.split("\n")

    const containerRef = React.useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })

    return (
        <div ref={containerRef} className="flex flex-col">
            {lines.map((line, i) => (
                <div
                    key={i}
                    className="overflow-hidden"
                    // Use padding instead of fixed height to ensure text isn't cut off
                    style={{
                        paddingTop: "0.1em",
                        paddingBottom: "0.5em",
                        marginBottom: "0.3em",
                    }}
                >
                    <motion.div
                        initial={{ y: "100%", opacity: 0.2 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0.2 }}
                        transition={{
                            y: {
                                type: "spring",
                                damping: 15,
                                stiffness: 80,
                                delay: i * 0.1,
                            },
                            opacity: {
                                duration: 0.4,
                                delay: i * 0.1,
                            },
                        }}
                        className={cn("block text-xl sm:text-4xl font-bold md:text-6xl", className)}
                        style={{
                            transformOrigin: "bottom",
                            lineHeight: 0.9,
                            display: "block",
                        }}
                    >
                        <span className={`${i === lines.length - 1 && gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300 dark:from-purple-800 dark:to-purple-300" : ""}`}>
                            {line.trim() === "" ? <span>&nbsp;</span> : line}
                        </span>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}