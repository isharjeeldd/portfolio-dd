'use client'

import Link from 'next/link'
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Bitmoji from "../public/bitmoji/bitmoji_dd.png"
import { HoverBorderGradient } from './ui/hover-border-gradient'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className=""
    >
      <div className="container max-w-7xl mx-auto px-4 pt-16 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Profile Section */}
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={Bitmoji}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Muhammad Sharjeel</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed w-[90%]">
              A passionate full stack developer and blogger, crafting digital experiences
              that make a difference.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={item} className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">General</h3>
              <ul className="space-y-2 text-sm">
                {['Home', 'About', 'Blogs'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item === "Home" ? "/" : item.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Work</h3>
              <ul className="space-y-2 text-sm">
                {['Projects', 'Resume'].map((item) => (
                  <li key={item}>
                    <Link href={`${item === "Resume" ? "/resume-sharjeel.pdf" : `/${item.toLowerCase()}`}`} target={`${item === "Resume" ? "_blank" : "_self"}`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Button Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Get in Touch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Have a project in mind or want to collaborate? I'm always open to new opportunities.
            </p>

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-medium"
            >
              <Link href="/contact-me">
                <span className='flex items-center'>Contact me  <ArrowRight className="ml-2 h-4 w-4" /></span>
              </Link>
            </HoverBorderGradient>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={item}
          className="mt-10 py-6 border-t text-center text-sm text-gray-500 dark:text-gray-400"
        >
          © 2025. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}

