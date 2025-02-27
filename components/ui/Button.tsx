"use client";

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { 
  UIVariant, 
  UISize, 
  ButtonElementProps, 
  LinkButtonProps, 
  InteractiveElementProps,
  isLink
} from './types';

// Button-specific types
type ButtonVariant = UIVariant;
type ButtonSize = UISize;
type ButtonProps = InteractiveElementProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      size = 'md',
      isFullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled = false,
      ...rest
    } = props;

    // Base styles shared between button and link
    const baseStyles = 'inline-flex items-center justify-center rounded-button font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    // Define variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow hover:shadow-md focus-visible:ring-primary/50',
      secondary: 'bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80 shadow hover:shadow-md focus-visible:ring-secondary/50',
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20 focus-visible:ring-primary/50',
      text: 'bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 focus-visible:ring-primary/50',
      danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow hover:shadow-md focus-visible:ring-red-500/50',
      success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 shadow hover:shadow-md focus-visible:ring-green-500/50',
    };
    
    // Define size styles
    const sizeStyles: Record<ButtonSize, string> = {
      xs: 'text-xs px-2.5 py-1.5 gap-1',
      sm: 'text-sm px-4 py-2 gap-1.5',
      md: 'text-base px-6 py-2.5 gap-2',
      lg: 'text-lg px-8 py-3 gap-2.5'
    };
    
    // Additional style modifiers
    const widthStyles = isFullWidth ? 'w-full' : '';
    const disabledStyles = (disabled || isLoading) 
      ? 'opacity-60 cursor-not-allowed pointer-events-none' 
      : '';
    
    // Combined classes
    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg 
        className="animate-spin h-4 w-4 text-current" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );

    // Screen reader only loading text
    const ScreenReaderLoadingText = isLoading ? (
      <span className="sr-only" role="status">Loading</span>
    ) : null;

    // Content to render inside button
    const content = (
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading && leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
        {ScreenReaderLoadingText}
      </>
    );

    // Render as link if href is provided
    if (isLink(props)) {
      const { href, ...linkRest } = rest as LinkButtonProps;
      
      // Don't render a link if it's in a loading or disabled state
      if (disabled || isLoading) {
        return (
          <span
            className={buttonClasses}
            ref={ref as React.ForwardedRef<HTMLSpanElement>}
            role="button"
            aria-disabled="true"
          >
            {content}
          </span>
        );
      }
      
      return (
        <Link 
          href={href}
          className={buttonClasses}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          role="button"
          {...linkRest}
        >
          {content}
        </Link>
      );
    }

    // Extract relevant props for the button element
    const buttonProps = rest as ButtonElementProps;
    
    // Render as button
    return (
      <button
        className={buttonClasses}
        disabled={disabled || isLoading}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        type={buttonProps.type || 'button'}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button'; 