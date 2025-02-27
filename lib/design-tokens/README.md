# Design Tokens

This directory contains the design tokens for the MyMiamiDoctor UI. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use these tokens in place of hard-coded values to ensure consistency across the application.

## Token Categories

### Colors (`colors.ts`)

Color tokens define the color palette for the application, including:
- Primary and secondary brand colors
- Neutral colors (grays)
- Semantic colors (success, warning, error)
- Text colors
- Background colors
- Border colors
- Focus ring colors

All colors are defined with proper contrast ratios to meet WCAG 2.1 AA accessibility standards:
- Text contrast ratio of at least 4.5:1 for normal text
- Text contrast ratio of at least 3:1 for large text
- UI component contrast ratio of at least 3:1

### Typography (`typography.ts`)

Typography tokens define the typographic system for the application, including:
- Font families
- Font sizes (fixed and fluid)
- Font weights
- Line heights
- Letter spacing
- Paragraph spacing
- Word spacing
- Text transforms
- Text decorations
- Heading styles
- Text styles

Typography tokens are designed to meet WCAG 2.1 AA accessibility standards:
- Line height of at least 1.5 times font size for body text
- Letter spacing of at least 0.12 times font size
- Paragraph spacing of at least 2 times font size
- Word spacing of at least 0.16 times font size

### Spacing (`spacing.ts`)

Spacing tokens define the spacing system for the application, including:
- Base spacing scale
- Semantic spacing aliases (component, layout, section, inset, stack, inline)
- Responsive spacing for different breakpoints
- Touch target spacing (minimum 44px for WCAG 2.1 AA)

### Breakpoints (`breakpoints.ts`)

Breakpoint tokens define the responsive breakpoints for the application, including:
- Breakpoint values (xs, sm, md, lg, xl, 2xl)
- Media query helpers
- Container max widths

### Focus (`focus.ts`)

Focus tokens define the focus styles for the application, including:
- Focus ring styles
- Focus styles for different component types
- Tailwind CSS classes for focus states

All focus styles are designed to meet WCAG 2.1 AA accessibility standards:
- Visible focus indicators for keyboard navigation
- Sufficient contrast for focus indicators (at least 3:1)

## Usage

Import the design tokens from the index file:

```typescript
// Import all tokens
import designTokens from 'lib/design-tokens';

// Use tokens
const primaryColor = designTokens.colors.primary[500];
const headingFontSize = designTokens.typography.fontSize['2xl'];
const standardSpacing = designTokens.spacing.spacing[4];

// Import specific token categories
import { colors, typography, spacing } from 'lib/design-tokens';

// Use specific token categories
const secondaryColor = colors.secondary[600];
const bodyLineHeight = typography.lineHeight.normal;
const touchTargetSize = spacing.semanticSpacing.touchTarget;
```

## Accessibility Considerations

All design tokens are created with accessibility in mind, following WCAG 2.1 AA standards:

1. **Color Contrast**:
   - Text: 4.5:1 minimum contrast ratio (7:1 for AAA)
   - Large Text: 3:1 minimum contrast ratio (4.5:1 for AAA)
   - UI Components: 3:1 minimum contrast ratio

2. **Typography**:
   - Line Height: At least 1.5 times the font size
   - Letter Spacing: At least 0.12 times the font size
   - Paragraph Spacing: At least 2 times the font size
   - Word Spacing: At least 0.16 times the font size

3. **Focus Indicators**:
   - Visible focus indicators for keyboard navigation
   - Focus indicators with at least 3:1 contrast ratio

4. **Touch Targets**:
   - Minimum size of 44×44 pixels for interactive elements

## Responsive Design

The design tokens support responsive design through:
- Fluid typography that scales based on viewport size
- Responsive spacing that adjusts for different breakpoints
- Breakpoint-specific styles for different device sizes
- Media query helpers for creating responsive components

## Browser Compatibility

The design tokens are compatible with all modern browsers:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)