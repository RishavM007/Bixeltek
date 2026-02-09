'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import { SEOButtonContactForm } from '../SEOPopupForm'; 
import { LogoTicker2 } from '../GoogleAdsCarousel';

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
  heading: string;
  highlightText?: string;
  description: string;
  proofPoints?: ProofPoint[];
  primaryCTA: CTAConfig;
  secondaryCTA?: CTAConfig;
  children?: React.ReactNode;
}

const LocationHeroSection = ({
  heading,
  highlightText,
  description,
  proofPoints,
  primaryCTA,
  secondaryCTA,
  children,
}: LocationHeroSectionProps) => {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [seoFormOpen, setSeoFormOpen] = useState(false);

  const handleAction = (action: CTAAction) => {
    if (action.type === 'openForm') {
      if (action.form === 'contact') setContactFormOpen(true);
      if (action.form === 'seo') setSeoFormOpen(true);
    }
  };

  const renderCTA = (cta: CTAConfig) => {
    const base =
      'px-6 py-3 rounded-full font-medium transition';
    const variant =
      cta.variant === 'secondary'
        ? 'border border-white text-white hover:bg-white hover:text-black'
        : 'bg-blue-600 text-white hover:bg-blue-700';

    if (cta.action.type === 'link') {
      return (
        <a
          href={cta.action.href}
          target={cta.action.target ?? '_self'}
          className={`${base} ${variant}`}
        >
          {cta.text}
        </a>
      );
    }

    return (
      <button
        onClick={() => handleAction(cta.action)}
        className={`${base} ${variant}`}
      >
        {cta.text}
      </button>
    );
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-between bg-black text-center px-6 overflow-hidden mb-20">
        <div className="relative z-10 mt-40 md:my-36 lg:my-40 lg:py-10 max-w-7xl ">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            {heading}{' '}
            {highlightText && (
              <span className="text-blue-500">{highlightText}</span>
            )}
          </h1>

          <p className="mt-6 text-gray-300 max-w-5xl mx-auto">
            {description}
          </p>
          {/* @ts-ignore */}
          {proofPoints?.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {/* @ts-ignore */}
              {proofPoints.map((p) => (
                <div key={p.id} className="flex items-center gap-3 max-w-[240px]">
                  <Image src={p.icon} alt={p.text} width={40} height={40} />
                  <p className="text-sm text-white">{p.text}</p>
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
       <LogoTicker2 />    
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

