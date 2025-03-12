'use client';
import React, { use, useEffect, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { LuCodesandbox } from 'react-icons/lu'

export default function Smfeature({ title, description }: { title: string, description: string }) {
const offsetX = useMotionValue(-100);
const offsetY = useMotionValue(-100);
const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const updatemouseposition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y) ;
        }
        window.addEventListener('mousemove', updatemouseposition)
        return () => {
            window.removeEventListener('mousemove', updatemouseposition)
        }
    }, [])
    return (
        <div
            className='border border-white/30 px-5 py-14 text-center rounded-xl relative'>
            <motion.div className="absolute inset-0 rounded-xl border-2 border-purple-400" style={{ WebkitMask: maskImage, maskImage: maskImage }} ref={border}></motion.div>
            <div className='inline-flex size-14 mx-auto bg-white text-black justify-center items-center rounded-lg'><LuCodesandbox className='size-7'/></div>
            <div className='mt-6 font-bold'>{title}</div>
            <div className='mt-2 text-white/70'>{description}</div>
        </div>
    )
}
