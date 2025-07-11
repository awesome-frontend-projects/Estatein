"use client";
import Title from "@/components/Title";
import { testimonialsItems } from "@/data/data";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
} from "@remixicon/react";
import React from "react";

//import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

//import motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function Testimonials() {
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
          title="What Our Clients Say"
          text="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          link="View All Testimonials"
        />

        {/* Card wrapper */}
        <motion.div variants={variants.fadeInUp}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 2.5,
              },
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
          >
            {testimonialsItems.map((item) => (
              // Card
              <SwiperSlide
                className="border border-grey-15 rounded-lg bg-grey-08 p-6 lg:p-10 mt-10 lg:mt-14"
                key={item.id}
              >
                {/* Stars */}
                <div className="flex items-center gap-1.5 text-amber-500">
                  <RiStarFill
                    className="border border-grey-15 p-0.5 rounded-full"
                    size={30}
                  />
                  <RiStarFill
                    className="border border-grey-15 p-0.5 rounded-full"
                    size={30}
                  />
                  <RiStarFill
                    className="border border-grey-15 p-0.5 rounded-full"
                    size={30}
                  />
                  <RiStarFill
                    className="border border-grey-15 p-0.5 rounded-full"
                    size={30}
                  />
                  <RiStarFill
                    className="border border-grey-15 p-0.5 rounded-full"
                    size={30}
                  />
                </div>
                {/* Card content */}
                <div className="my-4">
                  <h4>{item.title}</h4>
                  <p className="text-base">{item.text}</p>
                </div>
                {/* author info */}
                <div className="">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p>{item.residential}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* Navigation btns */}
        <motion.div
          variants={variants.fadeIn}
          className="flex items-center gap-4 mt-8"
        >
          <button
            aria-label="prev button"
            className="prev-btn w-12 h-12 border border-grey-20 flex items-center justify-center rounded-full hover:bg-grey-10 transition-colors active:bg-grey-15"
          >
            <RiArrowLeftSLine aria-hidden="true" focusable="false" size={30} />
          </button>
          <button
            aria-label="next button"
            className="next-btn w-12 h-12 border border-grey-20 flex items-center justify-center rounded-full hover:bg-grey-10 transition-colors active:bg-grey-15"
          >
            <RiArrowRightSLine aria-hidden="true" focusable="false" size={30} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
