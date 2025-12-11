"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { 
  Zap, 
  ShoppingCart, 
  Code, 
  ArrowRight, 
  Check, 
  TrendingUp,
  Rocket
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Replace with your actual images
import shopifyImg from "@/assets/SHOPIFY IMAGE.webp";
import woocommerceImg from "@/assets/Feature-for-Top-websites-using-woocommerce.png";
import headlessImg from "@/assets/what_is_aws.avif";
import Link from "next/link";

const EcommercePlatforms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const platforms = [
    {
      id: 1,
      title: "Shopify / Shopify Plus",
      subtitle: "Enterprise E-Commerce Excellence",
      icon: ShoppingCart,
      gradient: "from-green-500 via-emerald-600 to-teal-700",
      glow: "shadow-2xl shadow-green-500/30",
      border: "border-green-400/30",
      bg: "bg-gradient-to-br from-green-50 to-emerald-100",
      text: "text-gray-900",
      accent: "text-green-600",
      image: shopifyImg,
      features: [
        "Hydrogen (React-based) for sub-second performance",
        "Headless API routing for complex inventories",
        "Real-time analytics integration",
        "HyperPay, PayTabs, Stripe, Apple Pay",
        "GCC, Canada, and U.S. tax compliance",
      ],
      description: "Shopify dominates for stability, scalability, and integrations. We go beyond basic themes to create high-performance stores that load faster, rank better, and convert higher.",
      cta: "Launch Shopify Store",
      href: "/contact-us"
    },
    {
      id: 2,
      title: "WooCommerce / WordPress",
      subtitle: "Content-Driven Commerce",
      icon: Code,
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      glow: "shadow-2xl shadow-blue-500/30",
      border: "border-blue-400/30",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
      text: "text-gray-900",
      accent: "text-blue-600",
      image: woocommerceImg,
      features: [
        "Custom-coded product templates with schema",
        "Optimized WordPress backend",
        "Lean queries, no slow plugins",
        "Content + commerce integration",
        "SEO-optimized architecture"
      ],
      description: "WooCommerce offers total flexibility for businesses that rely heavily on content and SEO. We combine the storytelling power of WordPress with conversion-optimized checkouts.",
      cta: "Build WooCommerce Site",
      href: "/contact-us"
    },
    {
      id: 3,
      title: "Headless Commerce / Custom Code",
      subtitle: "Ultimate Speed & Scalability",
      icon: Rocket,
      gradient: "from-purple-500 via-purple-600 to-violet-700",
      glow: "shadow-2xl shadow-purple-500/30",
      border: "border-purple-400/30",
      bg: "bg-gradient-to-br from-purple-50 to-violet-100",
      text: "text-gray-900",
      accent: "text-purple-600",
      image: headlessImg,
      features: [
        "Next.js front-ends with SSG/ISR",
        "Shopify, BigCommerce, or Strapi backends",
        "GraphQL/REST API integration",
        "CRM, ERP, PIM integration",
        "Enterprise-grade performance"
      ],
      description: "When speed and scale are non-negotiable, headless commerce delivers the Amazon experience without the overhead. Instant loading and limitless scalability that boosts ranking.",
      cta: "Go Headless",
      href: "/contact-us"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        );

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Simple variants without complex easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-black py-10 md:py-32 px-6 md:px-8 overflow-hidden min-h-screen"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full floating-element"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full floating-element"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full floating-element"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-emerald-500/10 rounded-full floating-element"></div>
      </div>

      {/* Header Section - SIMPLIFIED ANIMATIONS */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-3xl mb-6"
        >
          <Zap className="w-5 h-5  text-yellow-400" />
          <span className="text-white font-semibold">E-Commerce Platforms</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight"
        >
          Choose Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
            E-Commerce Engine
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          From enterprise Shopify to flexible WooCommerce and lightning-fast headless solutions — 
          we build e-commerce platforms that scale with your ambition.
        </motion.p>
      </div>

      {/* Platform Cards - SIMPLIFIED */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[95%] md:max-w-[85%] mx-auto relative z-10">
        {platforms.map((platform, index) => {
          const IconComponent = platform.icon;
          
          return (
            <motion.div
              key={platform.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative rounded-3xl ${platform.bg} ${platform.border} ${platform.glow} overflow-hidden group cursor-pointer`}
            >
              {/* Gradient Border Effect */}
              {/* <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div> */}
              
              {/* Main Card Content */}
              <div className="relative bg-white/95 backdrop-blur-sm h-full rounded-3xl p-6 border-2 border-white/20">
                {/* Icon Header */}
            <div className="relative h-32 md:h-52 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={platform.image}
                    alt={platform.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>

                {/* Subtitle */}
                <p className={`text-sm font-semibold py-2 px-5  bg-gradient-to-tr from-black to-purple-600 w-fit rounded-2xl text-white mb-4`}>
                  {platform.subtitle}
                </p>

                {/* Description */}
                <p className={`${platform.text} mb-6 leading-relaxed`}>
                  {platform.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 ${platform.accent} flex-shrink-0`} />
                      <span className={`text-base ${platform.text}/80`}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Image */}
                

                {/* CTA Button */}
                <Link href={platform.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r ${platform.gradient} flex items-center justify-center gap-2 transition-all duration-300`}
                >
                  {platform.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                </Link>
              </div>

              {/* Floating Particles */}
              {/* <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-pulse"></div> */}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-tr from-black via-purple-900 to-white text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/30 flex items-center gap-3 mx-auto"
        >
          <TrendingUp className="w-5 h-5" />
          Start Your E-Commerce Journey
          <Rocket className="w-5 h-5" />
        </motion.button>
      </motion.div> */}
    </section>
  );
};

export default EcommercePlatforms;