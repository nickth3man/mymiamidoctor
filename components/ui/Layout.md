# Layout Components

The MyMiamiDoctor website uses a consistent set of layout components to ensure proper spacing, alignment, and responsive behavior across the site. This document outlines the available layout components and their usage.

## Container Component

The `Container` component provides consistent width constraints and horizontal padding across the site.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | 'default' \| 'narrow' \| 'wide' \| 'full' | 'default' | The maximum width of the container |
| alignment | 'left' \| 'center' \| 'right' | 'center' | The horizontal alignment of the container |
| noPadding | boolean | false | Whether to remove horizontal padding |
| className | string | '' | Additional CSS classes |

### Width Options

- `default`: 1280px max-width (max-w-7xl)
- `narrow`: 896px max-width (max-w-4xl)
- `wide`: 1536px max-width (max-w-screen-2xl)
- `full`: 100% width (max-w-full)

### Usage Examples

```tsx
// Basic usage
<Container>
  <p>Content with default width (1280px) and centered</p>
</Container>

// Narrow container
<Container width="narrow">
  <p>Content with narrow width (896px)</p>
</Container>

// Wide container aligned to the left
<Container width="wide" alignment="left">
  <p>Content with wide width (1536px) aligned to the left</p>
</Container>

// Full width container with no padding
<Container width="full" noPadding>
  <p>Full width content with no horizontal padding</p>
</Container>
```

## Grid Component

The `Grid` component provides a flexible grid layout system based on CSS Grid.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | 1-12 | 1 | Number of columns in the grid |
| columnsSm | 1-12 | undefined | Number of columns at the small breakpoint |
| columnsMd | 1-12 | undefined | Number of columns at the medium breakpoint |
| columnsLg | 1-12 | undefined | Number of columns at the large breakpoint |
| columnsXl | 1-12 | undefined | Number of columns at the extra large breakpoint |
| gap | 'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Gap between grid items |
| className | string | '' | Additional CSS classes |

### Gap Options

- `none`: No gap (gap-0)
- `xs`: Extra small gap (gap-2, 0.5rem)
- `sm`: Small gap (gap-4, 1rem)
- `md`: Medium gap (gap-6, 1.5rem)
- `lg`: Large gap (gap-8, 2rem)
- `xl`: Extra large gap (gap-10, 2.5rem)

### Usage Examples

```tsx
// Basic usage with 3 columns
<Grid columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>

// Responsive grid with different column counts at different breakpoints
<Grid columns={1} columnsMd={2} columnsLg={3} columnsXl={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>

// Grid with large gap
<Grid columns={2} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
</Grid>
```

## Flex Component

The `Flex` component provides a flexible layout system based on CSS Flexbox.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | 'row' \| 'row-reverse' \| 'col' \| 'col-reverse' | 'row' | Direction of the flex container |
| directionSm | 'row' \| 'row-reverse' \| 'col' \| 'col-reverse' | undefined | Direction at the small breakpoint |
| directionMd | 'row' \| 'row-reverse' \| 'col' \| 'col-reverse' | undefined | Direction at the medium breakpoint |
| directionLg | 'row' \| 'row-reverse' \| 'col' \| 'col-reverse' | undefined | Direction at the large breakpoint |
| directionXl | 'row' \| 'row-reverse' \| 'col' \| 'col-reverse' | undefined | Direction at the extra large breakpoint |
| wrap | 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap' | Whether items should wrap |
| justify | 'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' | 'start' | Horizontal alignment of items |
| align | 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' | 'start' | Vertical alignment of items |
| gap | 'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'none' | Gap between flex items |
| className | string | '' | Additional CSS classes |

### Usage Examples

```tsx
// Basic usage with row direction
<Flex>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>

// Column direction with centered items
<Flex direction="col" align="center" justify="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>

// Responsive direction that changes at different breakpoints
<Flex direction="col" directionMd="row" justify="between" align="center" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

## Section Component

The `Section` component provides a standard page section with consistent padding and container.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | undefined | ID for the section (useful for navigation) |
| containerWidth | 'default' \| 'narrow' \| 'wide' \| 'full' | 'default' | Width of the container inside the section |
| padding | 'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'lg' | Vertical padding of the section |
| background | 'default' \| 'light' \| 'dark' \| 'primary' \| 'secondary' \| 'accent' | 'default' | Background color of the section |
| className | string | '' | Additional CSS classes |

### Padding Options

- `none`: No padding (py-0)
- `sm`: Small padding (py-4 md:py-6)
- `md`: Medium padding (py-8 md:py-12)
- `lg`: Large padding (py-12 md:py-16)
- `xl`: Extra large padding (py-16 md:py-24)

### Background Options

- `default`: Default background (bg-background)
- `light`: Light background (bg-light)
- `dark`: Dark background (bg-navy)
- `primary`: Primary color background (bg-primary)
- `secondary`: Secondary color background (bg-secondary)
- `accent`: Accent color background (bg-accent)

### Usage Examples

```tsx
// Basic usage
<Section>
  <h2>Section Title</h2>
  <p>Section content</p>
</Section>

// Section with ID, narrow container, and primary background
<Section id="contact" containerWidth="narrow" background="primary">
  <h2>Contact Us</h2>
  <p>Contact form goes here</p>
</Section>

// Section with extra large padding and light background
<Section padding="xl" background="light">
  <h2>Featured Content</h2>
  <p>Featured content goes here</p>
</Section>
```

## Best Practices

1. Use the `Container` component to maintain consistent width constraints across the site
2. Use the `Grid` component for grid layouts instead of custom CSS
3. Use the `Flex` component for flexible layouts instead of custom CSS
4. Use the `Section` component to wrap page sections with consistent padding and container
5. Use responsive props to create layouts that adapt to different screen sizes
6. Combine layout components to create complex layouts (e.g., `Section` with `Grid` inside)
7. Use the `className` prop to add custom styles when needed 