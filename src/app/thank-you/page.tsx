
import React from 'react'
import { Spotlight } from '@/components/Spotlight'

export default function page() {
    return (
        <div className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className="p-5 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Thank you for reaching out!
                </h1>
                <p className="mt-6 font-medium text-lg text-neutral-300 text-center max-w-xl mx-auto">
                    We&apos;ve received your message and will get back to you soon. While you wait, feel free to explore more on our site.
                </p>
                <div className="mt-10 flex justify-center">
                    <a
                        href="/"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </div>

    );
}
