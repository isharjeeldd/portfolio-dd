'use client'

import { motion } from "framer-motion"
import { ExpandableCard } from "./expandable-card"
import { subheadingCss } from "@/constants"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
}

export default function RecentProjects() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-24 pt-28 md:px-0">
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
          <h2 className={`${subheadingCss}`}>Featured Projects</h2>
        </motion.div>
      </motion.section>
      <ExpandableCard />
    </section>
  )
}

