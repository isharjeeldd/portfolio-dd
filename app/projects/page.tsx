import type { Metadata } from "next"
import ProjectsShowcase from "@/components/projects/projects-showcase"
import AllProjects from "@/components/projects/all-projects"
import ProjectTitle from "@/components/projects/project-title"
import { initialSectionCss } from "@/constants"

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Explore my portfolio of projects showcasing my skills and experience in web development.",
  openGraph: {
    title: "Projects | Portfolio",
    description: "Explore my portfolio of projects showcasing my skills and experience in web development.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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