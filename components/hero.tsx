'use client'

import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { headingCss, initialSectionCss, paragraphCss } from '@/constants'
import { LinePullUp } from './line-pull-up'
import Image from 'next/image'
import Bitmoji from "../public/bitmoji/bitmoji_dd.png"
import { CustomButton2 } from './custom-button'
import { HoverBorderGradient } from './ui/hover-border-gradient'

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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function Hero() {

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/isharjeeldd",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-sharjeel-254a48108/",
    },
    {
      name: "Instagram",
      icon: Instagram, // Custom icon
      href: "https://www.instagram.com/i.sharjeelafzaal/",
    },
    {
      name: "Facebook",
      icon: Facebook, // Custom icon
      href: "https://www.facebook.com/i.sharjeelafzaal/",
    },
  ];

  const textArray = ["Hi, I'm Sharjeel!", "Welcome to my corner", "of the web!"]

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className={`${initialSectionCss}`}
    >
      <div className="max-w-3xl grid items-center mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-20 h-20 mx-auto mb-4 hidden md:block"
        >
          <Image
            src={Bitmoji}
            alt="Avatar"
            className="relative z-10"
            priority
          />
        </motion.div>
        <LinePullUp text={textArray} gradient={true} className={`${headingCss}`} />
        <motion.p
          variants={item}
          className={`${paragraphCss} mb-8 mt-4 mx-auto text-center w-full max-w-full md:max-w-[50%]`}
        >
          Obsessed with developer experience, robust, scalable and user-friendly applications.
        </motion.p>

        <motion.div variants={item} className="mb-8 flex items-center gap-4 justify-center">
          <CustomButton2 href="/resume-sharjeel.pdf" target='_blank' size='md' spinSpeed='fast'>
            <span className='text-xs md:text-[14px] md:p-1'>Download Resume</span>
          </CustomButton2>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white md:p-3 !px-6 flex items-center space-x-2 text-sm font-medium"
          >
            <Link href="/about">
              <span className='text-xs md:text-[14px]'>Know more about me</span>
            </Link>
          </HoverBorderGradient>
        </motion.div>
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((social, i) => (
            <motion.div
              key={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center justify-center rounded-full bg-secondary/30 text-foreground hover:text-primary transition-colors"
              >
                <social.icon className="size-5" />
                <span className="sr-only">{social.href.split('.com')[0].split('//')[1]}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

