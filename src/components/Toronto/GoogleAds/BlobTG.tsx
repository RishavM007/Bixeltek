"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MovingBlob: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (windowWidth === null) return null; 

  return (
    <motion.div
      className="fixed top-1/3 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"
      animate={{
        x: [0, windowWidth - 500, 0],
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
