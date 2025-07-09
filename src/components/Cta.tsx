"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

//motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp, fadeIn } from "@/motion/animation";

export default function Cta() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-16 py-16 relative border border-grey-15"
    >
      <div className="container grid gap-10 lg:grid-cols-[1fr_0.3fr] items-center justify-between">
        {/* content */}
        <motion.div variants={fadeInUp}>
          <h2>Start Your Real Estate Journey Today</h2>
          <p className="mt-5">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </motion.div>
        {/* btn */}
        <Button
          label="Explore Properties"
          classes="secondary-btn max-w-max ml-auto"
        />
      </div>

      <motion.div variants={fadeIn} className="absolute bottom-0 left-0 -z-10">
        <Image src="/images/shape-2.svg" alt="shape" width={474} height={258} />
      </motion.div>
    </motion.section>
  );
}
