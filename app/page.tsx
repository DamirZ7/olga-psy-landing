import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { MethodsSection } from '@/components/sections/methods-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';
import { BlogPreviewSection } from '@/components/sections/blog-preview-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}