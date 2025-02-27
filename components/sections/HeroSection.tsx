import React from 'react';
import Link from 'next/link';
import { Image } from '../ui/Image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string; // Made optional
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc = '/images/hero-image.jpg'
}) => {
  return (
    <section className="relative bg-blue-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
              {title}
            </h1>
            <p className="text-lg mb-8">
              {subtitle}
            </p>
            <Link 
              href={ctaLink} 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              {ctaText}
            </Link>
          </div>
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
        </div>
      </div>
    </section>
  );
}; 