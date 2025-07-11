"use client";
import React from "react";
import { contactInfoItems } from "@/data/data";
import Cards from "@/components/Cards";
//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function ContactInfo() {
  return (
    <section>
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid grid-cols-2 gap-2.5 mt-10 lg:grid-cols-4"
      >
        {contactInfoItems.map((item) => (
          <Cards key={item.id} icon={item.icon} label={item.label} />
        ))}
      </motion.div>
    </section>
  );
}
