/**
 * Focus tokens for the MyMiamiDoctor UI
 * 
 * This file defines the focus styles for the application with a focus on:
 * - Ensuring visible focus indicators for keyboard navigation
 * - Meeting WCAG 2.1 AA accessibility standards
 * - Providing consistent focus styles across components
 */

import { colors } from './colors';

// Focus ring styles
export const focusRing = {
  // Default focus ring
  default: {
    ring: `2px solid ${colors.primary[500]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // Focus ring for primary elements
  primary: {
    ring: `2px solid ${colors.primary[500]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // Focus ring for secondary elements
  secondary: {
    ring: `2px solid ${colors.secondary[500]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // Focus ring for error states
  error: {
    ring: `2px solid ${colors.error[500]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // Focus ring for success states
  success: {
    ring: `2px solid ${colors.success[500]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // Focus ring for warning states
  warning: {
    ring: `2px solid ${colors.warning[500]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // High contrast focus ring for better visibility
  highContrast: {
    ring: `3px solid ${colors.primary[700]}`,
    offset: '2px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
  
  // Within focus ring (for nested focusable elements)
  within: {
    ring: `1px solid ${colors.primary[500]}`,
    offset: '1px',
    outline: 'none',
    transition: 'box-shadow 0.2s ease-in-out',
  },
};

// Focus styles for different component types
export const focusStyles = {
  // Button focus styles
  button: {
    default: `
      outline: none;
      box-shadow: 0 0 0 ${focusRing.default.offset} ${colors.primary[500]};
      transition: box-shadow 0.2s ease-in-out;
    `,
    primary: `
      outline: none;
      box-shadow: 0 0 0 ${focusRing.primary.offset} ${colors.primary[500]};
      transition: box-shadow 0.2s ease-in-out;
    `,
    secondary: `
      outline: none;
      box-shadow: 0 0 0 ${focusRing.secondary.offset} ${colors.secondary[500]};
      transition: box-shadow 0.2s ease-in-out;
    `,
  },
  
  // Input focus styles
  input: {
    default: `
      outline: none;
      border-color: ${colors.primary[500]};
      box-shadow: 0 0 0 ${focusRing.default.offset} ${colors.primary[100]};
      transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
    `,
    error: `
      outline: none;
      border-color: ${colors.error[500]};
      box-shadow: 0 0 0 ${focusRing.error.offset} ${colors.error[100]};
      transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
    `,
  },
  
  // Link focus styles
  link: {
    default: `
      outline: none;
      text-decoration: underline;
      text-underline-offset: 2px;
      box-shadow: 0 0 0 ${focusRing.default.offset} ${colors.primary[100]};
      transition: box-shadow 0.2s ease-in-out;
    `,
  },
  
  // Card focus styles
  card: {
    default: `
      outline: none;
      box-shadow: 0 0 0 ${focusRing.default.offset} ${colors.primary[500]};
      transition: box-shadow 0.2s ease-in-out;
    `,
  },
};

// Tailwind CSS classes for focus states
export const focusClasses = {
  // Default focus ring
  default: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  
  // Primary focus ring
  primary: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  
  // Secondary focus ring
  secondary: 'focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
  
  // Error focus ring
  error: 'focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2',
  
  // Success focus ring
  success: 'focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2',
  
  // Warning focus ring
  warning: 'focus:outline-none focus:ring-2 focus:ring-warning-500 focus:ring-offset-2',
  
  // High contrast focus ring
  highContrast: 'focus:outline-none focus:ring-3 focus:ring-primary-700 focus:ring-offset-2',
  
  // Within focus ring
  within: 'focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 focus-within:ring-offset-1',
  
  // Visible only when focused with keyboard (not mouse)
  keyboard: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
};

// Export all focus tokens as a single object
export const focusTokens = {
  focusRing,
  focusStyles,
  focusClasses,
};

export default focusTokens;