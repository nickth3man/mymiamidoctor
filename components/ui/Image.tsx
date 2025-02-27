"use client";

import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { useLazyImage, shouldPrioritize } from '../../lib/imageOptimization';

type AspectRatio = '1:1' | '4:3' | '16:9' | 'auto';
type ImagePosition = 'above-fold' | 'below-fold' | 'hero';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: AspectRatio;
  position?: ImagePosition;
  sizes?: string;
  quality?: number;
  loading?: 'eager' | 'lazy';
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  aspectRatio = 'auto',
  position = 'below-fold',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  loading,
}) => {
  const [imgError, setImgError] = useState(false);
  
  const getPlaceholderSrc = (): string => {
    if (aspectRatio === '1:1') {
      return '/images/placeholders/square.svg';
    } else if (aspectRatio === '16:9') {
      return '/images/placeholders/widescreen.svg';
    } else if (aspectRatio === '4:3') {
      return '/images/placeholders/standard.svg';
    } else {
      return '/images/placeholders/placeholder.svg';
    }
  };

  // Calculate dimensions based on aspect ratio if needed
  const getDimensions = () => {
    if (aspectRatio === '1:1') {
      return { width: width, height: width };
    } else if (aspectRatio === '16:9') {
      return { width: width, height: Math.floor(width * (9/16)) };
    } else if (aspectRatio === '4:3') {
      return { width: width, height: Math.floor(width * (3/4)) };
    } else {
      return { width: width, height: height };
    }
  };

  const dimensions = getDimensions();
  const placeholder = getPlaceholderSrc();
  
  // Use lazy loading for images below the fold
  const { imageSrc, isLoaded } = useLazyImage(
    imgError ? placeholder : src,
    placeholder
  );
  
  // Determine if the image should be loaded with priority
  const isPriority = shouldPrioritize(position);
  
  // Determine loading strategy based on position and explicit loading prop
  const loadingStrategy = loading || (isPriority ? 'eager' : 'lazy');
  
  // Check if the image is an SVG or placeholder
  const isSvg = src.toLowerCase().endsWith('.svg');
  const isPlaceholder = imgError || src.includes('placeholders');

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: dimensions.width,
        maxHeight: dimensions.height,
      }}
    >
      {isSvg || isPlaceholder ? (
        // Show img tag for SVGs or placeholders
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
          onError={() => !imgError && setImgError(true)}
          loading={loadingStrategy}
        />
      ) : (
        // Use Next.js Image for other image types
        <NextImage
          src={imageSrc}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          className={`object-cover rounded-lg ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          onError={() => setImgError(true)}
          priority={isPriority}
          quality={quality}
          sizes={sizes}
          loading={loadingStrategy}
        />
      )}
      
      {!isLoaded && !isPlaceholder && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
      )}
      
      {imgError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 rounded-lg">
          <p className="text-gray-600 text-center px-4 font-semibold">
            {alt || "Image placeholder"}
          </p>
        </div>
      )}
    </div>
  );
};