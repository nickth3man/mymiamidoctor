import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { typography, colors } from '../../lib/design-tokens';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextVariant = 'body' | 'caption' | 'label';
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  align?: TextAlign;
  as?: React.ElementType;
  className?: string;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (props, ref) => {
    const {
      size = 'md',
      weight = 'normal',
      variant = 'body',
      align = 'left',
      as = 'p',
      className = '',
      children,
      ...rest
    } = props;

    // Determine the HTML element to use
    const Component = as;

    // Define size styles with better readability
    const sizeStyles: Record<TextSize, string> = {
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
    };

    // Define weight styles
    const weightStyles: Record<TextWeight, string> = {
      'normal': 'font-normal',
      'medium': 'font-medium',
      'semibold': 'font-semibold',
      'bold': 'font-bold',
    };

    // Define variant styles with improved readability
    const variantStyles: Record<TextVariant, string> = {
      'body': 'leading-relaxed',
      'caption': 'text-sm text-gray-600 leading-normal',
      'label': 'font-medium leading-tight',
    };

    // Define alignment styles
    const alignStyles: Record<TextAlign, string> = {
      'left': 'text-left',
      'center': 'text-center',
      'right': 'text-right',
    };

    // Combined classes with text rendering optimization
    const textClasses = cn(
      'font-sans',
      'text-foreground',
      'antialiased',
      'text-rendering-optimizeLegibility',
      sizeStyles[size],
      weightStyles[weight],
      variantStyles[variant],
      alignStyles[align],
      className
    );

    return (
      <Component
        ref={ref as React.Ref<any>}
        className={textClasses}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';