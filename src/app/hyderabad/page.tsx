import React from 'react'
import HydHero from '@/components/Hyderabad/HydSection1'
import HydAbout from '@/components/Hyderabad/HydSection2'

export default function page() {
    return (
        <>
            <main className='relative'>
                <div className="perspective-1000">
                    <HydHero />
                    <HydAbout />
                </div>
            </main>

        </>
    )
}
