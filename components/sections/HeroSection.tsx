"use client";

import React from 'react';
import Link from 'next/link';
import { Image } from '../ui/Image';
import { Button } from '../ui/Button';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc = '/images/hero-image.jpg',
  backgroundImage
}) => {
  // Determine if we should use a background image or the default gradient
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};
  
  // Add an overlay if using a background image
  const overlayClass = backgroundImage 
    ? 'relative before:absolute before:inset-0 before:bg-black/40 before:z-0' 
    : '';
  
  // Adjust content z-index if using a background image
  const contentClass = backgroundImage ? 'relative z-10' : '';
  
  // Adjust text color if using a background image
  const textColorClass = backgroundImage ? 'text-white' : 'text-navy';
  
  return (
    <section 
      className={`relative py-16 md:py-32 overflow-hidden ${backgroundImage ? '' : 'bg-gradient-to-r from-blue-50 to-accent/10'} ${overlayClass}`}
      style={backgroundStyle}
    >
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${contentClass}`}>
          <div className="max-w-xl">
            <h1 className={textColorClass}>
              {title}
            </h1>
            <p className={`text-lg mb-8 ${backgroundImage ? 'text-white/90' : ''}`}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={ctaLink}>
                {ctaText}
              </Button>
              
              {secondaryCtaText && secondaryCtaLink && (
                <Button 
                  href={secondaryCtaLink} 
                  variant={backgroundImage ? "outline" : "secondary"}
                  className={backgroundImage ? "text-white border-white hover:bg-white/10" : ""}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
          
          {!backgroundImage && (
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src={imageSrc}
                alt={title}
                width={800}
                height={600}
                aspectRatio="4:3"
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 