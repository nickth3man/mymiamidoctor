"use client";

import { createDynamicComponent } from '../lib/dynamicImports';
import type { HeroSectionProps } from './sections/HeroSection';

// Dynamically import the HeroSection component
export const DynamicHeroSection = createDynamicComponent<HeroSectionProps>(
  () => import('./sections/HeroSection').then(mod => ({ default: mod.HeroSection })),
  { ssr: true }
);

// Dynamically import the ContactForm component
// Using type any for the ContactForm since it doesn't have props
export const DynamicContactForm = createDynamicComponent<any>(
  () => import('./forms/ContactForm').then(mod => ({ default: mod.ContactForm })),
  { ssr: false } // Forms typically don't need SSR
);