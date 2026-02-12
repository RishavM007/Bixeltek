import Image from "next/image";

import tumblewashlogo from "@/assets/TumbleWash-Logo.webp";
import daddysharklogo from "@/assets/ds-logo-01-2048x512.webp";
import revita from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import markham from "@/assets/Logo.png.webp";
import durrat from "@/assets/durrat_logo.png";
import daprbins from "@/assets/DAPrBINS.logo_.jpg";
import oma from "@/assets/OMA-Computer-System-Trading-2-2048x426.webp";
import rooted from '@/assets/Rooted_Logo_new-4-wbg.png'

const logos = [
    { src: tumblewashlogo, alt: "TumbleWash" },
    { src: daddysharklogo, alt: "Daddy Shark" },
    { src: revita, alt: "Revita" },
    { src: markham, alt: "Markham" },
    { src: durrat, alt: "Durrat" },
    { src: daprbins, alt: "DAPrBINS" },
    { src: oma, alt: "OMA Computer System" },
    { src :rooted , alt: "rooted"}
];

export default function LogoGrid() {
    return (
        <section className="bg-white py-12 px-4 flex justify-center items-center flex-col gap-7 ">
            <h2 className="text-5xl font-semibold  font-inter text-center">Our Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-14 place-items-center">
                {logos.map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="object-contain"
                            width={180}
                            height={80}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
