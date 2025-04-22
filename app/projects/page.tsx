import type { Metadata } from "next"
import ProjectsShowcase from "@/components/projects/projects-showcase"
import AllProjects from "@/components/projects/all-projects"
import ProjectTitle from "@/components/projects/project-title"
import { initialSectionCss } from "@/constants"

export const metadata: Metadata = {
  title: "Projects | Muhammad Sharjeel – Full Stack Developer",
  description:
    "Explore a curated selection of development projects by Muhammad Sharjeel, showcasing skills in frontend, backend, UI design, and scalable system architecture.",
  openGraph: {
    title: "Projects | Muhammad Sharjeel – Full Stack Developer",
    description:
      "Browse featured work from Muhammad Sharjeel, highlighting full stack applications, modern UIs, and creative engineering solutions using Next.js, Tailwind, and more.",
    url: "https://www.sharjeelafzaal.com/projects",
    siteName: "Muhammad Sharjeel – Portfolio",
    images: [
      {
        url: "https://www.sharjeelafzaal.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Sharjeel Projects Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Muhammad Sharjeel – Full Stack Developer",
    description:
      "Take a look at my portfolio projects — built with cutting-edge technologies and a strong focus on developer experience and UI finesse.",
    images: ["https://www.sharjeelafzaal.com/twitter-image.png"],
  },
  keywords: [
    "Muhammad Sharjeel projects",
    "developer portfolio",
    "frontend projects",
    "Next.js portfolio",
    "Tailwind CSS portfolio",
    "React project showcase",
    "web development portfolio",
    "developer case studies",
    "software engineering projects",
  ],
  authors: [{ name: "Muhammad Sharjeel", url: "https://www.sharjeelafzaal.com" }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProjectsPage() {
  return (
    <div className={`${initialSectionCss} !pt-0`}>
      <ProjectTitle />
      <ProjectsShowcase />
      <AllProjects />
    </div>
  )
}