"use client";
import Link from "next/link";
import React from "react";

//motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animation";

interface buttonProps {
  label: string;
  classes: string;
}

export default function Button({ label, classes }: buttonProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Link href="#" className={classes}>
        {label}
      </Link>
    </motion.div>
  );
}
