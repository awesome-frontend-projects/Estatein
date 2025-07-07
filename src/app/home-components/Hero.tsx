"use client";
import React from "react";

//components

import Image from "next/image";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import Button from "@/components/Button";
import { RiArrowRightUpLongLine } from "@remixicon/react";

export default function Hero() {
  return (
    <section className="max-lg:py-20">
      <div className="container grid gap-14 lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="mt-4 mb-8 max-w-[640px]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          {/* Btn wrapper */}
          <div className="flex items-center flex-wrap gap-3.5">
            <Button label="Learn More" classes="primary-btn" />
            <Button label="Browse Properties" classes="secondary-btn" />
          </div>
        </div>
        {/* banner */}
        <figure className="relative">
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
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-grey-10 ring ring-grey-15  flex items-center justify-center rounded-full hover:text-white transition-colors">
                <RiArrowRightUpLongLine size={24} />
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
