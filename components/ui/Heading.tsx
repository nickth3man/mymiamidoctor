import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingAlign = 'left' | 'center' | 'right';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  weight?: HeadingWeight;
  align?: HeadingAlign;
  as?: React.ElementType;
  className?: string;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => {
    const {
      level = 2,
      size,
      weight = 'bold',
      align = 'left',
      as,
      className = '',
      children,
      ...rest
    } = props;

    // Determine the HTML element to use
    const Component = as || `h${level}` as React.ElementType;

    // Default size based on heading level if not explicitly provided
    const defaultSizeMap: Record<HeadingLevel, HeadingSize> = {
      1: '4xl',
      2: '3xl',
      3: '2xl',
      4: 'xl',
      5: 'lg',
      6: 'md',
    };

    const finalSize = size || defaultSizeMap[level];

    // Define size styles
    const sizeStyles: Record<HeadingSize, string> = {
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    };

    // Define weight styles
    const weightStyles: Record<HeadingWeight, string> = {
      'normal': 'font-normal',
      'medium': 'font-medium',
      'semibold': 'font-semibold',
      'bold': 'font-bold',
    };

    // Define alignment styles
    const alignStyles: Record<HeadingAlign, string> = {
      'left': 'text-left',
      'center': 'text-center',
      'right': 'text-right',
    };

    // Responsive adjustments for mobile
    const responsiveStyles = 'md:text-[size] text-[calc(var(--size)*0.85)]';

    // Combined classes
    const headingClasses = cn(
      'font-heading',
      'tracking-tight',
      'text-foreground',
      sizeStyles[finalSize],
      weightStyles[weight],
      alignStyles[align],
      className
    );

    return (
      <Component
        ref={ref}
        className={headingClasses}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading'; 