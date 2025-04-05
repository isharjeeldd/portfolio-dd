"use client"

import React from 'react'
import { motion } from "framer-motion";
import { headingCss, paragraphCss } from '@/constants';
import Image from 'next/image';
import Bitmoji from "../../public/bitmoji/bitmoji4.png"
import { LinePullUp } from '../line-pull-up';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

const ProjectTitle = () => {
    const textArray = ["Transforming lines of", "code into timeless", "online experiences"]

    return (
        <div className='text-start flex flex-wrap items-center'>
            {/* Main heading */}
            {/* md:w-[50%] */}

            <div className="h-[100vh] w-full flex flex-wrap justify-between items-center">
                <div className="space-y-6 text-start w-full md:w-[50%]">
                    {/* Main heading */}
                    <LinePullUp text={textArray} gradient={false} className={headingCss} />

                    {/* Description */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`${paragraphCss} mb-8 mr-auto w-full max-w-2xl`}
                    >
                        A collection of my best work—where ideas transform into impactful digital experiences. From sleek web designs
                        to dynamic applications, each project reflects my passion for problem-solving, and attention to detail.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-medium"
                        >
                            <Link href="/contact-me">
                                <span className='flex items-center'>Get in touch  <ArrowRight className="ml-2 h-4 w-4" /></span>
                            </Link>
                        </HoverBorderGradient>
                    </motion.div>
                </div>
                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-[30rem] h-[30rem] mx-auto mb-4 hidden md:block"
                >
                    <Image
                        src={Bitmoji}
                        alt="Avatar"
                        className="relative z-10"
                        priority
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectTitle