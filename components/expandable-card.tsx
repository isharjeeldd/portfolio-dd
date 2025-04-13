"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import Link from 'next/link'
import { paragraphCss } from "@/constants";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Staggering between each child
        delayChildren: 0.2, // Delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const tagColors: Record<string, string> = {
    Design: "bg-[#DBEAFE] text-[#1E40AF] dark:bg-[#1E40AF]/20 dark:text-[#93C5FD]",
    RealEstate: "bg-[#FCE7F3] text-[#9D174D] dark:bg-[#9D174D]/20 dark:text-[#F9A8D4]",
    Presentation: "bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#5B21B6]/20 dark:text-[#C4B5FD]",
    Development: "bg-[#DCFCE7] text-[#166534] dark:bg-[#166534]/20 dark:text-[#86EFAC]",
    DevOps: "bg-[#E5E7EB] text-[#1F2937] dark:bg-[#1F2937]/20 dark:text-[#9CA3AF]",
    Identity: "bg-[#DBEAFE] text-[#1E40AF] dark:bg-[#1E40AF]/20 dark:text-[#93C5FD]",
  }

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-950 sm:rounded-3xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="w-[70%]">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-lg mb-1"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <Button variant={"secondary"} className="rounded-full">
                    <Link href={active.rerouteLink} target="_blank" className="font-medium">
                      {active.rerouteText}
                    </Link>
                  </Button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 "
                  >
                    {active.content}
                  </motion.div>
                  <div className="flex flex-wrap gap-2 pb-4">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn("text-xs font-medium px-3 py-1 rounded-full", tagColors[tag] || "bg-gray-800 text-gray-300")}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <motion.ul
        className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {projects.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={index}
            onClick={() => setActive(card)}
            className="flex flex-col rounded-xl cursor-pointer"
            variants={itemVariants}
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div className="h-fit overflow-hidden rounded-lg" layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={150}
                  src={card.image}
                  alt={card.title}
                  className="h-fit w-full rounded-lg object-cover object-top filter grayscale hover:grayscale-0 hover:scale-105 transition-all"
                />
              </motion.div>

              <div className="flex justify-center items-start flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className={`${paragraphCss} text-sm mt-1`}
                >
                  {card.description}
                </motion.p>
              </div>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn("text-xs font-medium px-3 py-1 rounded-full", tagColors[tag] || "bg-gray-800 text-gray-300")}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <X />
    </motion.svg>
  );
};

const projects = [
  {
    id: 1,
    tags: ["Design", "Development", "DevOps"],
    title: "PolyX Enterprise Suite",
    description: "A modular enterprise platform with microservices for auth, logging, notifications, and API testing.",
    image: "/projects/poly-x.png",
    slug: "polyx-enterprise-suite",
    rerouteText: "View live project",
    rerouteLink: "https://poly-x-alpha.vercel.app/sign-in",
    content:
      "PolyX is a full-stack microservices-based platform designed for enterprise use cases. Built using Node.js, Express, MongoDB, and Next.js, it features services for authentication, alerting, logging, and API testing. The frontend integrates Framer Motion, Zustand, and ShadCN to deliver a modular and animated experience, while backend services are containerized using Docker for deployment flexibility.",
  },
  {
    id: 2,
    tags: ["Research", "Interface", "RealEstate"],
    title: "Hallocasa Global Platform",
    description: "A real estate platform connecting international brokers and property listings across borders.",
    image: "/projects/hallocasa.png",
    rerouteLink: "https://hallocasa.com/properties?lang=en-US&curr=USD",
    rerouteText: "View live project",
    slug: "hallocasa-global-platform",
    content:
      "Hallocasa is a cross-border property tech solution supporting multi-language and multi-currency real estate listings. Built with Next.js 12, Tailwind CSS, SCSS, Redux Toolkit, and Material UI, the platform features robust broker filtering, responsive design, and global search tools. It enables agents and buyers to engage easily from anywhere in the world.",
  },
  {
    id: 3,
    tags: ["Design", "AI", "Development"],
    title: "wAI Industries Website",
    description: "Corporate site for an AI consultancy, built to showcase custom solutions and innovations.",
    image: "/projects/wai.png",
    rerouteLink: "https://www.waiindustries.com/",
    rerouteText: "View live project",
    slug: "wai-industries-website",
    content:
      "wAI Industries is a tech consultancy specializing in artificial intelligence applications. The website was designed with a bold, minimal aesthetic using Next.js, TypeScript, Tailwind CSS, and Framer Motion. It presents the company’s mission, service areas, and expertise in deploying generative AI solutions across different verticals.",
  },
]