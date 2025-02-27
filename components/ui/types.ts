/**
 * Common types for UI components
 */

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Standard UI component variants
 */
export type UIVariant = 
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'text'
  | 'danger'
  | 'success';

/**
 * Standard UI component sizes
 */
export type UISize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Base props for interactive components (buttons, links, etc)
 */
export interface InteractiveBaseProps {
  variant?: UIVariant;
  size?: UISize;
  isFullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

/**
 * Props for button elements
 */
export interface ButtonElementProps extends 
  InteractiveBaseProps, 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof InteractiveBaseProps> {
  href?: undefined;
}

/**
 * Props for link elements styled as buttons
 */
export interface LinkButtonProps extends 
  InteractiveBaseProps, 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof InteractiveBaseProps> {
  href: string;
}

/**
 * Union type for button/link props
 */
export type InteractiveElementProps = ButtonElementProps | LinkButtonProps;

/**
 * Type guard to check if props are for a link
 */
export const isLink = (props: InteractiveElementProps): props is LinkButtonProps => {
  return 'href' in props && props.href !== undefined;
}; 