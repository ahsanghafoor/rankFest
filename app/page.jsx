import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesCarousel from '@/components/home/CaseStudiesCarousel';
import ProcessSection from '@/components/home/ProcessSection';
import VideoTestimonialsSection from '@/components/home/VideoTestimonialsSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesCarousel />
      {/* <VideoTestimonialsSection /> */}
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
