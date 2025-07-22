import React from "react";
import HeaderSec from "./components/HeaderSec";
import SearchFilters from "./components/SearchFilters";
import ContactForm from "./components/ContactForm";
import Cta from "@/components/Cta";

export default function Properties() {
  return (
    <>
      <HeaderSec />
      <SearchFilters />
      <ContactForm />
      <Cta />
    </>
  );
}
