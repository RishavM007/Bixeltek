"use client";
import { useEffect, useRef, useState } from "react";
import teamimage from "@/assets/annie-spratt-QckxruozjRg-unsplash.jpg"

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ start = 0, end, duration = 1.5 }) => {
  const [count, setCount] = useState(start);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={counterRef} className="text-5xl font-bold">
      {count}+
    </div>
  );
};

const TeamStatsSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${teamimage.src})` }}
    >
      {/* Stats Section */}
      <div className="absolute bottom-0 right-0 flex flex-col md:flex-row gap-0">
        {/* Designers and Developers Counter */}
        <div className="bg-red-600 text-white p-6  shadow-lg w-[250px] text-center">
          <Counter end={28} />
          <p className="text-lg font-light">Designers & Developers</p>
        </div>

        {/* Awards Counter */}
        <div className="bg-black text-white p-6 shadow-lg w-[250px] text-center">
          <Counter end={345} />
          <p className="text-lg font-light">Awards for Innovation</p>
        </div>
      </div>
    </section>
  );
};

export default TeamStatsSection;
