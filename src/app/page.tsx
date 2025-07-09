import Cta from "@/components/Cta";
import Feature from "./home-components/Feature";
import Hero from "./home-components/Hero";
import HeroBottom from "./home-components/HeroBottom";
import Testimonials from "./home-components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroBottom />
      <Feature />
      <Testimonials />
      <Cta />
    </>
  );
}
