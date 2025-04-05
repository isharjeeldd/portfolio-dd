import AboutHome from '@/components/about-home'
import { EducationExperience } from '@/components/education-experience'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | Muhammad Sharjeel',
  description: 'Learn more about Muhammad Sharjeel, a full stack developer passionate about creating innovative web solutions.',
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

