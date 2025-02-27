/**
 * Design tokens for the MyMiamiDoctor UI
 * 
 * This file exports all design tokens from a single entry point.
 */

// Import all token modules
import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import breakpoints from './breakpoints';
import focus from './focus';

// Export individual token modules
export {
  colors,
  typography,
  spacing,
  breakpoints,
  focus,
};

// Export all tokens as a single object
const designTokens = {
  colors,
  typography,
  spacing,
  breakpoints,
  focus,
};

export default designTokens;