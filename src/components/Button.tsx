"use client";
import Link from "next/link";
import React from "react";

//motion
import { motion } from "motion/react";
import { fadeInUp } from "@/motion/animation";

interface buttonProps {
  label: string;
  classes: string;
  link?: string;
  url?: string;
}

export default function Button({ label, classes, url }: buttonProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Link href={`/${url}`} className={classes} aria-label={label}>
        {label}
      </Link>
    </motion.div>
  );
}
