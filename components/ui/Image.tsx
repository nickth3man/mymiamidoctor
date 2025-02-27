"use client";

import React, { useState } from 'react';
import NextImage from 'next/image';

type AspectRatio = '1:1' | '4:3' | '16:9' | 'auto';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: AspectRatio;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  aspectRatio = 'auto',
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

  // If there's an error loading the image, show a placeholder
  const imageSrc = imgError ? getPlaceholderSrc() : src;
  
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
        />
      ) : (
        // Use Next.js Image for other image types
        <NextImage
          src={imageSrc}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          className="object-cover rounded-lg"
          onError={() => setImgError(true)}
          priority={true}
        />
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