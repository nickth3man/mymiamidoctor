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
import { colors, spacing } from '../../lib/design-tokens';
import { focusClasses } from '../../lib/design-tokens/focus';

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
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    // Define variant styles with improved contrast and focus states
    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow focus-visible:ring-primary-500',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-sm hover:shadow focus-visible:ring-secondary-500',
      outline: 'bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
      text: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm hover:shadow focus-visible:ring-red-500',
      success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 shadow-sm hover:shadow focus-visible:ring-green-500',
    };
    
    // Define size styles with improved touch targets
    const sizeStyles: Record<ButtonSize, string> = {
      xs: 'text-xs px-2.5 py-1.5 gap-1 min-h-[32px] min-w-[32px]',
      sm: 'text-sm px-4 py-2 gap-1.5 min-h-[36px] min-w-[36px]',
      md: 'text-base px-6 py-2.5 gap-2 min-h-[44px] min-w-[44px]',
      lg: 'text-lg px-8 py-3 gap-2.5 min-h-[48px] min-w-[48px]'
    };
    
    // Additional style modifiers
    const widthStyles = isFullWidth ? 'w-full' : '';
    const disabledStyles = (disabled || isLoading)
      ? 'opacity-70 cursor-not-allowed pointer-events-none'
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

    // Improved loading state for screen readers
    const ScreenReaderLoadingText = isLoading ? (
      <span className="sr-only" role="status" aria-live="polite">Loading, please wait</span>
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
        aria-pressed={buttonProps['aria-pressed']}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';