"use client";
import Title from "@/components/Title";
import { aboutValues } from "@/data/data";
import Image from "next/image";
import React from "react";
//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animation";

export default function OurValues() {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid lg:grid-cols-[0.7fr_1fr] lg:gap-14 gap-8 lg:items-start"
      >
        {/* Title */}
        <Title
          title="Our Values"
          text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        />

        {/* Card wrapper */}
        <div className="grid gap-8 md:grid-cols-2">
          {aboutValues.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="border border-grey-15 p-5 md:p-14 lg:p-6"
              key={item.id}
            >
              {/* Card title */}
              <div className="">
                <div className="mb-3.5">
                  <Image src={item.icon} alt="icon" width={60} height={60} />
                </div>
                <h3>{item.title}</h3>
              </div>
              {/* text */}
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
