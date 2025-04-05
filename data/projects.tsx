import { Project } from "@/types/project"
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiFramer,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiZod,
    SiSanity,
} from "react-icons/si"

export const projectsData: Project[] = [
    {
        id: "next-ventures",
        title: "Next Ventures",
        shortDescription:
            "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
        description:
            "Developed a platform for virtual pitch competitions using Next.js 15, enabling smooth idea sharing and exploration with optimal performance.",
        image: "/placeholder.svg?height=450&width=800",
        color: "bg-pink-600",
        textColor: "text-pink-600",
        features: [
            "Leveraged Partial Prerendering and After for faster loading.",
            "Simplified idea submission with a clean, intuitive design.",
            "Enhanced browsing with seamless performance optimization.",
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
            { name: "React", icon: <SiReact className="h-4 w-4" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
            { name: "Framer Motion", icon: <SiFramer className="h-4 w-4" /> },
            { name: "Sanity CMS", icon: <SiSanity className="h-4 w-4" /> },
        ],
        githubUrl: "https://github.com/username/next-ventures",
        liveUrl: "https://next-ventures.vercel.app",
    },
    {
        id: "zenith-minds",
        title: "Zenith Minds",
        shortDescription: "A platform connecting students and instructors for enhanced learning experiences.",
        description:
            "Developed ZenithMinds, an educational platform connecting students and instructors, fostering global collaboration and continuous learning.",
        image: "/placeholder.svg?height=450&width=800",
        color: "bg-blue-700",
        textColor: "text-blue-700",
        features: [
            "Built with Next.js, React, and TypeScript for scalability.",
            "Styled using Tailwind CSS with animations by Framer Motion.",
            "Used Zustand for state management and Zod for validation.",
            "Integrated MongoDB and RESTful APIs with Node.js and Express.",
            "Designed a user-friendly interface for seamless interactions.",
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
            { name: "React", icon: <SiReact className="h-4 w-4" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
            { name: "Framer Motion", icon: <SiFramer className="h-4 w-4" /> },
            { name: "MongoDB", icon: <SiMongodb className="h-4 w-4" /> },
            { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4" /> },
            { name: "Express", icon: <SiExpress className="h-4 w-4" /> },
            { name: "Zod", icon: <SiZod className="h-4 w-4" /> },
        ],
        githubUrl: "https://github.com/username/zenith-minds",
        liveUrl: "https://zenith-minds.vercel.app",
    },
    {
        id: "portfolio-site",
        title: "Portfolio Website",
        shortDescription: "A modern portfolio website showcasing projects and skills with interactive elements.",
        description:
            "Designed and developed a personal portfolio website with a focus on performance, accessibility, and modern design principles.",
        image: "/placeholder.svg?height=600&width=800",
        color: "bg-purple-700",
        textColor: "text-purple-700",
        features: [
            "Implemented responsive design for all device sizes",
            "Created smooth animations and transitions using Framer Motion",
            "Optimized for performance with Next.js App Router",
            "Integrated dark/light mode with system preference detection",
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
            { name: "React", icon: <SiReact className="h-4 w-4" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
            { name: "Framer Motion", icon: <SiFramer className="h-4 w-4" /> },
        ],
        githubUrl: "https://github.com/username/portfolio",
        liveUrl: "https://portfolio.vercel.app",
    },
]