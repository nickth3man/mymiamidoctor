import React, { forwardRef } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label: string;
  options: SelectOption[];
  id?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
}

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
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;

    // Base container styles
    const containerClasses = [
      'flex flex-col',
      fullWidth ? 'w-full' : '',
      className
    ].filter(Boolean).join(' ');

    // Label styles
    const labelClasses = [
      'mb-1 font-medium text-sm',
      disabled ? 'text-gray-400' : 'text-gray-700',
      labelClassName
    ].filter(Boolean).join(' ');

    // Select styles
    const selectClasses = [
      'px-4 py-2 rounded-md border appearance-none bg-white',
      'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
      'transition-colors duration-200',
      error ? 'border-red-500' : 'border-gray-300',
      disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white',
      fullWidth ? 'w-full' : '',
      selectClassName
    ].filter(Boolean).join(' ');

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

    // Determine which description to associate with the select
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null
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
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );

    // Add aria-invalid attribute conditionally
    const selectWithAriaInvalid = error 
      ? React.cloneElement(selectElement, { 'aria-invalid': 'true' })
      : React.cloneElement(selectElement, { 'aria-invalid': 'false' });

    return (
      <div className={containerClasses}>
        <label 
          htmlFor={selectId} 
          className={labelClasses}
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
        
        {selectWithAriaInvalid}
        
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