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

const icons = [
  { src: jslogo, alt: 'SEMrush', className: 'h-16' },
  { src: mongo, alt: 'SE Ranking', className: 'h-16' },
  { src: wordpress, alt: 'WordPress', className: 'h-20' },
  { src: elementor, alt: 'Elementor', className: 'h-14' },
  { src: redis, alt: 'Next.js', className: 'h-24' },
  { src: react, alt: 'React Native', className: 'h-16' },
  { src: tailwindcsslogo, alt: 'Tailwind CSS', className: 'h-20' },
  { src: html, alt: 'Ahrefs', className: 'h-16' },
  { src: nextjsicon, alt: 'Ahrefs', className: 'h-16' },
  { src: mongoose, alt: 'Ahrefs', className: 'h-24' },
]


export default function Tech2() {
  return (
    <section className="py-7 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="mb-20 text-center">
          <span className="text-purple-600 text-sm text-center font-medium mb-4 block">OUR PARTNERS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We work with the best partners</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-gray-200 shadow-sm h-24 rounded-2xl p-4 hover:shadow-md transition"
            >
              <Image src={icon.src} alt={icon.alt} className={`${icon.className} object-contain`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
