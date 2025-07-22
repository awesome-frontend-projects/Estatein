"use client";
import Title from "@/components/Title";
import { galleryItems } from "@/data/data";
import Image from "next/image";
import React from "react";
//motion
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/motion/animation";

export default function Gallery() {
  return (
    <section className="section pb-20 md:pb-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container relative border border-grey-15 p-5 rounded-xl"
      >
        {/* Images grid */}
        <div className="grid grid-cols-2 gap-5">
          {galleryItems.map((item) => (
            <motion.div variants={fadeIn} key={item.id}>
              <Image
                src={item.img}
                alt="Image"
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          ))}
          <div className="grid gap-5 grid-cols-2">
            <motion.div variants={fadeIn}>
              <Image
                src="/images/img-4.png"
                alt="Image"
                width={275}
                height={192}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Image
                src="/images/img-5.png"
                alt="Image"
                width={275}
                height={192}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
        {/* Card */}
        <div className="grid gap-5 lg:grid-cols-2 mt-8">
          {/* Title */}
          <Title
            title="Explore Estatein's World"
            text="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
          />

          {/* Image */}
          <motion.div variants={fadeIn}>
            <Image
              src={"/images/img-6.png"}
              alt="images"
              width={570}
              height={220}
              className="sm:w-full sm:object-cover sm:h-full rounded-xl"
            />
          </motion.div>
        </div>

        <Image
          src={"/images/shape-3.svg"}
          alt="shape"
          width={600}
          height={600}
          className="absolute bottom-0 left-0 w-full h-full -z-10"
        />
      </motion.div>
    </section>
  );
}
