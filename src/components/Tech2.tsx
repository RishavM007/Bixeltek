'use client'
import React from 'react'
import Image from 'next/image'

import react from '@/assets/reactlogo.png'
import ga from '@/assets/icons8-google-analytics-24.png'
import nexticon from '@/assets/icons8-react-24.png'
import ahref from '@/assets/primary-light-AK6KQQMG.webp'
import semrush from '@/assets/SEMrush-Logo.png'
import seranking from '@/assets/se-ranking-logo.jpg'
import looker from '@/assets/Looker_6f803d7fdc.webp'
import wordpress from '@/assets/WordPress-Logo-2008-present.jpg'
import elementor from '@/assets/elementor.png'
import nextjsicon from '@/assets/nextjsicon.jpg'
import reactksicon from '@/assets/1174949_js_react js_logo_react_react native_icon.png'
import tailwindcsslogo from '@/assets/tailwindcss_logo_icon_170649.webp'
import jslogo from '@/assets/Node.js_logo.svg.png'

const icons = [
  { src: jslogo, alt: 'SEMrush', className: 'h-16' },
  { src: seranking, alt: 'SE Ranking', className: 'h-20' },
  { src: wordpress, alt: 'WordPress', className: 'h-20' },
  { src: elementor, alt: 'Elementor', className: 'h-14' },
  { src: ga, alt: 'Next.js', className: 'h-14' },
  { src: react, alt: 'React Native', className: 'h-16' },
  { src: tailwindcsslogo, alt: 'Tailwind CSS', className: 'h-20' },
  { src: ahref, alt: 'Ahrefs', className: 'h-14' },
  { src: nextjsicon, alt: 'Ahrefs', className: 'h-16' },
]


export default function Tech2() {
  return (
    <section className="py-32 h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="mb-20 text-center">
          <span className="text-purple-600 text-sm text-center font-medium mb-4 block">OUR PARTNERS</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">We work with the best partners</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
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
