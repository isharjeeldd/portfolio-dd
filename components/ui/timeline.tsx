"use client";
import { paragraphCss, subheadingCss } from "@/constants";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Brain, Lightbulb, Code, Zap, Compass } from "lucide-react"
import { LinePullUp } from "../line-pull-up";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const floatingVariant = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * 0.2,
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    }),
  }

  const pulseVariant = {
    initial: { scale: 1, opacity: 0.7 },
    animate: (i: number) => ({
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        delay: i * 0.3,
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    }),
  }

  // Adjusted positions to ensure no elements go too close to the edges
  const skillNodes = [
    {
      icon: Brain,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
      size: "w-14 h-14",
      position: "top-[22%] left-[15%]",
    },
    {
      icon: Lightbulb,
      color: "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300",
      size: "w-16 h-16",
      position: "top-[40%] left-[40%]",
    },
    {
      icon: Code,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
      size: "w-14 h-14",
      position: "bottom-[25%] left-[25%]",
    },
    {
      icon: Zap,
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
      size: "w-14 h-14",
      position: "bottom-[20%] right-[25%]",
    },
    {
      icon: Compass,
      color: "bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300",
      size: "w-14 h-14",
      position: "top-[30%] right-[35%]",
    },
  ]

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Heading and description */}
          <motion.div whileInView="show" viewport={{ once: true }} className="w-full">
            <LinePullUp text={["Education & Experience"]} gradient={false} className={subheadingCss} />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`${paragraphCss} w-full mb-8 mt-2`}>
              A journey of knowledge and expertise—explore the academic background and professional experience that shape
              our skills, insights, and industry leadership.
            </motion.p>
          </motion.div>

          {/* Right side - Abstract knowledge visualization */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariant}
            className="relative h-[300px] md:h-full min-h-[300px] rounded-2xl overflow-hidden"
          >

            {/* Skill nodes */}
            {skillNodes.map((node, i) => (
              <motion.div
                key={`node-${i}`}
                custom={i}
                initial="initial"
                animate="animate"
                variants={i % 2 === 0 ? floatingVariant : i % 3 === 0 ? floatingVariant : pulseVariant}
                className={`absolute ${node.position} ${node.size} rounded-full ${node.color} flex items-center justify-center shadow-lg`}
              >
                <node.icon size={24} />
              </motion.div>
            ))}

          </motion.div>
        </div>

      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-900 via-violet-800 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
