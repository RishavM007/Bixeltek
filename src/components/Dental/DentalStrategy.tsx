import React from 'react'
import { FiSearch, FiTarget, FiMonitor, FiRepeat } from 'react-icons/fi'

const cards = [
    {
        title: 'Local SEO',
        description: 'Ensures patients find your clinic when searching “dentist near me” or “emergency dentist.”',
        bg: 'bg-white',
        textColor: 'text-gray-700',
        icon: <FiSearch className="text-blue-700 text-4xl mb-4" />
    },
    {
        title: 'Google Ads',
        description: 'Targets high-intent patients who are ready to book treatments today.',
        bg: 'bg-white',
        textColor: 'text-gray-700',
        icon: <FiTarget className="text-white text-4xl mb-4" />
    },
    {
        title: 'Conversion-Focused Website',
        description: 'Turns visitors into callers with clear CTAs and appointment funnels.',
        bg: 'bg-white',
        textColor: 'text-gray-700',
        icon: <FiMonitor className="text-blue-700 text-4xl mb-4" />
    },
    {
        title: 'Retargeting & Social Media',
        description: 'Keeps your clinic top-of-mind, so patients call you—not your competitor.',
        bg: 'bg-white',
        textColor: 'text-gray-700',
        icon: <FiRepeat className="text-white text-4xl mb-4" />
    },
]

export default function DentalStrategy() {
    return (
        <section
            className="relative bg-blue-700 bg-cover bg-center"
        >
            {/* Overlay */}

            <div className="relative max-w-7xl mx-auto text-center py-24 px-2 md:px-4">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white">
                    How a Smart Marketing Strategy Fills Your Appointment Calendar
                </h2>
                <p className="text-gray-200 mb-12 text-base md:text-xl">
                    A good marketing strategy isn’t about vanity clicks. It’s about phone calls, inquiries, and confirmed bookings.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`
        relative 
        ${card.bg === 'bg-blue-700' ? card.bg : card.bg} 
        ${card.textColor} 
        p-8 rounded-2xl flex flex-col justify-between items-center text-center 
        shadow-lg hover:shadow-2xl 
        transform hover:-translate-y-2 hover:scale-105 
        transition duration-300 ease-in-out
        h-full
      `}                >
                            {/* Top content */}
                            <div className="flex flex-col items-center">
                                {/* Icon wrapper */}
                                <div className={`
          ${card.bg === 'bg-blue-700' ? 'bg-blue-100' : 'bg-blue-100'} 
          w-16 h-16 rounded-full flex items-center justify-center mb-4
          transition-transform duration-300 ease-in-out hover:scale-110
        `}>
                                    {React.cloneElement(card.icon, { className: `${card.bg === 'bg-white-700' ? 'text-blue-700' : 'text-blue-700'} text-4xl` })}
                                </div>

                                <h3 className="text-2xl tracking-wide font-inter font-semibold mb-3">{card.title}</h3>
                                <p className="text-base">{card.description}</p>
                            </div>
                            <div className={`mt-6 w-16 h-1 rounded-full ${card.bg === 'bg-blue-700' ? 'bg-blue-700' : 'bg-blue-700'}`}></div>
                        </div>
                    ))}
                </div>
                {/* Bottom Paragraph */}
                <p className="mt-12 text-gray-100 text-lg md:text-xl max-w-3xl mx-auto">
                    When these elements work together, your phone doesn’t just ring occasionally—it rings consistently, every day.
                </p>
            </div>
        </section>
    )
}
