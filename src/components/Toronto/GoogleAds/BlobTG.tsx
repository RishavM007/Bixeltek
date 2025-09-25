"use client";
import { motion } from "framer-motion";
import React from "react";

const MovingBlob: React.FC = () => {
  return (
    <motion.div
      className="fixed top-1/3 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"
      animate={{
        x: [0, window.innerWidth - 500, 0], // numeric values in px
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

export default MovingBlob;
