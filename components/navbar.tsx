"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"
import { Button } from "./ui/button"
import { NavItem } from "./ui/nav-item"
import Bitmoji from "../public/bitmoji/bitmoji_dd.png"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-me", label: "Contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const glassClasses = "bg-black/40 dark:bg-black/80 backdrop-blur-lg border border-[rgba(128,128,128,0.11)]"

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 lg:py-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={Bitmoji}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </Link>
          </motion.div>

          <nav className="hidden md:block">
            <motion.div
              className={`flex items-center rounded-full ${glassClasses} px-4 py-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <NavItem key={index} href={item.href} label={item.label} />
              ))}
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div
              className={`rounded-full ${glassClasses}`}
            >
              <ThemeToggle />
            </div>
            <div
              className={`md:hidden rounded-full ${glassClasses}`}
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </motion.header>
  )
}

