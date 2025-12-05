import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Methods from "@/components/sections/methods";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Solutions from "@/components/sections/solutions";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Testimonials />
      <Services />
      <Solutions />
      <Methods />
      <Faq />
      <Footer />
    </main>
  );
}