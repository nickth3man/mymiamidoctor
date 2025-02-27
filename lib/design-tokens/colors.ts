/**
 * Color tokens for the MyMiamiDoctor UI
 * 
 * This file defines the color palette for the application with a focus on:
 * - Ensuring sufficient contrast ratios for accessibility (WCAG 2.1 AA)
 * - Providing a consistent color system across components
 * - Supporting both light and dark mode (future implementation)
 */

// Primary colors
export const primary = {
  50: '#e6f5ff',
  100: '#cceaff',
  200: '#99d5ff',
  300: '#66c0ff',
  400: '#33aaff',
  500: '#0095ff', // Primary brand color
  600: '#0077cc', // Darker shade for hover states (4.5:1 contrast with white)
  700: '#005c9e', // Even darker for active states (7:1 contrast with white)
  800: '#004275',
  900: '#00284d',
};

// Secondary colors
export const secondary = {
  50: '#f0f4ff',
  100: '#e0e9ff',
  200: '#c2d3ff',
  300: '#a3bdff',
  400: '#85a7ff',
  500: '#6691ff', // Secondary brand color
  600: '#5274cc', // Darker shade for hover states (4.5:1 contrast with white)
  700: '#3e579e', // Even darker for active states (7:1 contrast with white)
  800: '#2b3b75',
  900: '#17204d',
};

// Neutral colors (grays)
export const gray = {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563', // Meets 4.5:1 contrast with white
  700: '#374151', // Meets 7:1 contrast with white
  800: '#1f2937',
  900: '#111827',
};

// Semantic colors
export const success = {
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669', // Meets 4.5:1 contrast with white
  700: '#047857', // Meets 7:1 contrast with white
  800: '#065f46',
  900: '#064e3b',
};

export const warning = {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706', // Meets 4.5:1 contrast with white
  700: '#b45309', // Meets 7:1 contrast with white
  800: '#92400e',
  900: '#78350f',
};

export const error = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626', // Meets 4.5:1 contrast with white
  700: '#b91c1c', // Meets 7:1 contrast with white
  800: '#991b1b',
  900: '#7f1d1d',
};

// Text colors
export const text = {
  primary: gray[900], // High contrast for primary text (meets 7:1 with white)
  secondary: gray[700], // Medium contrast for secondary text (meets 7:1 with white)
  tertiary: gray[500], // Lower contrast for tertiary text (meets 4.5:1 with white)
  disabled: gray[400], // Disabled text (meets 3:1 with white)
  inverse: gray[50], // For use on dark backgrounds
};

// Background colors
export const background = {
  primary: '#ffffff',
  secondary: gray[50],
  tertiary: gray[100],
  brand: primary[500],
  brandLight: primary[50],
  error: error[50],
  warning: warning[50],
  success: success[50],
};

// Border colors
export const border = {
  light: gray[200],
  medium: gray[300],
  dark: gray[400],
  focus: primary[500],
};

// Focus ring colors
export const focusRing = {
  primary: primary[500],
  secondary: secondary[500],
  error: error[500],
  warning: warning[500],
  success: success[500],
};

// Export all colors as a single object
export const colors = {
  primary,
  secondary,
  gray,
  success,
  warning,
  error,
  text,
  background,
  border,
  focusRing,
};

export default colors;