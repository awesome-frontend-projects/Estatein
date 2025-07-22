import React from "react";
import HeaderSec from "./components/HeaderSec";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import OurOffices from "./components/OurOffices";
import Gallery from "./components/Gallery";
import Cta from "@/components/Cta";

export default function Contact() {
  return (
    <>
      <HeaderSec />
      <ContactInfo />
      <ContactForm />
      <OurOffices />
      <Gallery />
      <Cta />
    </>
  );
}
