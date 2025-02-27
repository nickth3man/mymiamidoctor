import React, { forwardRef } from 'react';
import { colors } from '../../lib/design-tokens/colors';
import { focusClasses } from '../../lib/design-tokens/focus';
import { spacingTokens } from '../../lib/design-tokens/spacing';

export interface SelectOption {
  /** The value to be submitted with the form */
  value: string;
  /** The text displayed to the user */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Label text for the select field */
  label: string;
  /** Array of options to display in the select */
  options: SelectOption[];
  /** Optional ID for the select element (auto-generated if not provided) */
  id?: string;
  /** Error message to display */
  error?: string;
  /** Hint text to provide additional guidance */
  hint?: string;
  /** Placeholder text (first disabled option) */
  placeholder?: string;
  /** Whether the select should take up the full width of its container */
  fullWidth?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the select element */
  selectClassName?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Additional CSS classes for the hint text */
  hintClassName?: string;
  /** Optional group name for the select field */
  group?: string;
}

/**
 * Select component for dropdown selection
 *
 * @example
 * // Basic usage
 * <Select
 *   label="Country"
 *   options={[
 *     { value: "us", label: "United States" },
 *     { value: "ca", label: "Canada" },
 *     { value: "mx", label: "Mexico" }
 *   ]}
 * />
 *
 * @example
 * // With error and hint
 * <Select
 *   label="Country"
 *   options={countryOptions}
 *   error="Please select a country"
 *   hint="Select the country where you currently reside"
 *   required
 * />
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      label,
      options,
      id,
      error,
      hint,
      placeholder,
      fullWidth = false,
      className = '',
      labelClassName = '',
      selectClassName = '',
      errorClassName = '',
      hintClassName = '',
      disabled = false,
      required = false,
      group,
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;
    const groupId = group ? `group-${group}` : undefined;

    // Base container styles
    const containerClasses = [
      'flex flex-col',
      fullWidth ? 'w-full' : '',
      className
    ].filter(Boolean).join(' ');

    // Label styles using text tokens
    const labelClasses = [
      'mb-1 font-medium text-sm',
      disabled ? `text-[${colors.text.disabled}]` : `text-[${colors.text.secondary}]`,
      labelClassName
    ].filter(Boolean).join(' ');

    // Select styles with focus states and accessibility improvements
    const selectClasses = [
      'px-4 py-2 rounded-md border appearance-none bg-white',
      focusClasses.default, // Use focus tokens
      'transition-colors duration-200',
      'min-h-[44px]', // Ensure minimum touch target height (WCAG 2.1)
      error ? `border-[${colors.error[500]}] bg-[${colors.error[50]}]` : `border-[${colors.border.medium}]`,
      disabled ? `bg-[${colors.gray[100]}] text-[${colors.text.disabled}] cursor-not-allowed` : 'bg-white',
      fullWidth ? 'w-full' : '',
      selectClassName
    ].filter(Boolean).join(' ');

    // Error styles using error tokens
    const errorClasses = [
      'mt-1 text-[#dc2626] text-sm font-medium',
      errorClassName
    ].filter(Boolean).join(' ');

    // Hint styles using text tokens
    const hintClasses = [
      'mt-1 text-[#6b7280] text-sm',
      hintClassName
    ].filter(Boolean).join(' ');

    // Determine which description to associate with the select
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null,
      groupId
    ].filter(Boolean).join(' ') || undefined;

    // Create select element with appropriate props
    const selectElement = (
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={selectClasses}
          disabled={disabled}
          required={required}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? 'true' : 'false'}
          aria-required={required ? 'true' : 'false'}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          aria-hidden="true"
        >
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );

    return (
      <div className={containerClasses} role="group" aria-labelledby={groupId}>
        <label
          htmlFor={selectId}
          className={labelClasses}
          id={groupId}
        >
          {label}
          {required && (
            <>
              <span className="text-[#dc2626] ml-1" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </>
          )}
        </label>
        
        {selectElement}
        
        {error && (
          <div id={errorId} className={errorClasses} role="alert">
            {error}
          </div>
        )}
        
        {!error && hint && (
          <div id={hintId} className={hintClasses}>
            {hint}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';