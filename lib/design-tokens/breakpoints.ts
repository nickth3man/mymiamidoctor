/**
 * Breakpoint tokens for the MyMiamiDoctor UI
 * 
 * This file defines the responsive breakpoints for the application with a focus on:
 * - Supporting a wide range of device sizes
 * - Providing consistent breakpoints across components
 * - Enabling responsive design patterns
 */

// Breakpoint values (in pixels)
export const breakpointValues = {
  xs: 320,  // Small mobile devices
  sm: 640,  // Large mobile devices
  md: 768,  // Tablets
  lg: 1024, // Small desktops/laptops
  xl: 1280, // Large desktops
  '2xl': 1536, // Extra large screens
};

// Breakpoint strings for media queries (in pixels)
export const breakpoints = {
  xs: `${breakpointValues.xs}px`,
  sm: `${breakpointValues.sm}px`,
  md: `${breakpointValues.md}px`,
  lg: `${breakpointValues.lg}px`,
  xl: `${breakpointValues.xl}px`,
  '2xl': `${breakpointValues['2xl']}px`,
};

// Media query helpers
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  // Max-width queries
  xsMax: `@media (max-width: ${breakpointValues.sm - 1}px)`,
  smMax: `@media (max-width: ${breakpointValues.md - 1}px)`,
  mdMax: `@media (max-width: ${breakpointValues.lg - 1}px)`,
  lgMax: `@media (max-width: ${breakpointValues.xl - 1}px)`,
  xlMax: `@media (max-width: ${breakpointValues['2xl'] - 1}px)`,
  // Range queries
  xsOnly: `@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpointValues.sm - 1}px)`,
  smOnly: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpointValues.md - 1}px)`,
  mdOnly: `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpointValues.lg - 1}px)`,
  lgOnly: `@media (min-width: ${breakpoints.lg}) and (max-width: ${breakpointValues.xl - 1}px)`,
  xlOnly: `@media (min-width: ${breakpoints.xl}) and (max-width: ${breakpointValues['2xl'] - 1}px)`,
  '2xlOnly': `@media (min-width: ${breakpoints['2xl']})`,
  // Special queries
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',
  motion: '@media (prefers-reduced-motion: no-preference)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  darkMode: '@media (prefers-color-scheme: dark)',
  lightMode: '@media (prefers-color-scheme: light)',
  hover: '@media (hover: hover)',
  touchDevice: '@media (hover: none)',
  highContrast: '@media (forced-colors: active)',
};

// Container max widths for each breakpoint
export const containerMaxWidths = {
  xs: '100%',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Export all breakpoint tokens as a single object
export const breakpointTokens = {
  breakpointValues,
  breakpoints,
  mediaQueries,
  containerMaxWidths,
};

export default breakpointTokens;