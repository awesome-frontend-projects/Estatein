"use client";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function HeaderSec() {
  return (
    <section className="lg:py-20 py-14">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={variants.fadeInUp}>
          Find Your Dream Property
        </motion.h2>
        <motion.p variants={variants.fadeInUp} className="mt-4">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </motion.p>
      </motion.div>
    </section>
  );
}
