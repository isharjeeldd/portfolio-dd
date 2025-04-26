"use client"

import { paragraphCss, subheadingCss } from "@/constants"
import { motion } from "framer-motion"
import { CustomButton2 } from "./custom-button"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import Link from "next/link"

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}


export default function UpworkSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="container max-w-7xl mx-auto pb-20"
        >
            <div className="relative overflow-hidden rounded-xl bg-transparent border dark:border-zinc-900 border-zinc-300">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-purple-900/20 rounded-full blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-purple-900/20 rounded-full blur-2xl"
                ></motion.div>

                <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            delay: 0.1,
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: [0, 5, -5, 0],
                            transition: { duration: 0.5 },
                        }}
                        className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <svg viewBox="0 0 32 32" className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor">
                            <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c0 1.859-1.516 3.375-3.375 3.375s-3.375-1.516-3.375-3.375v-9.484h-3.688v9.484c0 3.891 3.172 7.063 7.063 7.063 3.891 0 7.063-3.172 7.063-7.063v-1.589c0.714 1.484 1.583 2.984 2.615 4.302l-2.214 10.422h3.766l1.604-7.542c1.391 0.885 2.989 1.448 4.854 1.448 3.922 0 7.109-3.224 7.109-7.146 0-3.927-3.188-7.141-7.109-7.141z" />
                        </svg>
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={`${subheadingCss}`}
                        >
                            Let's work together on Upwork
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className={`${paragraphCss} my-4 w-full max-w-full md:max-w-[50%]`}
                        >
                            Looking for a skilled developer for your next project? Connect with me on Upwork where I deliver
                            high-quality, scalable solutions for clients worldwide.
                        </motion.p>

                        <motion.div variants={item} className="flex items-center justify-center md:justify-start gap-4 mt-6">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white md:p-3 !px-6 flex items-center space-x-2 text-sm font-medium"
                            >
                                <Link href="https://www.upwork.com/freelancers/~010ece6ddbb7345ea6" target='_blank' rel="noopener noreferrer">
                                    <span className='text-xs md:text-[14px] flex items-center justify-center gap-3'>
                                        <p>
                                            View Upwork Profile
                                        </p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </HoverBorderGradient>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}