import React from 'react';
import { spacingTokens } from '../../lib/design-tokens/spacing';

export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FlexAlignSelf = 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexGrow = boolean | 0 | 1;
export type FlexShrink = boolean | 0 | 1;

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child elements to render inside the flex container */
  children: React.ReactNode;
  /** Main axis direction - determines the flow of flex items */
  direction?: FlexDirection;
  /** Direction at small breakpoint (640px+) */
  directionSm?: FlexDirection;
  /** Direction at medium breakpoint (768px+) */
  directionMd?: FlexDirection;
  /** Direction at large breakpoint (1024px+) */
  directionLg?: FlexDirection;
  /** Direction at extra large breakpoint (1280px+) */
  directionXl?: FlexDirection;
  /** Controls whether items wrap to new lines */
  wrap?: FlexWrap;
  /** Alignment along the main axis */
  justify?: FlexJustify;
  /** Alignment along the cross axis */
  align?: FlexAlign;
  /** Space between items */
  gap?: FlexGap;
  /** Gap at small breakpoint (640px+) */
  gapSm?: FlexGap;
  /** Gap at medium breakpoint (768px+) */
  gapMd?: FlexGap;
  /** Gap at large breakpoint (1024px+) */
  gapLg?: FlexGap;
  /** Gap at extra large breakpoint (1280px+) */
  gapXl?: FlexGap;
  /** Whether the container should grow to fill available space */
  grow?: FlexGrow;
  /** Whether the container should shrink to fit available space */
  shrink?: FlexShrink;
  /** Additional CSS classes */
  className?: string;
  /** Accessible role for the flex container */
  role?: string;
  /** Accessible label for the flex container */
  'aria-label'?: string;
  /** ID of an element that labels this flex container */
  'aria-labelledby'?: string;
}

/**
 * Flex component for creating flexible layouts
 *
 * @example
 * // Basic usage
 * <Flex>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * @example
 * // Responsive column layout
 * <Flex direction="col" directionLg="row" gap="md" align="center">
 *   <div>Stacks vertically on mobile, horizontally on desktop</div>
 *   <div>With medium spacing between items</div>
 * </Flex>
 */
export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  directionSm,
  directionMd,
  directionLg,
  directionXl,
  wrap = 'nowrap',
  justify = 'start',
  align = 'start',
  gap = 'none',
  gapSm,
  gapMd,
  gapLg,
  gapXl,
  grow,
  shrink,
  className = '',
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...rest
}) => {
  // Define direction styles
  const getDirectionClass = (dir: FlexDirection, breakpoint: string = '') => {
    const prefix = breakpoint ? `${breakpoint}:` : '';
    return `${prefix}flex-${dir}`;
  };

  // Define wrap styles
  const wrapStyles: Record<FlexWrap, string> = {
    'nowrap': 'flex-nowrap',
    'wrap': 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };

  // Define justify styles
  const justifyStyles: Record<FlexJustify, string> = {
    'start': 'justify-start',
    'end': 'justify-end',
    'center': 'justify-center',
    'between': 'justify-between',
    'around': 'justify-around',
    'evenly': 'justify-evenly',
  };

  // Define align styles
  const alignStyles: Record<FlexAlign, string> = {
    'start': 'items-start',
    'end': 'items-end',
    'center': 'items-center',
    'baseline': 'items-baseline',
    'stretch': 'items-stretch',
  };

  // Define gap styles using semantic spacing tokens
  const gapStyles: Record<FlexGap, string> = {
    'none': 'gap-0',
    'xs': `gap-[${spacingTokens.semanticSpacing.componentXS}]`,
    'sm': `gap-[${spacingTokens.semanticSpacing.componentSM}]`,
    'md': `gap-[${spacingTokens.semanticSpacing.componentMD}]`,
    'lg': `gap-[${spacingTokens.semanticSpacing.componentLG}]`,
    'xl': `gap-[${spacingTokens.semanticSpacing.componentXL}]`,
  };

  // Define responsive gap styles
  const getGapClass = (gapSize: FlexGap, breakpoint: string = '') => {
    if (!gapSize) return null;
    const prefix = breakpoint ? `${breakpoint}:` : '';
    return `${prefix}${gapStyles[gapSize]}`;
  };

  // Build responsive direction classes
  const directionClasses = [
    getDirectionClass(direction),
    directionSm && getDirectionClass(directionSm, 'sm'),
    directionMd && getDirectionClass(directionMd, 'md'),
    directionLg && getDirectionClass(directionLg, 'lg'),
    directionXl && getDirectionClass(directionXl, 'xl'),
  ].filter(Boolean);

  // Build responsive gap classes
  const gapClasses = [
    getGapClass(gap),
    gapSm && getGapClass(gapSm, 'sm'),
    gapMd && getGapClass(gapMd, 'md'),
    gapLg && getGapClass(gapLg, 'lg'),
    gapXl && getGapClass(gapXl, 'xl'),
  ].filter(Boolean);

  // Define grow and shrink styles
  const growClass = grow === true || grow === 1 ? 'grow' : grow === 0 ? 'grow-0' : '';
  const shrinkClass = shrink === true || shrink === 1 ? 'shrink' : shrink === 0 ? 'shrink-0' : '';

  // Combined classes
  const flexClasses = [
    'flex',
    ...directionClasses,
    wrapStyles[wrap],
    justifyStyles[justify],
    alignStyles[align],
    ...gapClasses,
    growClass,
    shrinkClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={flexClasses}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      {children}
    </div>
  );
};

Flex.displayName = 'Flex';