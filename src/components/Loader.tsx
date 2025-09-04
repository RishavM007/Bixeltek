"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false); // track if loader is finished

  useEffect(() => {
    gsap.to({}, {
      duration: 1,
      ease: "linear",
      onUpdate: function () {
        let p = Math.round(this.progress() * 100);
        setProgress(p);
        gsap.to(".progress-line", { width: `${p}%`, duration: 0.05 });
      },
      onComplete: () => {
        setDone(true); // hide loader after hitting 100
      }
    });
  }, []);

  if (done) return null; // 🚀 remove loader completely once finished

  return (
    <div className="loader fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[9999]">
      <div className="progress-wrapper w-full h-[1px] bg-gray-500 relative flex items-center justify-center">
        <div className="progress-line absolute left-0 top-0 h-full w-0 bg-white"></div>
        <span className="loader-number absolute font-sofiasanscondensed text-white text-[100px] font-bold">
          {progress}%
        </span>
      </div>
    </div>
  );
}
