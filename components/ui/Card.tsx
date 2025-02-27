import React from 'react';
import { colors } from '../../lib/design-tokens/colors';
import { focusClasses } from '../../lib/design-tokens/focus';
import { spacingTokens } from '../../lib/design-tokens/spacing';

export type CardVariant = 'default' | 'outlined' | 'elevated';
export type CardBorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render inside the card */
  children: React.ReactNode;
  /** Visual style variant of the card */
  variant?: CardVariant;
  /** Border radius size */
  borderRadius?: CardBorderRadius;
  /** Whether the card is interactive (clickable) */
  interactive?: boolean;
  /** Whether the card should be focusable */
  focusable?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Accessible role for the card */
  role?: string;
  /** Accessible label for the card */
  'aria-label'?: string;
  /** ID of an element that labels this card */
  'aria-labelledby'?: string;
}

/**
 * Card component for displaying content in a contained card format
 *
 * @example
 * // Basic usage
 * <Card>
 *   <CardHeader>
 *     <Heading level={3}>Card Title</Heading>
 *   </CardHeader>
 *   <CardBody>
 *     <Text>Card content goes here</Text>
 *   </CardBody>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 *
 * @example
 * // Interactive card with focus states
 * <Card
 *   interactive
 *   focusable
 *   onClick={handleClick}
 *   aria-label="Product information"
 * >
 *   <CardBody>
 *     <Text>Click this card for more information</Text>
 *   </CardBody>
 * </Card>
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  borderRadius = 'lg',
  interactive = false,
  focusable = false,
  className = '',
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...rest
}) => {
  // Define variant styles
  const variantStyles: Record<CardVariant, string> = {
    'default': 'bg-white shadow-md',
    'outlined': 'bg-white border border-gray-200',
    'elevated': 'bg-white shadow-lg',
  };

  // Define border radius styles
  const borderRadiusStyles: Record<CardBorderRadius, string> = {
    'none': 'rounded-none',
    'sm': 'rounded-sm',
    'md': 'rounded',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    'full': 'rounded-full',
  };

  // Define interactive styles
  const interactiveStyles = interactive
    ? 'cursor-pointer transition-all duration-200 hover:shadow-lg active:shadow-md'
    : '';

  // Define focus styles
  const focusStyles = focusable
    ? focusClasses.default
    : '';

  // Combined classes
  const cardClasses = [
    variantStyles[variant],
    borderRadiusStyles[borderRadius],
    'overflow-hidden',
    interactiveStyles,
    focusStyles,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      tabIndex={focusable ? 0 : undefined}
      role={role || (interactive ? 'button' : undefined)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render inside the card header */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CardHeader component for the top section of a card
 */
export const CardHeader: React.FC<CardHeaderProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render inside the card body */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CardBody component for the main content area of a card
 */
export const CardBody: React.FC<CardBodyProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={`px-6 py-4 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render inside the card footer */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CardFooter component for the bottom section of a card
 */
export const CardFooter: React.FC<CardFooterProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};