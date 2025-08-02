'use client';

import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { ButtonContactForm } from "./ButtonContactForm";

export const ContactButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible(prev => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
    };

    return (
        <>
            <section className="fixed top-[50%] left-[-50px] md:left-[-55px] cursor-pointer hover:translate-x-5 group transition-all z-[70]">
                <div
                    className="w-[67px] md:w-20 bg-neutral-800 border-2 border-purple-300/50 rounded-lg backdrop:blur-3xl flex justify-end items-center pr-1 lg:pr-2 shadow-purple-custom"
                    onClick={toggleContactForm}
                >
                    <div className="leading-5 md:leading-6 text-xs md:text-sm pt-1 text-purple-400/40 group-hover:translate-x-[-7px] transition-all bg-transparent">
                        {"CONTACT".split("").map((char, i) => (
                            <p key={i}>{char}</p>
                        ))}
                    </div>
                </div>
            </section>

            <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    );
};
