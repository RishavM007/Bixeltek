"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface CounterProps {
  start?: number;
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({
  start = 0,
  end,
  suffix = "",
  duration = 2,
}) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime = Date.now();
      let animationFrame: number;

      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <motion.h2
      ref={ref}
      className="text-5xl font-sofiasanscondensed font-bold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.h2>
  );
};

const MetricsSection = () => {
  return (
    <div className="bg-gradient-to-t from-[#140d21] to-[#7028e4] mt-10 p-10 max-w-[80%] mx-auto rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        {/* Top Row */}
        <div>
          <Counter end={8} suffix="x" />
          <p className="text-gray-50">ROAS Achieved on Average</p>
        </div>
        <div>
          <Counter end={182} suffix="%" />
          <p className="text-gray-50">Marketing Strategy</p>
        </div>
        <div>
          <Counter end={63} suffix="%" />
          <p className="text-gray-50">Reduction in Cost Per Lead</p>
        </div>
        <div>
          <Counter end={490} suffix="%" />
          <p className="text-gray-50">Increase in Reach</p>
        </div>

        {/* Bottom Row */}
        <div>
          <Counter end={113} suffix="+ Cr" />
          <p className="text-gray-50">Revenue Generated</p>
        </div>
        <div>
          <Counter end={9} suffix="M" />
          <p className="text-gray-50">Reach achieved till date</p>
        </div>
        <div>
          <Counter end={60} suffix="+ Cr" />
          <p className="text-gray-50">Ad spends managed</p>
        </div>
        <div>
          <Counter end={1} suffix="M" />
          <p className="text-gray-50">Profile Visits Generated</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;
