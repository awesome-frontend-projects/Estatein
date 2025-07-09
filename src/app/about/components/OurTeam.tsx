"use client";
import Title from "@/components/Title";
import { teamsItems } from "@/data/data";
import { RiSendPlaneFill, RiTwitterFill } from "@remixicon/react";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp, fadeIn } from "@/motion/animation";

export default function OurTeam() {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          title="Meet the Estatein Team"
          text="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        />

        {/* Card wrapper */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-14">
          {teamsItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="border border-grey-15 rounded-lg p-4 grid gap-12"
              key={item.id}
            >
              <div className="relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={257}
                  height={220}
                  className="w-full"
                />
                <span className="bg-purple-700 text-white absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 flex items-center justify-center rounded-full hover:bg-purple-800 transition-colors cursor-pointer h-12">
                  <RiTwitterFill size={26} />
                </span>
              </div>

              {/* info */}
              <div className="text-center">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>

              {/* btn */}
              <button className="flex items-center justify-between border-grey-15 rounded-[50px] border px-3 py-2.5">
                <p>Say Hello 👋</p>
                <span className="bg-purple-600 w-12 h-12 text-white rounded-full flex items-center justify-center aspect-square hover:bg-purple-800 transition-colors">
                  <RiSendPlaneFill size={26} />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
