"use client";
import React from "react";
//components and modules
import Image from "next/image";
import Button from "@/components/Button";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { heroStats } from "@/data/data";
//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-lg:py-20">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-14 lg:grid-cols-2"
      >
        {/* Content */}
        <div className="flex flex-col justify-center md:py-12">
          <motion.h1
            variants={variants.fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
          >
            Discover Your Dream Property with Estatein
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            className="mt-4 mb-8 max-w-[640px]"
          >
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </motion.p>

          {/* Btn wrapper */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex flex-wrap gap-3.5"
          >
            <Link
              href={"/about"}
              className="primary-btn"
              aria-label="learn more about us"
            >
              Learn More
            </Link>
            <Link
              href={"/properties"}
              className="secondary-btn"
              aria-label="search properties"
            >
              Browse Properties
            </Link>
          </motion.div>

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
                <h2 className="text-3xl font-semibold text-white">
                  {item.value}
                  {item.id === 2 ? "k" : ""} +
                </h2>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* banner */}
        <motion.figure variants={variants.fadeIn} className="relative">
          <Image
            src={"/images/hero-banner.png"}
            width={690}
            height={622}
            alt="hero banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute lg:top-10 lg:-left-16 max-lg:-bottom-16 max-lg:left-1/2 max-lg:-translate-x-1/2 bg-grey-08 ring rounded-full ring-grey-15 max-w-max aspect-square flex items-center justify-center p-2.5">
            <div className="relative">
              <Image
                src="/images/text-shape.svg"
                width={106}
                height={106}
                alt="shape"
                className="text-shape"
              />
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-grey-10 ring ring-grey-15  flex items-center justify-center rounded-full hover:text-white transition-colors"
                aria-label="Discover your dream property"
              >
                <RiArrowRightUpLongLine size={24} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.figure>
      </motion.div>
    </section>
  );
}
