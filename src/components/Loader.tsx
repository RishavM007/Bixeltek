"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); 
      },
    });

    // 1. Progress bar + counter
    tl.to(
      {},
      {
        duration: 2,
        ease: "linear",
        onUpdate: function () {
          let p = Math.round(this.progress() * 100);
          setProgress(p);
          gsap.to(".progress-line", { width: `${p}%`, duration: 0.05 });
        },
      }
    );

    // 2. Line color wipe
    tl.to(".progress-line", {
      backgroundColor: "#9381ff",
      duration: 0.8,
      ease: "power4.inOut",
    });

    // 3. Number fade out
    tl.to(".loader-number", {
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.inOut",
    });

    // 4. Line "door open" effect
    tl.to(".progress-wrapper", {
      height: "100vh",
      duration: 1,
      ease: "power4.inOut",
    });

    // 5. Slide whole loader away
    tl.to(".loader", {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut",
    });
  }, [onComplete]);

  return (
    <div className="loader fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[9999] overflow-hidden">
      <div className="progress-wrapper w-[100%] h-[1px] bg-gray-500 relative flex items-center justify-center">
        <div className="progress-line absolute left-0 top-0 h-full w-0 bg-white"></div>
        <span className="loader-number absolute font-sofiasanscondensed text-white text-[100px] font-bold">
          {progress}%
        </span>
      </div>
    </div>
  );
}
