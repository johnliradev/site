"use client";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-4xl/14"
      >
        hi,
        <br />
        <span className="text-7xl font-bold">i'm John</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-4xl/12 mt-4 "
      >
        No hyper bio, <br />
        just a full-stack developer
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="flex items-center gap-2 mt-4"
      >
        <div className="ping h-2 w-2 bg-green-600 rounded-full"></div>
        <p>Immediately available</p>
      </motion.div>
    </motion.div>
  );
};
