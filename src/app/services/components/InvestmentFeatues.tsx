"use client";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";
//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";
import { investmentFeaturesItems } from "@/data/data";
import Button from "@/components/Button";

export default function InvestmentFeatues() {
  return (
    <section className="section pb-20 md:pb-28 lg:pb-[150px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-5 lg:grid-cols-[0.7fr_1fr]"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {/* Title */}
          <div className="lg:col-span-2">
            <Title
              title="Smart Investments, Informed Decisions"
              text="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
            />
          </div>
          <motion.div
            variants={fadeInUp}
            className="relative lg:col-span-2 border border-grey-15 rounded-lg p-4 lg:p-6 overflow-hidden bg-grey-10/50 grid gap-3"
          >
            <h3>Unlock Your Investment Potential</h3>
            {/* Content */}
            <p>
              Explore our Property Management Service categories and let us
              handle the complexities while you enjoy the benefits of property
              ownership.
            </p>
            <Button label="Learn More" classes="primary-btn text-center" />

            <Image
              src="/images/shape-3.svg"
              alt="shape"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              width={200}
              height={200}
            />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {investmentFeaturesItems.map((item) => (
            // Card
            <motion.div
              variants={fadeInUp}
              className="border border-grey-15 rounded-lg p-4 lg:p-6"
              key={item.id}
            >
              {/* card header */}
              <div className="flex items-center gap-3 mb-5">
                {/* Icon */}
                <div className="">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
                <h3>{item.title}</h3>
              </div>
              {/* Content */}
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
