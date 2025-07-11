"use client";
import React from "react";
//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function HeaderSec() {
  return (
    <section className="py-10 lg:py-28">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 className="mb-4" variants={variants.fadeInUp}>
          Get in Touch with Estatein
        </motion.h2>
        <motion.p variants={variants.fadeInUp}>
          Welcome to Estatein's Contact Us page. We're here to assist you with
          any inquiries, requests, or feedback you may have. Whether you're
          looking to buy or sell a property, explore investment opportunities,
          or simply want to connect, we're just a message away. Reach out to us,
          and let's start a conversation.
        </motion.p>
      </motion.div>
    </section>
  );
}
