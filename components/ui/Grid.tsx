import React from 'react';

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

  // Define gap styles
  const gapStyles: Record<GridGap, string> = {
    'none': 'gap-0',
    'xs': 'gap-2',
    'sm': 'gap-4',
    'md': 'gap-6',
    'lg': 'gap-8',
    'xl': 'gap-10',
  };

  // Build responsive column classes
  const columnClasses = [
    getColumnsClass(columns),
    columnsSm && getColumnsClass(columnsSm, 'sm'),
    columnsMd && getColumnsClass(columnsMd, 'md'),
    columnsLg && getColumnsClass(columnsLg, 'lg'),
    columnsXl && getColumnsClass(columnsXl, 'xl'),
  ].filter(Boolean);

  // Combined classes
  const gridClasses = [
    'grid',
    ...columnClasses,
    gapStyles[gap],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses} {...rest}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid'; 