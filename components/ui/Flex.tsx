import React from 'react';

export type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: FlexDirection;
  directionSm?: FlexDirection;
  directionMd?: FlexDirection;
  directionLg?: FlexDirection;
  directionXl?: FlexDirection;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  className?: string;
}

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
  className = '',
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

  // Define gap styles
  const gapStyles: Record<FlexGap, string> = {
    'none': 'gap-0',
    'xs': 'gap-2',
    'sm': 'gap-4',
    'md': 'gap-6',
    'lg': 'gap-8',
    'xl': 'gap-10',
  };

  // Build responsive direction classes
  const directionClasses = [
    getDirectionClass(direction),
    directionSm && getDirectionClass(directionSm, 'sm'),
    directionMd && getDirectionClass(directionMd, 'md'),
    directionLg && getDirectionClass(directionLg, 'lg'),
    directionXl && getDirectionClass(directionXl, 'xl'),
  ].filter(Boolean);

  // Combined classes
  const flexClasses = [
    'flex',
    ...directionClasses,
    wrapStyles[wrap],
    justifyStyles[justify],
    alignStyles[align],
    gapStyles[gap],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={flexClasses} {...rest}>
      {children}
    </div>
  );
};

Flex.displayName = 'Flex'; 