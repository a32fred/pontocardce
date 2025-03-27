import Hero from "@/components/Hero/page";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import Testimonials from "@/components/Testimonials/page";
import Features from "@/components/Features/features";
import FaqSection  from '@/components/Faq/faq-section'


export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <Features />
      <FaqSection />
      <Testimonials />
    </div>
  );
}
