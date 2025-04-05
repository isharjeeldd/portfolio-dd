'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavItemProps {
  href: string
  label: string
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className="relative px-4 py-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 text-sm font-medium text-white transition-colors">
        {label}
      </span>
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.span
            className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/20"
            layoutId="navBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </Link>
  )
}

