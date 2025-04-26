import { Metadata } from 'next'
import ContactForm from '@/components/contact/contact-form'
import { initialSectionCss } from '@/constants'
import UpworkSection from '@/components/upwork-section'

export const metadata: Metadata = {
  title: "Contact Me | Muhammad Sharjeel – Full Stack Developer",
  description:
    "Want to work together or discuss a project? Reach out to Muhammad Sharjeel — a full stack developer focused on building user-centric, scalable web solutions.",
  openGraph: {
    title: "Contact Me | Muhammad Sharjeel – Full Stack Developer",
    description:
      "Get in touch with Muhammad Sharjeel for project collaborations, freelance work, or just to say hello. Always open to exciting opportunities in tech.",
    url: "https://www.sharjeelafzaal.com/contact",
    siteName: "Muhammad Sharjeel – Portfolio",
    images: [
      {
        url: "https://www.sharjeelafzaal.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Muhammad Sharjeel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me | Muhammad Sharjeel",
    description:
      "Let's connect! Reach out to full stack developer Muhammad Sharjeel to discuss your ideas, collaborations, or freelance opportunities.",
    images: ["https://www.sharjeelafzaal.com/twitter-image.png"],
  },
  keywords: [
    "contact Muhammad Sharjeel",
    "freelance web developer",
    "full stack developer contact",
    "collaborate with developer",
    "hire a Next.js developer",
    "contact software engineer",
    "reach out to developer",
    "Muhammad Sharjeel contact",
  ],
  authors: [{ name: "Muhammad Sharjeel", url: "https://www.sharjeelafzaal.com" }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className={initialSectionCss}>
      <main className="flex-1">
        <ContactForm />
        <div className='mt-10'>
          <UpworkSection />
        </div>
      </main>
    </div>
  )
}

