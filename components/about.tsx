"use client"

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { Codesandbox, Github, MapPin, UsersRound } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Link from "next/link";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LinkPreview } from "./ui/link-preview";
import { motion } from "framer-motion";
import { subheadingCss } from "@/constants";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animates children sequentially
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function About() {
  const features = [
    {
      title: (
        <div className="flex items-center space-x-2">
          <MapPin
            size={20}
            className="text-black dark:text-white"
          />
          <span className="text-sm font-medium text-black dark:text-white">
            Pakistan
          </span>
        </div>
      ),
      description: "",
      skeleton: <Location />,
      className:
        "col-span-1 lg:col-span-2 border lg:border-0 lg:border-r lg:border-b dark:border-neutral-800",
    },
    {
      title: (
        <>
          <div className="flex items-center space-x-2">
            <Codesandbox
              size={20}
              className="text-black dark:text-white"
            />
            <span className="text-sm font-medium text-black dark:text-white">
              Techstack
            </span>
          </div>
        </>
      ),
      description: "",
      skeleton: <DoubleTechStack />,
      className:
        "col-span-1 lg:col-span-4 border lg:border-0 lg:border-b dark:border-neutral-800",
    },
    {
      title: (
        <>
          <div className="flex items-center space-x-2">
            <UsersRound
              size={20}
              className="text-black dark:text-white"
            />
            <span className="text-sm font-medium text-black dark:text-white">
              Testimonials
            </span>
          </div>
        </>
      ),
      description: "",
      skeleton: <Testimonials />,
      className: "col-span-1 lg:col-span-4 border lg:border-0 lg:border-r dark:border-neutral-800",
    },
    {
      title: (
        <>
          <div className="flex items-center space-x-2">
            <Github
              size={20}
              className="text-black dark:text-white"
            />
            <span className="text-sm font-medium text-black dark:text-white">
              Github Stats
            </span>
          </div>
        </>
      ),
      description: "",
      skeleton: <GitHubStats />,
      className: "col-span-1 lg:col-span-2 border lg:border-0 dark:border-neutral-800",
    },
  ];
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // Animates when 20% of the section is in view
      variants={container}
      className="container max-w-7xl mx-auto px-4 py-24 pt-28 md:px-0" >
      <motion.div variants={item} className="w-full flex justify-between">
        <h2 className={`${subheadingCss}`}>
          About me
        </h2>
      </motion.div>

      <div className="relative mt-12">
        <motion.div
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-6 xl:border rounded-md dark:border-neutral-800"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={feature.className}
            >
              <FeatureCard>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </div>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const TechStack = ({ direction }: { direction: "right" | "left" }) => {
  const techStack = [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "GatsbyJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" },
    { name: "Shad-cn UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, // Placeholder icon since Shad-cn doesn't have an official icon
    { name: "Graph DB Ontotext", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }, // Using GraphQL icon as Ontotext doesn't have a specific one
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
  ];
  return (
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full flex-col space-y-2  relative">
        <InfiniteMovingCards
          items={techStack}
          direction={direction}
          speed="slow"
        />
      </div>
    </div>
  );
};

export const DoubleTechStack = () => {
  const techStack = [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "GatsbyJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" },
    { name: "Shad-cn UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, // Placeholder icon since Shad-cn doesn't have an official icon
    { name: "Graph DB Ontotext", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }, // Using GraphQL icon as Ontotext doesn't have a specific one
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
  ];
  return (
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full flex-col space-y-2  relative">
        <InfiniteMovingCards
          items={techStack}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={techStack}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export const Location = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export const GitHubStats = () => {
  return (
    <div className="flex flex-col gap-5 p-5 lg:p-0 items-start justify-center text-start h-full">
      <p className="w-full mt-8 text-xl text-start font-medium text-black dark:text-white">
        Activity overview
      </p>
      <div className="w-full text-sm text-neutral-500 dark:text-neutral-300 leading-6">
        <span>Contributed to </span>
        <LinkPreview url="https://alara.fintra.ai" className="font-bold">
          issmai/alara-ui {" "}
        </LinkPreview>
        <span>
          <LinkPreview url="https://www.synergyprimaryclinic.com" className="font-bold">
            technfo/synergynew
          </LinkPreview>,{" "}
          <LinkPreview url="https://poly-x-alpha.vercel.app" className="font-bold">
            issmai/polyX
          </LinkPreview>{" "}
          and 17 other repositories.</span>
      </div>
      <p className="italic w-full text-sm text-neutral-500 dark:text-neutral-300">
        44+ contributions in the last year
      </p>
      <Button
        variant={"secondary"}
        className="!rounded-full !px-6"
      >
        <Link target="_blank" href="https://github.com/isharjeeldd">
          <span>View github</span>
        </Link>
      </Button>
    </div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Sharjeel did an amazing job in dealing with our control and monitoring IOT project. He at times took the initiative to suggest better ways to accomplish our goals. I will definitely call on Sharjeel's services in the future.",
      name: "John Johnson",
      designation: "Product Owner at ONIT",
      src: "https://images.unsplash.com/photo-1660891950285-71ed267bf04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Sharjeel consistently demonstrated a high level of skill, creativity to our campaign including Motion Grpahics.",
      name: "Usman",
      designation: "",
      src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Sharjeel was highly effective in capturing functionality requirements and developing code to meet this functionality. His skills are very high for react javascript code writing and testing. Very few bugs ever came after he completed a sprint, which is a testament to his skills.",
      name: "John Johnson",
      designation: "Product Owner at ONIT",
      src: "https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}