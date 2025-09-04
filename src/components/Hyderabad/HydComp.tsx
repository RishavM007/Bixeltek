import Image from "next/image";

import tumblewashlogo from "@/assets/TumbleWash-Logo.webp";
import revita from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import markham from "@/assets/Logo.png.webp";
import durrat from "@/assets/durrat_logo.png";
import daprbins from "@/assets/DAPrBINS.logo_.jpg";
import oma from "@/assets/OMA-Computer-System-Trading-2-2048x426.webp";
import rooted from '@/assets/Rooted_Logo_new-4-wbg.png'
import wheellogo from '@/assets/head-logo.png'
import edify from '@/assets/edify-new-logo-1.webp'
import cylus from '@/assets/CYCAS-INVESTMENT-ADVISORS-2048x1677.png'
import blooming from '@/assets/Logo2-2048x548.png'
import cloud from '@/assets/logo-2.png'
import ananta from '@/assets/Ananta Ananda-01.png'
import daddysharklogo from "@/assets/daddyshark logo-01.png";

const logos = [
    { src: tumblewashlogo, alt: "TumbleWash" },
    { src: daddysharklogo, alt: "Daddy Shark" },
    { src: revita, alt: "Revita" },
    { src: markham, alt: "Markham" },
    { src: durrat, alt: "Durrat" },
    { src: oma, alt: "OMA Computer System" },
    { src :rooted , alt: "rooted"},
    {src:wheellogo, alt:"wheels"},
    {src:edify, alt:"edify"},
    {src:cylus, alt:"cylus"},
    {src:blooming, alt:"cylus"},
    {src: ananta , alt:"cylus"},
    {src:cloud, alt:"cylus"},
    
];

export default function HydLogoGrid() {
    return (
        <section className="bg-white py-20 px-4 flex justify-center items-center flex-col gap-7 ">
            <h2 className="text-5xl font-semibold text-black  font-inter text-center">Our Clients</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10  gap-14 place-items-center">
                {logos.map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="object-contain"
                            width={150}
                            height={80}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
