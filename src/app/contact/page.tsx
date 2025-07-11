import React from "react";
import HeaderSec from "./components/HeaderSec";
import ContactInfo from "./components/ContactForm";
import ContactForm from "./components/ContactInfo";
import OurOffices from "./components/OurOffices";
import Gallery from "./components/Gallery";
import Cta from "@/components/Cta";
import Cards from "@/components/Cards";

export default function Contact() {
  return (
    <>
      <HeaderSec />
      <Cards />
      <ContactInfo />
      <ContactForm />
      <OurOffices />
      <Gallery />
      <Cta />
    </>
  );
}
