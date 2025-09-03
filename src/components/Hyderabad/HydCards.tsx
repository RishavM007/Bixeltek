'use client';
import React from 'react'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HydCards() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{

        const pin = gsap.fromTo(sectionRef.current,{
            translateX:0
        },{
            translateX: "-300vw",
            ease : "none",
            duration:1,
            scrollTrigger:{
                trigger : triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub : 0.6,
                pin : true
            }
        })

        return ()=>{
            pin.kill()
        }

    } ,[]
)
  return (
    <>

    <section className='scroll-section-outer'>
        <div ref={triggerRef}>
            <div ref={sectionRef} className='scroll-section-inner'>
                <div className='scroll-section'>
                    <h3 className="text-white font-bold uppercase">Section-1</h3>
                </div>
                <div className='scroll-section'>
                    <h3 className="text-white font-bold uppercase">Section-2</h3>
                </div>
                <div className='scroll-section'>
                    <h3 className="text-white font-bold uppercase">Section-3</h3>
                </div>
                <div className='scroll-section'>
                    <h3 className="text-white font-bold uppercase">Section-3</h3>
                </div>
            </div>

        </div>

    </section>


    </>
  )
}
