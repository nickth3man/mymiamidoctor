import React from 'react';
import { cn } from '../../lib/utils';
import { breakpoints } from '../../lib/design-tokens';
import { spacing } from '../../lib/design-tokens/spacing';

export type ContainerWidth = 'default' | 'narrow' | 'wide' | 'full';
export type ContainerAlignment = 'left' | 'center' | 'right';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: ContainerWidth;
  alignment?: ContainerAlignment;
  noPadding?: boolean;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  width = 'default',
  alignment = 'center',
  noPadding = false,
  className = '',
  ...rest
}) => {
  // Define width styles using container max widths from design tokens
  const widthStyles: Record<ContainerWidth, string> = {
    'default': 'max-w-7xl', // ~1280px
    'narrow': 'max-w-4xl',  // ~896px
    'wide': 'max-w-screen-2xl', // ~1536px
    'full': 'max-w-full',
  };

  // Define alignment styles
  const alignmentStyles: Record<ContainerAlignment, string> = {
    'left': 'mr-auto',
    'center': 'mx-auto',
    'right': 'ml-auto',
  };

  // Define consistent padding styles across breakpoints
  const paddingStyles = noPadding ? '' : 'px-4 sm:px-6 md:px-8';

  // Combined classes using cn utility for better class merging
  const containerClasses = cn(
    widthStyles[width],
    alignmentStyles[alignment],
    paddingStyles,
    'w-full',
    className
  );

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';