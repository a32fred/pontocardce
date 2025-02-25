import Hero from "@/components/Hero/page";
import ProductsSection from "@/components/ProductsSection/ProductsSection";
import Testimonials from "@/components/Testimonials/page";
import Features from "@/components/Features/features";




export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <Features />
      <Testimonials />
    </div>
  );
}
