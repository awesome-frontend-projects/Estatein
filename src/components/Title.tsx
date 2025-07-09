"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animation";

interface titleProps {
  title: string;
  text: string;
  link?: string;
}

export default function Title({ title, text, link }: titleProps) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-3">
      <motion.div variants={fadeInUp}>
        <span className="mb-2.5 block">
          <Image
            src="/images/title-icon.svg"
            width={55}
            height={24}
            alt="icon"
          />
        </span>
        <h2>{title}</h2>
        <p className="mt-3 max-w-[730px]">{text}</p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        {link && (
          <Link href="#" className="primary-btn">
            {link}
          </Link>
        )}
      </motion.div>
    </div>
  );
}
