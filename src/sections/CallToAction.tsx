'use client';
import starBg from '@/assets/stars.png'
import Grid from '@/assets/grid-lines.png'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { RefObject, useEffect, useRef } from 'react';
export const CallToAction = () => {
  const SpiderMan = (to: RefObject<HTMLElement>) => {
    const MouseX = useMotionValue(0);
    const MouseY = useMotionValue(0);
    const MouseTracker = (event: MouseEvent) => {
      if (!to.current) return;
      const { top, left } = to.current.getBoundingClientRect();
      MouseX.set(event.x - left);
      MouseY.set(event.y - top);
    }
    useEffect(() => {
      window.addEventListener('mousemove', MouseTracker);
      return () => {
        window.removeEventListener('mousemove', MouseTracker)
      }
    }, [])

    return [MouseX, MouseY]
  }
  const sectionRef = useRef<HTMLElement>(null)
  const Borderdifref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [MouseX, MouseY] = SpiderMan(Borderdifref)
  const maskImage = useMotionTemplate`radial-gradient(30% 50% at ${MouseX}px ${MouseY}px, black, transparent)`;
  return (
    <section className="text-white py-20 md:py-24" ref={sectionRef}>
      <div className="container  mx-auto">
        <motion.div ref={Borderdifref} className="border border-white/15 py-24 lg:px-[200px] rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: starBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starBg.src})`
          }}>
          <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700'
            style={{
              backgroundImage: `url(${Grid.src})`
            }}></div>
          <motion.div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  opacity-0 group-hover:opacity-100' style={{
            maskImage,
            backgroundImage: `url(${Grid.src})`
          }}></motion.div>
          <div className='relative'>
            <h2 className="text-5xl mx-w-sm mx-auto tracking-tighter text-center font-medium">AI driven SEO for everyone</h2>
            <p className="text-center text-lg max-w-sm md:max-w-xl mx-auto text-white/70 px-4 mt-4 tracking-tight">Achive clear and impactful results without complexity.</p>
            <div className="flex justify-center mt-8">
              <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
};
