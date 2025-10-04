"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      className="relative flex items-start py-20 justify-center h-screen w-full bg-black text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/404pageimage.avif" // replace with your image path in /public
          alt="404 background"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-inter font-semibold mb-3"
        >
          Page not found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mt-8 font-semibold tracking-wide mb-6 text-gray-100"
        >
          Sorry, we couldn’t find the page you’re looking for.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-white font-inter"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
