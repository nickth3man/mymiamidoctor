import React, { forwardRef } from 'react';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  inline?: boolean;
  className?: string;
  labelClassName?: string;
  radioClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
}

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

    // Options container styles
    const optionsContainerClasses = [
      inline ? 'flex flex-wrap gap-4' : 'space-y-2',
    ].filter(Boolean).join(' ');

    // Label styles
    const labelClasses = [
      'block text-sm font-medium text-gray-700 mb-1',
      labelClassName
    ].filter(Boolean).join(' ');

    // Radio option styles
    const radioOptionClasses = [
      'flex items-center',
      radioClassName
    ].filter(Boolean).join(' ');

    // Radio input styles
    const radioInputClasses = [
      'h-4 w-4 border-gray-300 text-primary focus:ring-primary/50',
      error ? 'border-red-500' : ''
    ].filter(Boolean).join(' ');

    // Radio label styles
    const radioLabelClasses = 'ml-2 block text-sm font-medium text-gray-700';

    // Error styles
    const errorClasses = [
      'mt-1 text-red-500 text-sm',
      errorClassName
    ].filter(Boolean).join(' ');

    // Hint styles
    const hintClasses = [
      'mt-1 text-gray-500 text-sm',
      hintClassName
    ].filter(Boolean).join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div ref={ref} className={containerClasses} role="radiogroup" aria-labelledby={label ? groupId : undefined} aria-describedby={ariaDescribedBy} {...rest}>
        {label && (
          <div id={groupId} className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </div>
        )}

        <div className={optionsContainerClasses}>
          {options.map((option) => {
            const optionId = `${name}-${option.value}`;
            return (
              <div key={option.value} className={radioOptionClasses}>
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
                  {...(error ? { 'aria-invalid': 'true' } : {})}
                />
                <label htmlFor={optionId} className={radioLabelClasses}>
                  {option.label}
                </label>
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