# UI Components

This directory contains reusable UI components for the MyMiamiDoctor website.

## Button Component

The Button component is a versatile UI element that supports various styles, sizes, and states. It can function as both a regular button and a link.

### Features

- **Multiple Variants**: primary, secondary, outline, text, danger, success
- **Responsive Sizes**: xs, sm, md, lg
- **States**: loading, disabled
- **Icons**: left icon, right icon, or both
- **Full-width Option**: For responsive layouts
- **Link Support**: Can act as both button and link (using Next.js Link)
- **Accessibility**: ARIA attributes, focus states, and screen reader support

### Usage Examples

```tsx
// Basic button
<Button variant="primary">Click Me</Button>

// Button with loading state
<Button variant="primary" isLoading={true}>Loading</Button>

// Link button
<Button variant="outline" href="/about">About Us</Button>

// Button with icon
<Button 
  variant="secondary"
  leftIcon={<SomeIcon />}
>
  With Icon
</Button>

// Full-width button
<Button variant="primary" isFullWidth>Full Width</Button>

// Disabled button
<Button variant="primary" disabled>Disabled</Button>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' \| 'text' \| 'danger' \| 'success' | 'primary' | Button style variant |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| isFullWidth | boolean | false | Whether button should take full width |
| isLoading | boolean | false | Shows loading spinner when true |
| leftIcon | ReactNode | undefined | Icon to show on left side |
| rightIcon | ReactNode | undefined | Icon to show on right side |
| href | string | undefined | If provided, renders as link |
| disabled | boolean | false | Disables button when true |
| className | string | '' | Additional CSS classes |

### Accessibility Features

The Button component implements several accessibility features:

- Proper focus states with visible focus rings for keyboard navigation
- ARIA attributes for screen readers (`role="button"`, `aria-disabled`)
- Loading state announcements for screen readers
- Proper disabled state handling for both buttons and links
- Color contrast that meets WCAG standards

### Implementation

The Button component is implemented using a combination of:

- React (with TypeScript)
- Next.js Link for navigation
- Tailwind CSS for styling
- React.forwardRef for ref forwarding 