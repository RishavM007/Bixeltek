'use client';

import React from 'react';
import ContactFromNew from '../../ContactFormNew';

interface ContactCTASectionProps {
  heading: string | React.ReactNode;
  spanText?: string; // optional
  description: string;
  sectionId?: string;
}

const ContactCTASection = ({
  heading,
  spanText,
  description,
  sectionId = 'form',
}: ContactCTASectionProps) => {
  return (
    <section
      className="bg-black lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row"
      id={sectionId}
    >
      {/* Left Side - Text */}
      <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
        <div className="space-y-5 text-white max-w-2xl">
          <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
        {typeof heading === 'string' ? (
          <>
            {heading}{' '}
            {spanText && (
              <span className="text-blue-500">{spanText}</span>
            )}
          </>
        ) : (
          heading
        )}
      </h2>


          <p className="text-white font-poppins text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-[87%] lg:mr-10 flex justify-start items-center px-6">
        <ContactFromNew />
      </div>
    </section>
  );
};

export default ContactCTASection;
