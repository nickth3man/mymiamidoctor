# Form Components

The MyMiamiDoctor website uses a consistent set of form components to ensure usability, accessibility, and visual consistency across all forms. This document outlines the available form components and their usage.

## TextField Component

The `TextField` component is used for text input fields throughout the site.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | (required) | The label for the input field |
| id | string | Auto-generated | The ID for the input field |
| type | 'text' \| 'email' \| 'password' \| 'tel' \| 'url' \| 'number' \| 'search' | 'text' | The type of input field |
| error | string | undefined | Error message to display |
| hint | string | undefined | Hint text to display below the input |
| fullWidth | boolean | false | Whether the input should take up the full width |
| className | string | '' | Additional CSS classes for the container |
| labelClassName | string | '' | Additional CSS classes for the label |
| inputClassName | string | '' | Additional CSS classes for the input |
| errorClassName | string | '' | Additional CSS classes for the error message |
| hintClassName | string | '' | Additional CSS classes for the hint text |

### Usage Examples

```tsx
// Basic usage
<TextField label="Name" name="name" />

// With error message
<TextField 
  label="Email" 
  name="email" 
  type="email" 
  error="Please enter a valid email address" 
/>

// With hint text
<TextField 
  label="Password" 
  name="password" 
  type="password" 
  hint="Password must be at least 8 characters" 
/>

// Required field
<TextField label="Phone Number" name="phone" type="tel" required />

// Full width
<TextField label="Message" name="message" fullWidth />
```

## Select Component

The `Select` component is used for dropdown selection fields throughout the site.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | (required) | The label for the select field |
| options | SelectOption[] | (required) | Array of options for the select |
| id | string | Auto-generated | The ID for the select field |
| error | string | undefined | Error message to display |
| hint | string | undefined | Hint text to display below the select |
| placeholder | string | undefined | Placeholder text for the select |
| fullWidth | boolean | false | Whether the select should take up the full width |
| className | string | '' | Additional CSS classes for the container |
| labelClassName | string | '' | Additional CSS classes for the label |
| selectClassName | string | '' | Additional CSS classes for the select |
| errorClassName | string | '' | Additional CSS classes for the error message |
| hintClassName | string | '' | Additional CSS classes for the hint text |

### SelectOption Interface

```tsx
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

### Usage Examples

```tsx
// Basic usage
<Select 
  label="Country" 
  name="country" 
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' }
  ]} 
/>

// With placeholder
<Select 
  label="State" 
  name="state" 
  placeholder="Select a state" 
  options={stateOptions} 
/>

// With error message
<Select 
  label="Service" 
  name="service" 
  error="Please select a service" 
  options={serviceOptions} 
/>

// Required field
<Select 
  label="Insurance Provider" 
  name="insurance" 
  required 
  options={insuranceOptions} 
/>
```

## Form Container Components

### FormGroup

The `FormGroup` component is used to group related form fields together with consistent spacing.

```tsx
<FormGroup>
  <TextField label="First Name" name="firstName" />
  <TextField label="Last Name" name="lastName" />
</FormGroup>
```

### FormLabel

The `FormLabel` component is used for creating standalone labels, typically for custom form elements.

```tsx
<FormLabel htmlFor="custom-input" required>
  Custom Input
</FormLabel>
<input id="custom-input" type="text" />
```

### FormError

The `FormError` component is used for displaying error messages, typically for custom form elements.

```tsx
<FormError id="custom-input-error">
  This field is required
</FormError>
```

## Accessibility Considerations

- All form components include proper labeling with `htmlFor` attributes
- Error messages are announced to screen readers using `role="alert"`
- Required fields are visually indicated and include proper ARIA attributes
- Focus states are clearly visible for keyboard navigation
- Form elements have appropriate ARIA attributes for validation states

## Best Practices

1. Always use the form components instead of raw HTML elements to ensure consistency
2. Group related fields together using the `FormGroup` component
3. Provide clear error messages that explain how to fix the issue
4. Use hint text to provide additional information about the field
5. Keep labels concise and clear
6. Use appropriate input types for different data (e.g., `email` for email addresses)
7. Validate form inputs on both the client and server side 