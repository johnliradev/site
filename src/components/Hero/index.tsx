"use client";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-20"
    >
      <div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-8xl font-medium"
        >
          Hi, i'm John
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-4xl"
        >
          No hyper bio here, i'm just a full-stack developer.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="text-xl text-muted-foreground"
      >
        On side, you'll see my projects, writings, contact info and, sure, about
        me.
      </motion.p>
    </motion.div>
  );
};
