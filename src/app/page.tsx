import Cta from "@/components/Cta";
import Feature from "./home-components/Feature";
import Hero from "./home-components/Hero";
import Testimonials from "./home-components/Testimonials";
import HomeCards from "./home-components/HomeCards";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCards />
      <Feature />
      <Testimonials />
      <Cta />
    </>
  );
}
