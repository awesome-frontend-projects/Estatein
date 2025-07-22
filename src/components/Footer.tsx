"use client";
import { footerItems, socialIcons } from "@/data/data";
import { RiMailLine, RiSendPlaneFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//import motion
import { motion } from "motion/react";
import { staggerContainer, fadeInUp, fadeIn } from "@/motion/animation";

export default function Footer() {
  return (
    <footer className="pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-8 lg:gap-24"
      >
        {/* footer top */}
        <div className="grid gap-8 lg:gap-12 text-center sm:text-left sm:grid-cols-2 md:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr] lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.5fr_0.7fr] xl:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr_0.7fr_0.7fr]">
          {/* Footer Brand */}
          <motion.div variants={fadeInUp}>
            <div>
              <Image
                src="/images/logo.png"
                alt="footer logo"
                width={114}
                height={34}
              />
            </div>
            <div className="flex items-center gap-1.5 my-6 max-w-[305px] w-full relative">
              <span className="absolute top-1/2 left-4 -translate-y-1/2">
                <RiMailLine />
              </span>
              <input
                placeholder="Enter Your Email"
                type="email"
                className="w-full h-full p-5 indent-8 outline-none focus:border-purple-700 border border-grey-15 rounded-lg"
              />
              <button className="absolute top-1/2 right-4 -translate-y-1/2 hover:text-purple-600 transition-colors">
                <RiSendPlaneFill />
              </button>
            </div>
          </motion.div>

          {/* Footer list */}
          {footerItems.map((item) => (
            <motion.div variants={fadeInUp} key={item.id}>
              <p className="font-semibold text-white mb-2">{item.title}</p>
              <ul className="grid gap-1.5">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:underline hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/* footer bottom */}
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-between items-center pt-6 pb-12 border-t border-grey-20"
        >
          <div className="">
            <p>
              &copy; {new Date().getFullYear()} Estatein. All Rights Reserved.
            </p>
            <Link href={"#"} className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {socialIcons.map((item, index) => (
              <a
                href="#"
                key={index}
                className="w-12 h-12 bg-grey-10 flex items-center justify-center rounded-full hover:bg-grey-20 transition-colors"
                aria-label={item.label}
              >
                {<item.icon />}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
