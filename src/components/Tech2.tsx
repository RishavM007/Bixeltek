import React from 'react'
import Image from 'next/image'

import react from '@/assets/icons8-react-24.png'
import ga from '@/assets/icons8-google-analytics-24.png'
import nexticon from '@/assets/icons8-react-24.png'
import ahref from '@/assets/ahref.png'
import semrush from '@/assets/629a40b63e59ee069da94c81.png'
import seranking from '@/assets/SERanking.png'
import looker from '@/assets/Looker_6f803d7fdc.webp'
import wordpress from '@/assets/wordpress.png'
import elementor from '@/assets/elementor.png'
import nextjsicon from '@/assets/icons8-nextjs-96.png'
import reactksicon from '@/assets/1174949_js_react js_logo_react_react native_icon.png'
import tailwindcsslogo from '@/assets/Tailwind CSS.png'

const icons = [
  { src: semrush, alt: 'SEMrush' },
  { src: seranking, alt: 'SE Ranking' },
  { src: wordpress, alt: 'WordPress' },
  { src: elementor, alt: 'Elementor' },
  { src: nextjsicon, alt: 'Next.js' },
  { src: reactksicon, alt: 'React Native' },
  { src: tailwindcsslogo, alt: 'Tailwind CSS' },
  { src: ahref, alt: 'Tailwind CSS' },

]

export default function Tech2() {
  return (
    <div className="max-w-[85%] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Heading */}
  <div className="sm:w-full xl:w-1/2 mx-auto text-center mb-6 md:mb-12">
    <h2 className="text-xl font-semibold font-sofiasanscondensed md:text-5xl md:leading-tight text-gray-800 dark:text-neutral-200">
      Built with the same tech trusted by open source projects and enterprise giants.
    </h2>
  </div>

  {/* Icons Grid */}
  <div className=" max-w-[60%] mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
    {icons.map((icon, index) => (
      <div
        key={index}
        className="p-2 sm:p-3 md:p-2 flex justify-center items-center rounded-lg bg-transparent"
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          className="w-auto h-auto object-contain"
          width={58}
          height={58}
        />
      </div>
    ))}
  </div>
</div>

  )
}
