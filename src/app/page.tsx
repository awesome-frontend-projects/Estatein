import Cta from "@/components/Cta";
import Feature from "./home-components/Feature";
import Hero from "./home-components/Hero";
import Testimonials from "./home-components/Testimonials";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Feature />
      <Testimonials />
      <Cta />
    </>
  );
}
