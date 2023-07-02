"use client";

import { motion } from "framer-motion";

export function Article({ children }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="prose prose-neutral mx-auto px-5 py-20 dark:prose-invert lg:px-0"
    >
      {children}
    </motion.article>
  );
}
