import { Project } from "@/types/project";
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
    SiRedux,
    SiMaterialdesign,
} from "react-icons/si";

export const projectsData: Project[] = [
    {
        id: "polyx-platform",
        title: "PolyX",
        shortDescription:
            "A modular enterprise platform with microservices for authentication, logging, alerts, and API management.",
        description:
            "PolyX is an advanced, microservice-based enterprise solution featuring tenant-aware modules for Auth, Notifications, Logging, and API handling. Built with performance, scalability, and modularity in mind, it supports role-based access control, dynamic JWT payloads, and secure OAuth integrations.",
        image: "/projects/poly-x.png",
        color: "bg-emerald-700",
        textColor: "text-emerald-700",
        features: [
            "Built using a modular microservices architecture",
            "Implemented RBAC, JWT customization, and social login support",
            "Interactive dashboards using Framer Motion and Zustand for state",
            "Supports Dockerized deployment with NGINX and MongoDB",
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
        githubUrl: "https://github.com/issmai/poly-x",
        liveUrl: "https://poly-x-alpha.vercel.app/sign-in",
    },
    {
        id: "hallocasa",
        title: "Hallocasa",
        shortDescription:
            "A global real estate platform facilitating international property listings and broker engagement.",
        description:
            "Hallocasa is a cross-border property tech platform enabling buyers, sellers, and real estate agents to collaborate and access listings in multiple currencies and languages. The interface features detailed broker profiles, map integration, and dynamic filters.",
        image: "/projects/hallocasa.png",
        color: "bg-orange-600",
        textColor: "text-orange-600",
        features: [
            "Built with Next.js 12 and Material UI for a clean, responsive UI",
            "Integrated multilingual and multi-currency support",
            "Dynamic filtering, property search, and broker contact flows",
            "Used Redux Toolkit for efficient global state handling",
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
            { name: "React", icon: <SiReact className="h-4 w-4" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
            { name: "Redux Toolkit", icon: <SiRedux className="h-4 w-4" /> },
            { name: "Material UI", icon: <SiMaterialdesign className="h-4 w-4" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        ],
        githubUrl: "https://github.com/isharjeeldd/hallocasa-next",
        liveUrl: "https://hallocasa.com/brokers?lang=en-US&curr=USD",
    },
    {
        id: "portfolio-site",
        title: "Portfolio Website",
        shortDescription:
            "A modern portfolio showcasing projects, writing, and motion design work.",
        description:
            "This site is a personal showcase of my skills, built using the latest web technologies. Designed with a focus on performance, visual polish, and accessibility, it features blog integration, animations, and a responsive layout.",
        image: "/opengraph-image.png",
        color: "bg-purple-700",
        textColor: "text-purple-700",
        features: [
            "Built using the App Router in Next.js 15+",
            "Framer Motion powered animations and section reveals",
            "Theme toggler with system preference support",
            "Fully responsive and SEO-optimized",
        ],
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
            { name: "React", icon: <SiReact className="h-4 w-4" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
            { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
            { name: "Framer Motion", icon: <SiFramer className="h-4 w-4" /> },
        ],
        githubUrl: "https://github.com/isharjeeldd/portfolio-dd",
        liveUrl: "https://www.sharjeelafzaal.com",
    },
];