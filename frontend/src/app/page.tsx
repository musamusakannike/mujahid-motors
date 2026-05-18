import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Fleet from "@/components/Fleet";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Fleet />
        <WhyUs />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
