# Typography Components

The MyMiamiDoctor website uses a consistent typography system to ensure readability, accessibility, and visual hierarchy across the site. This document outlines the available typography components and their usage.

## Heading Component

The `Heading` component is used for all headings (h1-h6) throughout the site. It ensures consistent styling while maintaining proper semantic HTML structure.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | 1-6 | 2 | The heading level (h1-h6) |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' | Based on level | The size of the heading |
| weight | 'normal' \| 'medium' \| 'semibold' \| 'bold' | 'bold' | The font weight |
| align | 'left' \| 'center' \| 'right' | 'left' | Text alignment |
| as | React.ElementType | h{level} | Override the rendered element |
| className | string | '' | Additional CSS classes |

### Usage Examples

```tsx
// Basic usage
<Heading level={1}>Main Page Title</Heading>

// With custom size
<Heading level={2} size="4xl">Larger Than Default Heading</Heading>

// With custom alignment
<Heading level={3} align="center">Centered Heading</Heading>

// Override the rendered element
<Heading level={2} as="h1">SEO-friendly heading (h1) with h2 styling</Heading>
```

## Text Component

The `Text` component is used for paragraphs, spans, and other text elements throughout the site.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | The size of the text |
| weight | 'normal' \| 'medium' \| 'semibold' \| 'bold' | 'normal' | The font weight |
| variant | 'body' \| 'caption' \| 'label' | 'body' | The text variant |
| align | 'left' \| 'center' \| 'right' | 'left' | Text alignment |
| as | React.ElementType | 'p' | The HTML element to render |
| className | string | '' | Additional CSS classes |

### Usage Examples

```tsx
// Basic usage
<Text>This is a standard paragraph of text.</Text>

// With custom size and weight
<Text size="lg" weight="semibold">Larger and more prominent text</Text>

// Caption variant
<Text variant="caption">Small caption text with reduced emphasis</Text>

// As a different HTML element
<Text as="span" variant="label">Form label text</Text>

// Centered text
<Text align="center">This text is centered</Text>
```

## Accessibility Considerations

- The typography components maintain proper semantic HTML structure
- Text sizes are responsive and adjust for different screen sizes
- Line heights are set for optimal readability
- Font weights provide sufficient contrast for readability
- Color contrast meets WCAG 2.1 AA standards

## Best Practices

1. Use the appropriate heading levels (h1-h6) to maintain proper document structure
2. Each page should have exactly one h1 element
3. Don't skip heading levels (e.g., don't go from h1 to h3)
4. Use the `variant` prop on the Text component to maintain consistent styling for similar text elements
5. Avoid using very small text sizes that may be difficult to read
6. Consider using the `weight` prop instead of the `variant` prop for emphasis when appropriate 