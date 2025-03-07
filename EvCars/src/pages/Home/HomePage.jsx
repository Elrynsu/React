import Faq from "./components/Faq";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
