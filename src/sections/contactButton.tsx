'use client';

import { useState } from "react";
import { ContactForm } from "./ContactForm";

export const ContactButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(isVisible ? "Contact form not visible" : "Contact form visible");
    };

    return (
        <>
            <section className="fixed top-[50%] left-[-50px] md:left-[-55px] cursor-pointer hover:translate-x-5 group transition-all z-[70]">
                <div
                    className="h-12 md:h-14 w-[67px] md:w-20 bg-neutral-800 border-2 border-white/20 rounded-lg backdrop:blur-3xl flex justify-end items-center pr-1 lg:pr-2"
                    onClick={toggleContactForm}
                >
                    <i
                        className="fa fa-arrow-right text-white/30 group-hover:translate-x-[-10px] transition-all text-xs lg:text-sm"
                        aria-hidden="true"
                    ></i>
                </div>
            </section>
            <ContactForm isVisible={isVisible} />
        </>
    );
};
