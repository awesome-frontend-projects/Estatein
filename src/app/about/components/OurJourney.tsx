"use client";
import Title from "@/components/Title";
import { heroStats } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function OurJourney() {
  return (
    <section className="pt-14 lg:pt-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid lg:grid-cols-2 lg:items-start gap-14"
      >
        {/* Content */}
        <div className="">
          {/* Title */}
          <Title
            title="Our Journey"
            text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
          />

          {/* Stats wrapper */}
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-10 lg:mt-[50px]">
            {heroStats.map((item) => (
              // Card
              <motion.div
                variants={variants.fadeInUp}
                className={`px-5 py-3.5 bg-grey-10 rounded-[10px] border border-grey-15 text-center lg:text-left ${
                  item.id === 3 ? "max-sm:col-span-2" : ""
                }`}
                key={item.id}
              >
                <h3 className="text-3xl font-semibold text-white">
                  {item.value}
                  {item.id === 2 ? "k" : ""} +
                </h3>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Banner */}
        <motion.figure variants={variants.fadeIn}>
          <Image
            src="/images/about-page-banner.png"
            alt="banner"
            width={610}
            height={435}
          />
        </motion.figure>
      </motion.div>
    </section>
  );
}
