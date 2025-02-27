/**
 * Spacing tokens for the MyMiamiDoctor UI
 * 
 * This file defines the spacing system for the application with a focus on:
 * - Providing a consistent spacing scale
 * - Supporting responsive layouts
 * - Ensuring proper spacing for touch targets
 */

// Base spacing unit (in rem)
const baseUnit = 0.25; // 4px

// Spacing scale (in rem)
export const spacing = {
  0: '0',
  px: '1px',
  0.5: `${baseUnit * 0.5}rem`, // 2px
  1: `${baseUnit}rem`,         // 4px
  1.5: `${baseUnit * 1.5}rem`, // 6px
  2: `${baseUnit * 2}rem`,     // 8px
  2.5: `${baseUnit * 2.5}rem`, // 10px
  3: `${baseUnit * 3}rem`,     // 12px
  3.5: `${baseUnit * 3.5}rem`, // 14px
  4: `${baseUnit * 4}rem`,     // 16px
  5: `${baseUnit * 5}rem`,     // 20px
  6: `${baseUnit * 6}rem`,     // 24px
  7: `${baseUnit * 7}rem`,     // 28px
  8: `${baseUnit * 8}rem`,     // 32px
  9: `${baseUnit * 9}rem`,     // 36px
  10: `${baseUnit * 10}rem`,   // 40px
  11: `${baseUnit * 11}rem`,   // 44px - Minimum touch target size (WCAG 2.1)
  12: `${baseUnit * 12}rem`,   // 48px
  14: `${baseUnit * 14}rem`,   // 56px
  16: `${baseUnit * 16}rem`,   // 64px
  20: `${baseUnit * 20}rem`,   // 80px
  24: `${baseUnit * 24}rem`,   // 96px
  28: `${baseUnit * 28}rem`,   // 112px
  32: `${baseUnit * 32}rem`,   // 128px
  36: `${baseUnit * 36}rem`,   // 144px
  40: `${baseUnit * 40}rem`,   // 160px
  44: `${baseUnit * 44}rem`,   // 176px
  48: `${baseUnit * 48}rem`,   // 192px
  52: `${baseUnit * 52}rem`,   // 208px
  56: `${baseUnit * 56}rem`,   // 224px
  60: `${baseUnit * 60}rem`,   // 240px
  64: `${baseUnit * 64}rem`,   // 256px
  72: `${baseUnit * 72}rem`,   // 288px
  80: `${baseUnit * 80}rem`,   // 320px
  96: `${baseUnit * 96}rem`,   // 384px
};

// Semantic spacing aliases
export const semanticSpacing = {
  // Component spacing
  componentXS: spacing[1],
  componentSM: spacing[2],
  componentMD: spacing[4],
  componentLG: spacing[6],
  componentXL: spacing[8],
  
  // Layout spacing
  layoutXS: spacing[4],
  layoutSM: spacing[6],
  layoutMD: spacing[8],
  layoutLG: spacing[12],
  layoutXL: spacing[16],
  
  // Section spacing
  sectionXS: spacing[8],
  sectionSM: spacing[12],
  sectionMD: spacing[16],
  sectionLG: spacing[24],
  sectionXL: spacing[32],
  
  // Inset (padding) spacing
  insetXS: spacing[2],
  insetSM: spacing[4],
  insetMD: spacing[6],
  insetLG: spacing[8],
  insetXL: spacing[10],
  
  // Stack (vertical) spacing
  stackXS: spacing[2],
  stackSM: spacing[4],
  stackMD: spacing[6],
  stackLG: spacing[8],
  stackXL: spacing[12],
  
  // Inline (horizontal) spacing
  inlineXS: spacing[1],
  inlineSM: spacing[2],
  inlineMD: spacing[4],
  inlineLG: spacing[6],
  inlineXL: spacing[8],
  
  // Touch target spacing
  touchTarget: spacing[11], // 44px - Minimum touch target size (WCAG 2.1)
  touchTargetLG: spacing[12], // 48px - Preferred touch target size
};

// Responsive spacing for different breakpoints
export const responsiveSpacing = {
  // Container padding
  containerPadding: {
    xs: spacing[4],  // 16px on mobile
    sm: spacing[6],  // 24px on small tablets
    md: spacing[8],  // 32px on large tablets
    lg: spacing[10], // 40px on desktop
    xl: spacing[12], // 48px on large desktop
  },
  
  // Section padding
  sectionPadding: {
    xs: spacing[8],  // 32px on mobile
    sm: spacing[12], // 48px on small tablets
    md: spacing[16], // 64px on large tablets
    lg: spacing[20], // 80px on desktop
    xl: spacing[24], // 96px on large desktop
  },
  
  // Grid gap
  gridGap: {
    xs: spacing[4], // 16px on mobile
    sm: spacing[6], // 24px on small tablets
    md: spacing[8], // 32px on large tablets
    lg: spacing[8], // 32px on desktop
    xl: spacing[8], // 32px on large desktop
  },
};

// Export all spacing tokens as a single object
export const spacingTokens = {
  spacing,
  semanticSpacing,
  responsiveSpacing,
};

export default spacingTokens;