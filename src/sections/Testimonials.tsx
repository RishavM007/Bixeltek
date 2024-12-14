'use client';
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "“Their SEO and Google Ads expertise boosted our traffic by 200%. Highly recommend their digital marketing services!”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
  },
  {
    text: "“Exceptional web design and PPC campaigns! They transformed our online presence and increased leads significantly.”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
  },
  {
    text: "“Professional and results-driven team. Our social media engagement has skyrocketed thanks to their innovative strategies.”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
  },
  {
    text: "“Amazing work on our SEO and Google Ads! They deliver measurable results with unmatched creativity and dedication.”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
  },
  {
    text: "“A one-stop solution for digital marketing. Their web design and PPC campaigns brought in excellent ROI for our business.”",
    name: "Alec Henry",
    title: "CTO @ Tech Solutions",
  },
];

export const Testimonials = () => {
  return <section className="pt-20 pb-10 md:pb-20 md:pt-40">
    <div className="container text-white">
      <h2 className="text-5xl font-medium text-center tracking-tighter">Beyond Expectation.</h2>
      <p className="text-white/70 text-center text-md lg:text-lg tracking-tight mt-5">Empowering brands with strategic SEO solutions, driving growth, visibility, and success through proven expertise.</p>
    </div>
    <div className=" flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div 
      initial={{ translateX: '-50%'}}
      animate = {{ translateX: '0'}}
      transition={{
        repeat:Infinity,
        ease:"linear",
        duration:70,
      }}
      className="flex gap-5 flex-none">
        {[...testimonials, ...testimonials].map(testimonial => (
          <div key={testimonial.name} className="text-white border border-white/15 p-6 md:p-10  rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-xs md:max-w-md flex-none">
            <div className="text-md py-3 italic font-light tracking-wide">{testimonial.text}</div>
            <div className="flex flex-col items-start gap-1 mt-5">
              <div>{testimonial.name}</div>
              <div className="text-sm text-white/50">{testimonial.title}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>;
};
