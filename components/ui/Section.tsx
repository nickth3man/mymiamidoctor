import React from 'react';
import { Container, ContainerWidth } from './Container';
import { spacingTokens } from '../../lib/design-tokens/spacing';
import { colors } from '../../lib/design-tokens/colors';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'default' | 'light' | 'dark' | 'primary' | 'secondary' | 'accent';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Child elements to render inside the section */
  children: React.ReactNode;
  /** Optional ID for the section (useful for navigation anchors) */
  id?: string;
  /** Width of the container within the section */
  containerWidth?: ContainerWidth;
  /** Vertical padding size for the section */
  padding?: SectionPadding;
  /** Background color of the section */
  background?: SectionBackground;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label for the section */
  'aria-label'?: string;
  /** ID of an element that labels this section */
  'aria-labelledby'?: string;
}

/**
 * Section component for creating page sections with consistent spacing and styling
 *
 * @example
 * // Basic usage
 * <Section padding="lg" background="light">
 *   <h2>Section Title</h2>
 *   <p>Section content goes here</p>
 * </Section>
 *
 * @example
 * // With accessibility attributes
 * <Section
 *   id="about"
 *   padding="xl"
 *   background="primary"
 *   aria-labelledby="about-heading"
 * >
 *   <h2 id="about-heading">About Us</h2>
 *   <p>Company information...</p>
 * </Section>
 */
export const Section: React.FC<SectionProps> = ({
  children,
  id,
  containerWidth = 'default',
  padding = 'lg',
  background = 'default',
  className = '',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...rest
}) => {
  // Define padding styles using semantic spacing tokens
  const paddingStyles: Record<SectionPadding, string> = {
    'none': 'py-0',
    'sm': `py-[${spacingTokens.semanticSpacing.sectionXS}] md:py-[${spacingTokens.semanticSpacing.sectionSM}]`,
    'md': `py-[${spacingTokens.semanticSpacing.sectionSM}] md:py-[${spacingTokens.semanticSpacing.sectionMD}]`,
    'lg': `py-[${spacingTokens.semanticSpacing.sectionMD}] md:py-[${spacingTokens.semanticSpacing.sectionLG}]`,
    'xl': `py-[${spacingTokens.semanticSpacing.sectionLG}] md:py-[${spacingTokens.semanticSpacing.sectionXL}]`,
  };

  // Define background styles with appropriate contrast for accessibility
  const backgroundStyles: Record<SectionBackground, string> = {
    'default': 'bg-background text-foreground',
    'light': 'bg-light text-foreground',
    'dark': 'bg-navy text-white',
    'primary': `bg-primary text-white focus-within:outline-white`,
    'secondary': `bg-secondary text-white focus-within:outline-white`,
    'accent': 'bg-accent text-foreground',
  };

  // Combined classes
  const sectionClasses = [
    paddingStyles[padding],
    backgroundStyles[background],
    'transition-colors duration-200', // Smooth transition for background color changes
    className
  ].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={sectionClasses}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...rest}
    >
      <Container width={containerWidth}>
        {children}
      </Container>
    </section>
  );
};

Section.displayName = 'Section';