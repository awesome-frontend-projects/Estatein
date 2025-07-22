"use client";
import Title from "@/components/Title";
import { featureItems } from "@/data/data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

//import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

export default function Feature() {
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
          title="Featured Properties"
          text='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
          link="View All Properties"
          url="properties"
        />

        {/* Card wrapper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          className="mt-10 lg:mt-16"
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
        >
          {featureItems.map((item) => (
            // Card
            <SwiperSlide key={item.id}>
              <motion.div
                className="border border-grey-15 p-6 rounded-xl"
                variants={variants.fadeInUp}
              >
                {/* Card img */}
                <figure>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={354}
                    height={255}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>

                {/* Card content */}
                <div className="mt-3.5">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="flex items-center flex-wrap gap-1.5 my-5">
                    {item.icons.map((item, index) => (
                      <div
                        className="border border-grey-15 rounded-[28px] p-3 flex gap-1.5 bg-grey-10"
                        key={index}
                      >
                        <span>
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                        </span>
                        <p className="text-sm">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  {/* Price */}
                  <div className="flex items-center justify-between flex-wrap gap-6">
                    <p className="font-semibold grid gap-1">
                      Price{" "}
                      <span className="text-white text-lg">${item.price}</span>
                    </p>
                    <button className="secondary-btn">
                      View Property Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <motion.div
          variants={variants.fadeInUp}
          className="mt-10 flex items-center gap-5"
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
