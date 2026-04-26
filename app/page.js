import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import VideoTestimonialsSection from '@/components/VideoTestimonialsSection'
import CTASection from '@/components/CTASection'
import FreeAuditSection from '@/components/FreeAuditSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      {/* <VideoTestimonialsSection /> */}
      <CTASection />
      <FreeAuditSection />
    </>
  )
}
