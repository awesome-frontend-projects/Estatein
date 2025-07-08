"use client";
import { heroBottomItems } from "@/data/data";
import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function HeroBottom() {
  return (
    <section>
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid grid-cols-2 gap-2.5 mt-10 lg:grid-cols-4"
      >
        {heroBottomItems.map((item) => (
          // Card
          <motion.div
            variants={variants.fadeInUp}
            className="px-3.5 py-4 bg-grey-10 border border-grey-15 rounded-[10px]"
            key={item.id}
          >
            <RiArrowRightUpLine
              size={24}
              className="ml-auto hover:text-white transition-colors cursor-pointer"
            />
            <div className="mx-auto max-w-max">
              <Image src={item.icon} alt="item icon" width={48} height={48} />
            </div>
            <p className="mt-3.5 font-semibold text-white text-center">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
