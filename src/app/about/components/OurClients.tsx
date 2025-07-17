"use client";
import Title from "@/components/Title";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBox3Fill,
} from "@remixicon/react";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";
import { ourClientsItems } from "@/data/data";
import Button from "@/components/Button";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";

export default function OurClients() {
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
          title="Our Valued Clients"
          text="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        />

        {/* Card wrapper */}
        <Swiper
          className="mt-10 lg:mt-14"
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
        >
          {ourClientsItems.map((item) => (
            // Card
            <SwiperSlide key={item.id}>
              <motion.div
                variants={variants.fadeInUp}
                className="border border-grey-15 p-5 rounded-lg"
              >
                {/* Title */}
                <div className="flex items-center gap-6 justify-between flex-wrap">
                  <div className="">
                    <p>{item.time}</p>
                    <h4>{item.company}</h4>
                  </div>
                  <Button label="Visit Website" classes="primary-btn" url="#" />
                </div>

                {/* wrapper */}
                <div className="flex justify-between flex-wrap gap-3 items-center my-7">
                  {item.box.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-3">
                        <p>
                          <RiBox3Fill />
                        </p>
                        <p>{item.subtitle}</p>
                      </div>
                      <h5 className="text-lg font-semibold text-white mt-1.5">
                        {item.title}
                      </h5>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="border border-grey-15 space-y-2 rounded-lg p-3">
                  <p>{item.reason}</p>
                  <p className="text-sm">{item.text}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
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
