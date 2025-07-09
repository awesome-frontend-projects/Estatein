"use client";
import Title from "@/components/Title";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function OurClients() {
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
          title="Our Valued Clients"
          text="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        />

        {/* Card wrapper */}
        <div className=""></div>
        {/* Navigation btns */}
        <motion.div
          variants={variants.fadeIn}
          className="flex items-center gap-4 mt-8"
        >
          <button
            aria-label="prev button"
            className="prev-btn w-12 h-12 border border-grey-20 flex items-center justify-center rounded-full hover:bg-grey-10 transition-colors active:bg-grey-15"
          >
            <RiArrowLeftSLine aria-hidden="true" focusable="false" size={30} />
          </button>
          <button
            aria-label="next button"
            className="next-btn w-12 h-12 border border-grey-20 flex items-center justify-center rounded-full hover:bg-grey-10 transition-colors active:bg-grey-15"
          >
            <RiArrowRightSLine aria-hidden="true" focusable="false" size={30} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
