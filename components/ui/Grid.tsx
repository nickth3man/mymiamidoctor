import React from 'react';
import { cn } from '../../lib/utils';
import { spacing } from '../../lib/design-tokens/spacing';
import { breakpoints } from '../../lib/design-tokens';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: GridColumns;
  columnsSm?: GridColumns;
  columnsMd?: GridColumns;
  columnsLg?: GridColumns;
  columnsXl?: GridColumns;
  gap?: GridGap;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  columnsSm,
  columnsMd,
  columnsLg,
  columnsXl,
  gap = 'md',
  className = '',
  ...rest
}) => {
  // Define grid template columns styles
  const getColumnsClass = (cols: GridColumns, breakpoint: string = '') => {
    const prefix = breakpoint ? `${breakpoint}:` : '';
    return `${prefix}grid-cols-${cols}`;
  };

  // Define responsive gap styles with better spacing for small screens
  const gapStyles: Record<GridGap, string> = {
    'none': 'gap-0',
    'xs': 'gap-2 sm:gap-3',
    'sm': 'gap-3 sm:gap-4',
    'md': 'gap-4 sm:gap-6',
    'lg': 'gap-6 sm:gap-8',
    'xl': 'gap-8 sm:gap-10',
  };

  // Build responsive column classes
  const responsiveColumns = getColumnsClass(columns);
  const responsiveColumnsSm = columnsSm ? getColumnsClass(columnsSm, 'sm') : '';
  const responsiveColumnsMd = columnsMd ? getColumnsClass(columnsMd, 'md') : '';
  const responsiveColumnsLg = columnsLg ? getColumnsClass(columnsLg, 'lg') : '';
  const responsiveColumnsXl = columnsXl ? getColumnsClass(columnsXl, 'xl') : '';

  // Combined classes using cn utility for better class merging
  const gridClasses = cn(
    'grid',
    'w-full',
    responsiveColumns,
    responsiveColumnsSm,
    responsiveColumnsMd,
    responsiveColumnsLg,
    responsiveColumnsXl,
    gapStyles[gap],
    className
  );

  return (
    <div className={gridClasses} {...rest}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';