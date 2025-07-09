import React from "react";
import OurJourney from "./components/OurJourney";
import OurValues from "./components/OurValues";
import OurAchievements from "./components/OurAchievements";
import HowItWork from "./components/HowItWork";
import OurTeam from "./components/OurTeam";
import OurClients from "./components/OurClients";
import Cta from "@/components/Cta";

export default function About() {
  return (
    <>
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <HowItWork />
      <OurTeam />
      <OurClients />
      <Cta />
    </>
  );
}
