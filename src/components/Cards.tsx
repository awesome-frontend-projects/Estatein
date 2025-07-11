"use client";
import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

//motion
import { motion } from "motion/react";
import * as variants from "@/motion/animation";

interface cardProps {
  icon: string;
  label: string;
}

export default function Cards({ icon, label }: cardProps) {
  return (
    // Card
    <motion.div
      variants={variants.fadeInUp}
      className="px-3.5 py-4 bg-grey-10 border border-grey-15 rounded-[10px]"
    >
      <RiArrowRightUpLine
        size={24}
        className="ml-auto hover:text-white transition-colors cursor-pointer"
      />
      <div className="mx-auto max-w-max">
        <Image src={icon} alt="item icon" width={48} height={48} />
      </div>
      <p className="mt-3.5 font-semibold text-white text-center">{label}</p>
    </motion.div>
  );
}
