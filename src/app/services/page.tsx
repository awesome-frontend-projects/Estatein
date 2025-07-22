import Cta from "@/components/Cta";
import React from "react";
import HeaderSec from "./components/HeaderSec";
import Values from "./components/Values";
import ManagementFeatues from "./components/ManagementFeatues";
import InvestmentFeatues from "./components/InvestmentFeatues";
import ServicesCards from "./components/ServicesCards";

export default function Services() {
  return (
    <>
      <HeaderSec />
      <ServicesCards />
      <Values />
      <ManagementFeatues />
      <InvestmentFeatues />
      <Cta />
    </>
  );
}
