
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import DiscordPreview from "@/components/DiscordPreview";
import AudienceFit from "@/components/AudienceFit";
import Testimonials from "@/components/Testimonials";
import Safety from "@/components/Safety";
import JoinSteps from "@/components/JoinSteps";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <DiscordPreview />
      <AudienceFit />
      <Testimonials />
      <Safety />
      <JoinSteps />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
