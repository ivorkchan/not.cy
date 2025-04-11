"use client";

import React from "react";
import { motion } from "framer-motion";

import type { AnimationProps } from "framer-motion";

type DisclosureAnimateProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
};

const animationVariants: AnimationProps = {
  initial: { opacity: 0, y: -8 },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.75 },
  },
  exit: {
    y: -8,
    opacity: 0,
    filter: "blur(8px)",
    transition: { ease: "easeIn", duration: 0.25 },
  },
};

const DisclosureAnimate: React.FC<DisclosureAnimateProps> = ({
  children,
  className = "",
}) => (
  <motion.div
    {...animationVariants}
    className={`light truncate-multiline mt-2 font-serif ${className}`}
  >
    {children}
  </motion.div>
);

export default DisclosureAnimate;
