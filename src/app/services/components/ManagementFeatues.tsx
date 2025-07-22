"use client";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { managementFeatuesItems } from "@/data/data";
import Image from "next/image";
import React from "react";

//motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animation";

export default function ManagementFeatues() {
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
          title="Effortless Property Management"
          text="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
        />

        {/* Card wrapper */}
        <div className="mt-8 lg:mt-12 grid md:grid-cols-2 gap-5 lg:grid-cols-3">
          {managementFeatuesItems.map((item) => (
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
              <h3>Experience Effortless Property Management</h3>
              <Button label="Learn More" classes="primary-btn" />
            </div>
            {/* Content */}
            <p>
              Ready to experience hassle-free property management? Explore our
              Property Management Service categories and let us handle the
              complexities while you enjoy the benefits of property ownership.
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
