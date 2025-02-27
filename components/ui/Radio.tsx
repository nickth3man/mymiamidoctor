import React, { forwardRef } from 'react';
import { colors } from '../../lib/design-tokens/colors';
import { focusClasses } from '../../lib/design-tokens/focus';
import { spacingTokens } from '../../lib/design-tokens/spacing';

export interface RadioOption {
  /** The value to be submitted with the form */
  value: string;
  /** The text displayed to the user */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Additional description for the option */
  description?: string;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Name attribute for the radio inputs (used for form submission) */
  name: string;
  /** Array of options to display in the radio group */
  options: RadioOption[];
  /** Currently selected value */
  value?: string;
  /** Handler called when selection changes */
  onChange?: (value: string) => void;
  /** Label text for the radio group */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Hint text to provide additional guidance */
  hint?: string;
  /** Whether selection is required */
  required?: boolean;
  /** Whether to display options horizontally */
  inline?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the radio options */
  radioClassName?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Additional CSS classes for the hint text */
  hintClassName?: string;
}

/**
 * Radio component for single-selection from multiple options
 *
 * @example
 * // Basic usage
 * <Radio
 *   name="gender"
 *   label="Gender"
 *   options={[
 *     { value: "male", label: "Male" },
 *     { value: "female", label: "Female" },
 *     { value: "other", label: "Other" }
 *   ]}
 *   value={gender}
 *   onChange={setGender}
 * />
 *
 * @example
 * // With error and hint
 * <Radio
 *   name="plan"
 *   label="Subscription Plan"
 *   options={planOptions}
 *   value={selectedPlan}
 *   onChange={handlePlanChange}
 *   error="Please select a subscription plan"
 *   hint="Choose the plan that best fits your needs"
 *   required
 * />
 */
export const Radio = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {
      name,
      options,
      value,
      onChange,
      label,
      error,
      hint,
      required = false,
      inline = false,
      className = '',
      labelClassName = '',
      radioClassName = '',
      errorClassName = '',
      hintClassName = '',
      ...rest
    } = props;

    // Generate IDs for accessibility
    const groupId = `radio-group-${name}`;
    const errorId = `${groupId}-error`;
    const hintId = `${groupId}-hint`;

    // Determine which description to associate with the radio group
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null
    ].filter(Boolean).join(' ') || undefined;

    // Container styles
    const containerClasses = [
      className
    ].filter(Boolean).join(' ');

    // Options container styles with improved spacing
    const optionsContainerClasses = [
      inline ? 'flex flex-wrap gap-4' : 'space-y-3',
    ].filter(Boolean).join(' ');

    // Label styles using text tokens
    const labelClasses = [
      'block text-sm font-medium mb-2',
      `text-[${colors.text.secondary}]`,
      labelClassName
    ].filter(Boolean).join(' ');

    // Radio option styles with better alignment
    const radioOptionClasses = [
      'flex items-start',
      radioClassName
    ].filter(Boolean).join(' ');

    // Radio input styles with improved focus states
    const radioInputClasses = [
      'h-5 w-5 border-gray-300 text-primary',
      focusClasses.default, // Use focus tokens
      'mt-0.5', // Align with first line of text
      error ? `border-[${colors.error[500]}]` : ''
    ].filter(Boolean).join(' ');

    // Wrapper styles to increase touch target size
    const wrapperClasses = [
      'relative flex items-center justify-center',
      'min-h-[44px] min-w-[44px]', // WCAG 2.1 minimum touch target size
      'p-2', // Padding to increase touch target without affecting visual size
    ].filter(Boolean).join(' ');

    // Radio label styles
    const radioLabelClasses = [
      'ml-2 block text-sm font-medium',
      `text-[${colors.text.secondary}]`
    ].filter(Boolean).join(' ');

    // Radio description styles
    const radioDescriptionClasses = [
      'ml-7 block text-sm',
      `text-[${colors.text.tertiary}]`
    ].filter(Boolean).join(' ');

    // Error styles using error tokens
    const errorClasses = [
      'mt-2 text-[#dc2626] text-sm font-medium',
      errorClassName
    ].filter(Boolean).join(' ');

    // Hint styles using text tokens
    const hintClasses = [
      'mt-2 text-[#6b7280] text-sm',
      hintClassName
    ].filter(Boolean).join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div
        ref={ref}
        className={containerClasses}
        role="radiogroup"
        aria-labelledby={label ? groupId : undefined}
        aria-describedby={ariaDescribedBy}
        aria-required={required ? 'true' : undefined}
        {...rest}
      >
        {label && (
          <div id={groupId} className={labelClasses}>
            {label}
            {required && (
              <>
                <span className="text-[#dc2626] ml-1" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </>
            )}
          </div>
        )}

        <div className={optionsContainerClasses}>
          {options.map((option) => {
            const optionId = `${name}-${option.value}`;
            const descriptionId = option.description ? `${optionId}-description` : undefined;
            
            return (
              <div key={option.value} className={radioOptionClasses}>
                <div className={wrapperClasses}>
                  <input
                    id={optionId}
                    name={name}
                    type="radio"
                    value={option.value}
                    checked={value === option.value}
                    onChange={handleChange}
                    disabled={option.disabled}
                    className={radioInputClasses}
                    required={required}
                    aria-describedby={descriptionId}
                    aria-invalid={error ? 'true' : 'false'}
                  />
                </div>
                <div>
                  <label htmlFor={optionId} className={radioLabelClasses}>
                    {option.label}
                  </label>
                  {option.description && (
                    <div id={descriptionId} className={radioDescriptionClasses}>
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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

Radio.displayName = 'Radio';