import { Metadata } from 'next'
import ContactForm from '@/components/contact/contact-form'
import { initialSectionCss } from '@/constants'

export const metadata: Metadata = {
  title: "Contact Me | Muhammad Sharjeel",
  description: "Get in touch with Muhammad Sharjeel for collaborations, project inquiries, or just to say hello!",
  openGraph: {
    title: "Contact Me | Muhammad Sharjeel",
    description: "Get in touch with Muhammad Sharjeel for collaborations, project inquiries, or just to say hello!",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className={initialSectionCss}>
      <main className="flex-1">
        <ContactForm />
      </main>
    </div>
  )
}

