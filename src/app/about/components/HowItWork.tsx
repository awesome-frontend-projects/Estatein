"use client";
import Title from "@/components/Title";
import { howItWorksItems } from "@/data/data";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function HowItWork() {
  return (
    <section className="section">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Navigating the Estatein Experience"
          text="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        />

        {/* Card wrapper */}
        <div className="grid mt-10 lg:mt-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorksItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeInUp}
              className="border border-grey-15 p-5 bg-gradient-to-br from-purple-500/20 to-20%"
              key={item.id}
            >
              <p className="border-b border-grey-15 pb-3 text-neutral-400">
                {item.step}
              </p>
              <div className="pt-4">
                <h4>{item.title}</h4>
                <p className="mt-3.5">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
