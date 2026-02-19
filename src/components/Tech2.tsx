'use client'
import React from 'react'
import Image from 'next/image'
import react from '@/assets/reactlogo.png'
import wordpress from '@/assets/WordPress-Logo-2008-present.jpg'
import elementor from '@/assets/elementor.png'
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
import zapier from '@/assets/zapier-icon-svgrepo-com.png'
import docker from "@/assets/queesdocker1-768x432-1.webp";
import drupel from "@/assets/Wordmark2_blue_RGB.png";
import hostinger from '@/assets/Hostinger-logo.png'
import shopify from '@/assets/technologies/Shopify_logo_2018.svg.png'
import stripe from "@/assets/Stripe_Logo,_revised_2016.svg.png";
import linux from '@/assets/technologies/linux.png'
import TechGrid from './Common/TechGrid'

const icons = [
  { src: jslogo, alt: 'SEMrush', className: 'h-16' },
  { src: mongo, alt: 'SE Ranking', className: 'h-16' },
  { src: wordpress, alt: 'WordPress', className: 'h-20' },
  { src: elementor, alt: 'Elementor', className: 'h-14' },
  { src: redis, alt: 'Next.js', className: 'h-24' },
  { src: react, alt: 'React Native', className: 'h-16' },
  { src: tailwindcsslogo, alt: 'Tailwind CSS', className: 'h-full' },
  { src: html, alt: 'Ahrefs', className: 'h-16' },
  { src: nextjsicon, alt: 'Ahrefs', className: 'h-16' },
  { src: mongoose, alt: 'Ahrefs', className: 'h-24' },
  { src: frappe, alt: 'Ahrefs', className: 'h-24' },
  { src: python, alt: 'Ahrefs', className: 'h-28' },
  { src: vue, alt: 'Ahrefs', className: 'h-24' },
  { src: nuxt, alt: 'Ahrefs', className: 'h-24' },
  { src: razorpay, alt: 'Ahrefs', className: 'h-24' },
  { src: zapier, alt: 'Ahrefs', className: 'h-12' },
  { src: docker, alt: 'Ahrefs', className: 'h-24' },
  { src: drupel, alt: 'Ahrefs', className: 'h-24' },
  { src: hostinger, alt: 'Ahrefs', className: 'h-24' },
  { src: shopify, alt: 'Ahrefs', className: 'h-24' },
  { src: stripe, alt: 'Ahrefs', className: 'h-12' },
  { src: linux, alt: 'Ahrefs', className: 'h-12' },
]


export default function Tech2() {
  return (
    <section className="py-7 block md:hidden md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="mb-20 text-center">
          <span className="text-purple-600 text-sm text-center font-medium mb-4 block">OUR PARTNERS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technologies we work with</h1>
        </div>

        <TechGrid/>
      </div>
    </section>
  )
}
