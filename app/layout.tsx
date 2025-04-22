import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import Layout from '@/components/layout'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: {
    default: "Muhammad Sharjeel – Full Stack Developer",
    template: "%s | Muhammad Sharjeel – Full Stack Developer",
  },
  description:
    "I'm Muhammad Sharjeel, a full stack developer and blogger, building modern, scalable web experiences using Next.js, Tailwind CSS, and ShadCN UI. Explore my portfolio, projects, and blogs.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    url: "/",
    title: "Muhammad Sharjeel – Full Stack Developer",
    description:
      "I'm Muhammad Sharjeel, a full stack developer and blogger, building modern, scalable web experiences using Next.js, Tailwind CSS, and ShadCN UI. Explore my portfolio, projects, and blogs.",
    type: "website",
    images: [
      {
        url: "https://www.sharjeelafzaal.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Website Banner Image",
      },
    ],
    siteName: "Muhammad Sharjeel – Full Stack Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sharjeel – Full Stack Developer",
    description:
      "I'm Muhammad Sharjeel, a full stack developer and blogger, building modern, scalable web experiences using Next.js, Tailwind CSS, and ShadCN UI. Explore my portfolio, projects, and blogs.",
    images: [
      {
        url: "https://www.sharjeelafzaal.com/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Website Banner Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "portfolio",
    "website",
    "portfolio website",
    "shad cn website",
    "aceternity website",
    "portfolio website",
    "best portfolio sites",
    "best portfolio website",
    "2025 portfolio",
  ],
}

export const viewport = "width=device-width, initial-scale=1, shrink-to-fit=no"
export const themeColor = "#123456"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} dark`} suppressHydrationWarning>
      <head />
      <body
        className={`${poppins.className} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <TooltipProvider disableHoverableContent>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Layout>
              <main className="grid self-center w-full">
                <Toaster />
                {children}
              </main>
            </Layout>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}