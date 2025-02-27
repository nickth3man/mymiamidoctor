import React from 'react';
import { Container, ContainerWidth } from './Container';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'default' | 'light' | 'dark' | 'primary' | 'secondary' | 'accent';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  containerWidth?: ContainerWidth;
  padding?: SectionPadding;
  background?: SectionBackground;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  containerWidth = 'default',
  padding = 'lg',
  background = 'default',
  className = '',
  ...rest
}) => {
  // Define padding styles
  const paddingStyles: Record<SectionPadding, string> = {
    'none': 'py-0',
    'sm': 'py-4 md:py-6',
    'md': 'py-8 md:py-12',
    'lg': 'py-12 md:py-16',
    'xl': 'py-16 md:py-24',
  };

  // Define background styles
  const backgroundStyles: Record<SectionBackground, string> = {
    'default': 'bg-background text-foreground',
    'light': 'bg-light text-foreground',
    'dark': 'bg-navy text-white',
    'primary': 'bg-primary text-white',
    'secondary': 'bg-secondary text-white',
    'accent': 'bg-accent text-foreground',
  };

  // Combined classes
  const sectionClasses = [
    paddingStyles[padding],
    backgroundStyles[background],
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses} {...rest}>
      <Container width={containerWidth}>
        {children}
      </Container>
    </section>
  );
};

Section.displayName = 'Section'; 