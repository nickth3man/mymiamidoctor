"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook for lazy loading images
 * @param src Image source URL
 * @param placeholder Placeholder image URL
 * @returns Current image source and loading state
 */
export function useLazyImage(src: string, placeholder: string = '/images/placeholders/placeholder.svg') {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Create new image object
    const img = new Image();
    
    // Set up load event handler
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    // Set image source to trigger loading
    img.src = src;
    
    // Cleanup
    return () => {
      img.onload = null;
    };
  }, [src]);

  return { imageSrc, isLoaded };
}

/**
 * Generates a responsive image srcSet
 * @param basePath Base path of the image
 * @param extension Image extension
 * @param widths Array of widths for the srcSet
 * @returns srcSet string
 */
export function generateSrcSet(basePath: string, extension: string, widths: number[] = [640, 750, 828, 1080, 1200, 1920]) {
  // Extract the filename without extension
  const lastSlashIndex = basePath.lastIndexOf('/');
  const lastDotIndex = basePath.lastIndexOf('.');
  
  let path = basePath;
  let filename = '';
  
  if (lastDotIndex > lastSlashIndex) {
    // If there's an extension in the basePath, remove it
    path = basePath.substring(0, lastDotIndex);
    filename = path.substring(lastSlashIndex + 1);
  } else {
    // Otherwise, just get the filename
    filename = basePath.substring(lastSlashIndex + 1);
  }
  
  // Generate srcSet
  return widths
    .map(width => `${path}-${width}.${extension} ${width}w`)
    .join(', ');
}

/**
 * Determines if an image should be loaded with priority
 * @param position Position of the image on the page
 * @returns Whether the image should be loaded with priority
 */
export function shouldPrioritize(position: 'above-fold' | 'below-fold' | 'hero' = 'below-fold'): boolean {
  return position === 'above-fold' || position === 'hero';
}