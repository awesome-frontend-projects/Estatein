"use client";
import Cards from "@/components/Cards";
import { CardsItems } from "@/data/data";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function HomeCards() {
  return (
    <section>
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid grid-cols-2 gap-2.5 lg:grid-cols-4 border-y max-w-max rounded-2xl px-0 py-3 border-grey-15 "
      >
        {CardsItems.map((item) => (
          <Cards key={item.id} icon={item.icon} label={item.label} />
        ))}
      </motion.div>
    </section>
  );
}
