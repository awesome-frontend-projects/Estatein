import Cta from "@/components/Cta";
import React from "react";
import HeaderSec from "./components/HeaderSec";
import Values from "./components/Values";
import Cards from "@/components/Cards";
import ManagementFeatues from "./components/ManagementFeatues";
import InvestmentFeatues from "./components/InvestmentFeatues";

export default function Services() {
  return (
    <>
      <HeaderSec />
      <Cards />
      <Values />
      <ManagementFeatues />
      <InvestmentFeatues />
      <Cta />
    </>
  );
}
