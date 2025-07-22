"use client";
import Title from "@/components/Title";
import { achievementItems } from "@/data/data";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function OurAchievements() {
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
          title="Our Achievements"
          text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        />

        {/* Card wrapper */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 lg:mt-16">
          {achievementItems.map((item) => (
            <motion.div
              variants={variants.fadeInUp}
              className="border border-grey-15 p-5 lg:p-10 bg-grey-08 shadow-lg"
              key={item.id}
            >
              {/* title */}
              <h3>{item.title}</h3>
              <p className="mt-4">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
