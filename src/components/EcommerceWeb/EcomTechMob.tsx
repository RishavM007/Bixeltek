"use client";
import Image from "next/image";
import googleadslogo from "@/assets/googleads-logo.png";
import shopifylogo from "@/assets/shopifylogo.png";
import react from "@/assets/React-icon.svg (1).png";
import slack from "@/assets/Slack_icon_2019.svg.png";
import woo from "@/assets/woocommerce.png";
import zapier from "@/assets/zapier-icon-svgrepo-com.png";
import magento from "@/assets/magento-2-logo-svgrepo-com.png";
import nextjs from "@/assets/dango-inner-2.webp";
import wordpress from "@/assets/wordpress-color-svgrepo-com.png";
import elementor from "@/assets/Elementor-Logo-Symbol-Red.png";
import nextjsicon from '@/assets/nextjsicon.jpg'
import tailwindcsslogo from '@/assets/tailwindcss_logo_icon_170649.webp'
import jslogo from '@/assets/Node.js_logo.svg.png'
import html from '@/assets/html5-emblem-orange-shield-and-white-text-vector.jpg'
import mongo from '@/assets/Mongodb.png'
import mongoose from '@/assets/mongoose2.png'
import redis from '@/assets/redis-icon.webp'
import frappe from '@/assets/technologies/frappe.png'
import vue from '@/assets/technologies/vuejs_logo_icon_169247.webp'
import python from '@/assets/technologies/python-logo-png_seeklogo-207405.png'
import nuxt from '@/assets/technologies/nuxt-logo.png'
import razorpay from '@/assets/technologies/logo_razorpay.webp'
import docker from "@/assets/queesdocker1-768x432-1.webp";
import drupel from "@/assets/Wordmark2_blue_RGB.png";
import hostinger from '@/assets/Hostinger-logo.png'
import shopify from '@/assets/technologies/Shopify_logo_2018.svg.png'
import stripe from "@/assets/Stripe_Logo,_revised_2016.svg.png";
import linux from '@/assets/technologies/linux.png'
import TechGrid from "../Common/TechGrid";

export default function MobileTechGrid() {
  const techStack = [
  { id: 1, name: googleadslogo, color: "border border-blue-500" },
  { id: 2, name: shopifylogo, color: "border border-emerald-400" },
  { id: 3, name: react, color: "border border-cyan-400" },
  { id: 4, name: slack, color: "border border-purple-500" },
  { id: 5, name: woo, color: "border border-purple-600" },
  { id: 6, name: zapier, color: "border border-orange-400" },
  { id: 7, name: magento, color: "border border-orange-600" },
  { id: 8, name: nextjs, color: "border border-neutral-400" },
  { id: 9, name: wordpress, color: "border border-blue-600" },
  { id: 10, name: elementor, color: "border border-pink-500" },
  { id: 11, name: nextjsicon, color: "border border-neutral-500" },
  { id: 12, name: tailwindcsslogo, color: "border border-sky-400" },
  { id: 13, name: jslogo, color: "border border-green-600" },
  { id: 14, name: html, color: "border border-orange-500" },
  { id: 15, name: mongo, color: "border border-green-500" },
  { id: 16, name: mongoose, color: "border border-green-700" },
  { id: 17, name: redis, color: "border border-red-600" },
  { id: 18, name: frappe, color: "border border-indigo-500" },
  { id: 19, name: vue, color: "border border-emerald-500" },
  { id: 20, name: python, color: "border border-yellow-500" },
  { id: 21, name: nuxt, color: "border border-emerald-600" },
  { id: 22, name: razorpay, color: "border border-indigo-600" },
  { id: 23, name: docker, color: "border border-blue-500" },
  { id: 24, name: drupel, color: "border border-sky-600" },
  { id: 25, name: hostinger, color: "border border-purple-600" },
  { id: 26, name: shopify, color: "border border-emerald-500" },
  { id: 27, name: stripe, color: "border border-violet-500" },
  { id: 28, name: linux, color: "border border-yellow-600" }
]



  return (
    <section className="block lg:hidden w-full bg-black py-20">
          <div className="text-center mb-6">
          <h2 className="text-white text-3xl md:text-6xl font-bold">
            Your Digital Storefront <span className="text-blue-400">Perfected</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg md:text-xl">
            Building online stores that sell more, convert faster, and grow endlessly.
          </p>
        </div>
        <div className="w-[90%] mx-auto">
        <TechGrid 
        /> 
        </div>     
    </section>
  );
}
