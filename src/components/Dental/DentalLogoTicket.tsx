"use client";

import tumblewashlogo from "@/assets/TumbleWash-Logo.webp";
import daddysharklogo from "@/assets/daddyshark logo-01.png";
import revita from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import markham from "@/assets/Logo.png.webp";
import durrat from "@/assets/durrat_logo.png";
import daprbins from "@/assets/DAPrBINS.logo_.jpg";
import oma from "@/assets/OMA-Computer-System-Trading-2-2048x426.webp";
import rooted from "@/assets/Rooted_Logo_new-4-wbg.png";
import anata from "@/assets/Ananta Ananda-01.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker2Dental = () => {
  const logos = [
    tumblewashlogo,
    daddysharklogo,
    revita,
    markham,
    durrat,
    oma,
    rooted,
    anata,
    tumblewashlogo,
    daddysharklogo,
    revita,
    markham,
    durrat,
    oma,
    rooted,
    anata,
    tumblewashlogo,
    daddysharklogo,
    revita,
    markham,
    durrat,
    oma,
    rooted,
    anata,
    tumblewashlogo,
    daddysharklogo,
    revita,
    markham,
    durrat,
    oma,
    rooted,
    anata,
  ];

  return (
    <section className=" bg-gray-50 pt-10 flex flex-col gap-20">
      <div className="w-[100%] md:w-[90%] lg:w-[90%] mx-auto">
        <div className="flex items-center">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_96%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-6 justify-center items-center"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-transparent rounded-lg p-4 flex justify-center items-center"
                >
                  <Image
                    src={logo}
                    alt={`Company Logo ${index + 1}`}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
