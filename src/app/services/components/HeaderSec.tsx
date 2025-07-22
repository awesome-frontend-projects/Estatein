"use client";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";

export default function HeaderSec() {
  return (
    <section className="py-20 lg:py-[100px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp}>
          Elevate Your Real Estate Experience
        </motion.h2>
        <motion.p variants={fadeInUp}>
          Welcome to Estatein, where your real estate aspirations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </motion.p>
      </motion.div>
    </section>
  );
}
