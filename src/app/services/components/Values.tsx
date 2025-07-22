"use client";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { valuesItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";

export default function Values() {
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
          title="Unlock Property Value"
          text="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        />

        {/* Card wrapper */}
        <div className="mt-8 lg:mt-12 grid md:grid-cols-2 gap-5 lg:grid-cols-3">
          {valuesItems.map((item) => (
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
          <motion.div
            variants={fadeInUp}
            className="relative lg:col-span-2 border border-grey-15 rounded-lg p-4 lg:p-6 overflow-hidden bg-grey-10/50"
          >
            {/* card header */}
            <div className="flex justify-between items-center mb-5 flex-wrap gap-5">
              <h3>Unlock the Value of Your Property Today</h3>
              <Button label="Learn More" classes="primary-btn" />
            </div>
            {/* Content */}
            <p>
              Ready to unlock the true value of your property? Explore our
              Property Selling Service categories and let us help you achieve
              the best deal possible for your valuable asset.
            </p>

            <Image
              src="/images/shape-3.svg"
              alt="shape"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
