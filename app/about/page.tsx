import AboutHome from '@/components/about-home'
import { EducationExperience } from '@/components/education-experience'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Me | Muhammad Sharjeel – Full Stack Developer",
  description:
    "Get to know Muhammad Sharjeel, a full stack developer obsessed with developer experience, scalability, and building user-friendly digital solutions.",
  openGraph: {
    title: "About Me | Muhammad Sharjeel – Full Stack Developer",
    description:
      "Learn more about Muhammad Sharjeel — his journey as a developer, his passion for robust and scalable web apps, and his approach to modern development.",
    url: "https://www.sharjeelafzaal.com/about",
    siteName: "Muhammad Sharjeel – Portfolio",
    images: [
      {
        url: "https://www.sharjeelafzaal.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "About Muhammad Sharjeel",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Muhammad Sharjeel",
    description:
      "Discover more about Muhammad Sharjeel – full stack developer focused on developer experience and clean, scalable web systems.",
    images: ["https://www.sharjeelafzaal.com/twitter-image.png"],
  },
  keywords: [
    "Muhammad Sharjeel",
    "about Muhammad Sharjeel",
    "full stack developer",
    "developer profile",
    "software engineer portfolio",
    "Next.js developer",
    "web developer in Pakistan",
    "JavaScript engineer",
    "Tailwind CSS developer",
  ],
  authors: [{ name: "Muhammad Sharjeel", url: "https://www.sharjeelafzaal.com" }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {

  return (
    // px-4 py-24 md:px-0 pt-44 md:pt-48
    <div className="container max-w-7xl mx-auto px-4 md:px-0">
      <AboutHome />
      <EducationExperience />
    </div>
  )
}

