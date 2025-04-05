export interface ExperienceProps {
    company: string
    role: string
    startDate: string
    endDate: string
    jobType: string
    location: string
    projects: {
        name: string
        description: string[]
    }[]
}

export const issmai_experience: ExperienceProps[] = [
    {
        company: "ISSM.AI",
        role: "Full Stack Developer",
        startDate: "Mar, 2024",
        endDate: "Present",
        jobType: "Hybrid",
        location: "Islamabad",
        projects: [
            {
                name: "Alara Bot Builder Project",
                description: [
                    "Worked extensively with ReactJS on the AI bot builder platform (Alara Bot Builder). Key modules included:",
                    "RBAC system (Role-Based Access Control)",
                    "Bot Builder for conversational flows",
                    "Journeys Workflows for automated interactions",
                    "Omni-Channel Chat System for unified communication",
                    "Conversation Analytics for data insights",
                    "Frontend Stack: React, Chakra UI, Iconify Icons, Axios, Framer Motion",
                    "Zustand for state management, Zod for form schema validation with React-Hook-Form",
                    "Project Management: Sprint planning, weekly sprints, daily scrum meetings",
                    "Used Shortcut for task and project management",
                ],
            },
            {
                name: "PolyX Project",
                description: [
                    "Worked with a team of 5 developers on a microservices-based project. Key modules developed:",
                    "PolyAuth: Authentication and Role-Based Access Control (RBAC)",
                    "PolyLogs: Centralized logging system (application, API, system logs)",
                    "PolyAlerts: Alert system for sending emails, SMS, and push notifications",
                    "PolyInsights: Analytics for business insights",
                    "Frontend: TypeScript, Next.js 14, Tailwind CSS, Shad-cn/Aceternity component library, Framer Motion",
                    "Backend: Node.js, Express.js, MongoDB",
                    "Task Management: Used ClickUp for efficient task and project handling",
                ],
            },
            {
                name: "PolyApi - API Management Tool",
                description: [
                    "Developed an API management tool for testing CRUD APIs (GET, POST, PUT, PATCH, DELETE). Key features include:",
                    "Tabbed interface for managing multiple API requests",
                    "Ability to save requests and organize them into collections",
                    "Dynamic input fields for entering API endpoints",
                    "Params table for adding query parameters",
                    "Request execution with real-time response display",
                    "Frontend Stack: Next.js 15, TypeScript, Tailwind CSS, Shad-cn, Zustand for state management",
                    "Backend Stack: Node.js, Express.js, TypeScript, MongoDB",
                    "Project Management: Utilized ClickUp for task tracking and sprint management"
                ]
            }
        ],
    },
]

export const codefrenetics_experience: ExperienceProps[] = [
    {
        company: "CodeFrenetics",
        role: "MERN Stack Developer",
        startDate: "Aug, 2021",
        endDate: "Mar, 2024",
        jobType: "On-Site",
        location: "Islamabad",
        projects: [
            {
                name: "Real Estate Web App Development",
                description: [
                    "Developed a robust real estate platform using Next.js with TypeScript.",
                    "Frontend design implemented with Material UI and Tailwind CSS for a smooth, customized UI.",
                    "Utilized Redux, Redux Toolkit, and Redux Thunk for efficient state management.",
                    "Live Project: [HalloCasa Real Estate](https://new-qa.hallocasa.com/properties)."
                ],
            },
            {
                name: "IoT Control and Monitoring System",
                description: [
                    "Collaborated on an ERP system using React Class Components with TypeScript to enhance data safety.",
                    "Implemented Graph DB (Ontotext) and MongoDB as core databases.",
                    "Developed REST APIs and reusable UI components for maintainability.",
                    "Live Project: [ONIT Network](https://app.onitnetwork.com/#ONIT)."
                ],
            },
            {
                name: "Freelancer Platform Project",
                description: [
                    "Contributed to the development of a freelancer platform using Functional React Components.",
                    "Implemented Material UI for front-end design and Redux for state management.",
                    "Integrated Stripe API for seamless payment processing.",
                    "Live Project: [Synerge Freelancer Platform](https://app.synerge.io/auth/client-landing-page)."
                ],
            },
            {
                name: "UI/UX Design and Development",
                description: [
                    "Designed user interfaces with Figma, focusing on responsive and intuitive UX.",
                    "Developed modern, user-friendly interfaces using ReactJS.",
                ],
            },
            {
                name: "Agile Methodologies",
                description: [
                    "Participated actively in scrum meetings with QA and project managers.",
                    "Worked in 2-week sprint cycles to deliver high-quality, iterative improvements.",
                ],
            },
            {
                name: "Static Website Development",
                description: [
                    "Developed multiple one-page static websites using Gatsby framework.",
                    "Demonstrated expertise in front-end development and static site generation.",
                ],
            },
        ],
    },
];

export const education: ExperienceProps[] = [
    {
        company: "National University of Modern Languages",
        role: "Bachelor of Computer Science",
        startDate: "Sep, 2017",
        endDate: "Jul, 2021",
        location: "Islamabad",
        jobType: "",
        projects: [
            {
                name: "Android application based on Neural Style Transfer and Deep Learning.",
                description: [
                    "Developed a mobile application using Java and Android Studio.",
                    "Implemented a neural style transfer algorithm to apply artistic styles to images.",
                    "Utilized deep learning techniques to enhance image processing capabilities.",
                ]
            }
        ],
    }
];