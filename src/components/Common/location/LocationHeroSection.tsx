'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import { SEOButtonContactForm } from '../../SEOPopupForm'; 
import { LogoTicker2 } from '../../GoogleAdsCarousel';

interface ProofPoint {
  id: number;
  text: string;
  icon: StaticImageData;
}

type CTAAction =
  | { type: 'link'; href: string; target?: '_self' | '_blank' }
  | { type: 'openForm'; form: 'contact' | 'seo' };

interface CTAConfig {
  text: string;
  variant?: 'primary' | 'secondary';
  action: CTAAction;

}

interface LocationHeroSectionProps {
  heading: React.ReactNode;
  statement?: React.ReactNode;
  description: string;
  proofPoints?: ProofPoint[];
  primaryCTA: CTAConfig;
  secondaryCTA?: CTAConfig;
  children?: React.ReactNode;
  backgroundImage?: StaticImageData | string;
    ctaTheme?: 'blue' | 'green' | 'red';

}

const LocationHeroSection = ({
  heading,
  statement,
  description,
  proofPoints,
  primaryCTA,
  secondaryCTA,
  children,
  backgroundImage,
  ctaTheme
}: LocationHeroSectionProps) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [seoFormOpen, setSeoFormOpen] = useState(false);

  const handleAction = (action: CTAAction) => {
    if (action.type === 'openForm') {
      if (action.form === 'contact') setContactFormOpen(true);
      if (action.form === 'seo') setSeoFormOpen(true);
    }
  };

  const themeStyles = {
  blue: {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      'border border-white text-white hover:bg-white hover:text-black',
  },
  green: {
    primary:
      'bg-gradient-to-tr from-green-500 via-green-800 to-green-950 text-white hover:opacity-90',
    secondary:
      'p-[1px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-950',
  },
  red: {
    primary:
      'bg-gradient-to-tr from-red-500 via-red-700 to-red-950 text-white hover:opacity-90',
    secondary:
      'p-[1px] rounded-full bg-gradient-to-r from-red-500 via-red-700 to-red-950',
  },
};

  const currentTheme = themeStyles[ctaTheme || 'blue'];

  const renderCTA = (cta: CTAConfig) => {
  const base =
    'px-6 py-3 rounded-full font-medium transition duration-300';

  if (
    cta.variant === 'secondary' &&
    (ctaTheme === 'green' || ctaTheme === 'red')
  ) {
    return (
      <a
        href={
          cta.action.type === 'link'
            ? cta.action.href
            : undefined
        }
        target={
          cta.action.type === 'link'
            ? cta.action.target ?? '_self'
            : undefined
        }
        className={currentTheme.secondary}
      >
        <button
          onClick={() =>
            cta.action.type === 'openForm' &&
            handleAction(cta.action)
          }
          className="px-8 py-3 bg-black rounded-full text-white font-semibold shadow-lg w-full h-full"
        >
          {cta.text}
        </button>
      </a>
    );
  }

  const variantStyle =
    cta.variant === 'secondary'
      ? currentTheme.secondary
      : currentTheme.primary;

  if (cta.action.type === 'link') {
    return (
      <a
        href={cta.action.href}
        target={cta.action.target ?? '_self'}
        className={`${base} ${variantStyle}`}
      >
        {cta.text}
      </a>
    );
  }

  return (
    <button
      onClick={() => handleAction(cta.action)}
      className={`${base} ${variantStyle}`}
    >
      {cta.text}
    </button>
  );
};


  return (
    <>
      <section className="relative flex flex-col items-center justify-between bg-black text-center px-6 overflow-hidden">
        {backgroundImage && (
          <>
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover object-center absolute inset-0 z-0"
            priority
          />
        <div className="absolute inset-0 bg-black/60 z-0" />
        </>
        )}

        {/* ✅ Dark Overlay */}
        <div className="relative z-10 mt-40 md:my-36 lg:my-40 lg:py-10 max-w-7xl ">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            {heading}
          </h1>

          <p className="mt-6 text-gray-300 max-w-5xl mx-auto">
            {description}
          </p>

          {statement}
          {/* @ts-ignore */}
              {proofPoints?.length > 0 && (
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
          {/* @ts-ignore */}
          {proofPoints.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center text-center max-w-[260px]"
            >
              <Image
                src={p.icon}
                alt={p.text}
                width={40}
                height={40}
                className="mb-3"
              />
              <p className="text-sm text-white">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      )}


          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            {renderCTA(primaryCTA)}
            {secondaryCTA && renderCTA(secondaryCTA)}
          </div>

          {children}
        </div>
        <div className={`mb-8 lg:mb-10`}> 
       <LogoTicker2 />  
       </div>  
      </section>

      {/* 🔥 Forms handled internally */}
      <ButtonContactForm
        isVisible={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />

      <SEOButtonContactForm
        isVisible={seoFormOpen}
        onClose={() => setSeoFormOpen(false)}
      />
    </>
  );
};

export default LocationHeroSection;

