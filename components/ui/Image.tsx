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
  const [error, setError] = useState(false);
  
  const getPlaceholderSrc = (): string => {
    if (aspectRatio === '1:1') {
      return '/images/placeholders/square.svg';
    } else if (aspectRatio === '16:9') {
      return '/images/placeholders/widescreen.svg';
    } else {
      return '/images/placeholders/standard.svg';
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
  const imageSrc = error ? getPlaceholderSrc() : src;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: dimensions.width, 
        height: dimensions.height,
      }}
    >
      {error ? (
        // Show SVG directly when there's an error
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        // Use Next.js Image when no error
        <NextImage
          src={imageSrc}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          className="object-cover"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}; 