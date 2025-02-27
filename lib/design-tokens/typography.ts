/**
 * Typography tokens for the MyMiamiDoctor UI
 * 
 * This file defines the typography system for the application with a focus on:
 * - Ensuring readability across device sizes
 * - Maintaining proper line heights for accessibility
 * - Providing consistent text spacing
 * - Supporting responsive typography
 */

// Font families
export const fontFamily = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  heading: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

// Font sizes (in rem to support user font size preferences)
export const fontSize = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
};

// Fluid font sizes using clamp for responsive typography
// Format: clamp(min, preferred, max)
export const fluidFontSize = {
  xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
  sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
  base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
  lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
  xl: 'clamp(1.25rem, 1.125rem + 0.75vw, 1.5rem)',
  '2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 1.875rem)',
  '3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem)',
  '4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)',
  '5xl': 'clamp(3rem, 2.25rem + 3.75vw, 3.75rem)',
  '6xl': 'clamp(3.75rem, 3rem + 5vw, 4.5rem)',
};

// Font weights
export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

// Line heights (multiplier of font size)
// WCAG 2.1 recommends line height of at least 1.5 for body text
export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',     // Meets WCAG 2.1 AA for body text
  relaxed: '1.625',
  loose: '2',
  // Specific line heights for headings
  heading: {
    xs: '1.5',       // For smallest headings
    sm: '1.4',
    md: '1.3',
    lg: '1.2',
    xl: '1.1',       // For largest headings
  },
};

// Letter spacing
// WCAG 2.1 recommends letter spacing of at least 0.12 times font size
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
  // Accessibility-specific letter spacing
  accessible: '0.12em', // Meets WCAG 2.1 AA
};

// Paragraph spacing
// WCAG 2.1 recommends paragraph spacing of at least 2 times font size
export const paragraphSpacing = {
  normal: '1em',
  wide: '1.5em',
  wider: '2em',      // Meets WCAG 2.1 AA
  widest: '2.5em',
};

// Word spacing
// WCAG 2.1 recommends word spacing of at least 0.16 times font size
export const wordSpacing = {
  normal: '0',
  wide: '0.1em',
  wider: '0.16em',   // Meets WCAG 2.1 AA
  widest: '0.25em',
};

// Text transforms
export const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  none: 'none',
};

// Text decorations
export const textDecoration = {
  underline: 'underline',
  lineThrough: 'line-through',
  none: 'none',
};

// Heading styles mapping
export const headingStyles = {
  h1: {
    fontSize: fluidFontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.heading.xl,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fluidFontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.heading.lg,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fluidFontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.heading.md,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fluidFontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.heading.sm,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fluidFontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.heading.xs,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fluidFontSize.base,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.heading.xs,
    letterSpacing: letterSpacing.normal,
  },
};

// Text styles mapping
export const textStyles = {
  body: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodyLarge: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
};

// Export all typography tokens as a single object
export const typography = {
  fontFamily,
  fontSize,
  fluidFontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  paragraphSpacing,
  wordSpacing,
  textTransform,
  textDecoration,
  headingStyles,
  textStyles,
};

export default typography;