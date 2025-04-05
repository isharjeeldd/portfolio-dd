import type React from "react"
export interface Technology {
    name: string
    icon?: React.ReactNode
}

export interface Project {
    id: string
    title: string
    shortDescription: string
    description: string
    image: string
    color: string
    textColor: string
    features: string[]
    technologies: Technology[]
    githubUrl?: string
    liveUrl: string
}