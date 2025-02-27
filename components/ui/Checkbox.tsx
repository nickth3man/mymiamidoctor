import React, { forwardRef } from 'react';
import { colors } from '../../lib/design-tokens/colors';
import { focusClasses } from '../../lib/design-tokens/focus';
import { spacingTokens } from '../../lib/design-tokens/spacing';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text for the checkbox */
  label: string;
  /** Optional ID for the checkbox element (auto-generated if not provided) */
  id?: string;
  /** Error message to display */
  error?: string;
  /** Hint text to provide additional guidance */
  hint?: string;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the checkbox element */
  checkboxClassName?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Additional CSS classes for the hint text */
  hintClassName?: string;
  /** Optional group name for the checkbox */
  group?: string;
}

/**
 * Checkbox component for boolean input selection
 *
 * @example
 * // Basic usage
 * <Checkbox
 *   label="I agree to the terms and conditions"
 *   name="terms"
 * />
 *
 * @example
 * // With error and hint
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   error="This field is required"
 *   hint="We'll never share your email with anyone else"
 *   required
 * />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      label,
      id,
      error,
      hint,
      className = '',
      labelClassName = '',
      checkboxClassName = '',
      errorClassName = '',
      hintClassName = '',
      disabled = false,
      required = false,
      group,
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const checkboxId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${checkboxId}-error`;
    const hintId = `${checkboxId}-hint`;
    const groupId = group ? `group-${group}` : undefined;

    // Base container styles
    const containerClasses = [
      'flex items-start',
      className
    ].filter(Boolean).join(' ');

    // Checkbox styles with improved focus states and touch target size
    const checkboxClasses = [
      'h-5 w-5 rounded border-gray-300 text-primary',
      focusClasses.default, // Use focus tokens
      'min-h-[20px] min-w-[20px]', // Ensure minimum size
      disabled ? 'opacity-60 cursor-not-allowed' : '',
      error ? 'border-[#dc2626]' : '',
      checkboxClassName
    ].filter(Boolean).join(' ');

    // Wrapper styles to increase touch target size
    const wrapperClasses = [
      'relative flex items-center justify-center',
      'min-h-[44px] min-w-[44px]', // WCAG 2.1 minimum touch target size
      'p-2', // Padding to increase touch target without affecting visual size
    ].filter(Boolean).join(' ');

    // Label styles using text tokens
    const labelClasses = [
      'ml-2 text-sm font-medium',
      disabled ? `text-[${colors.text.disabled}]` : `text-[${colors.text.secondary}]`,
      labelClassName
    ].filter(Boolean).join(' ');

    // Error styles using error tokens
    const errorClasses = [
      'mt-1 text-[#dc2626] text-sm font-medium pl-10',
      errorClassName
    ].filter(Boolean).join(' ');

    // Hint styles using text tokens
    const hintClasses = [
      'mt-1 text-[#6b7280] text-sm pl-10',
      hintClassName
    ].filter(Boolean).join(' ');

    // Determine which description to associate with the checkbox
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null,
      groupId
    ].filter(Boolean).join(' ') || undefined;

    return (
      <div role="group" aria-labelledby={groupId}>
        <div className={containerClasses}>
          <div className={wrapperClasses}>
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className={checkboxClasses}
              disabled={disabled}
              required={required}
              aria-describedby={ariaDescribedBy}
              aria-invalid={error ? 'true' : 'false'}
              aria-required={required ? 'true' : 'false'}
              {...rest}
            />
          </div>
          <label
            htmlFor={checkboxId}
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
        </div>
        
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

Checkbox.displayName = 'Checkbox';