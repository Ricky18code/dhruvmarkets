import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
