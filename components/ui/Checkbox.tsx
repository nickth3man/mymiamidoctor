import React, { forwardRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  className?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
}

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
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const checkboxId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${checkboxId}-error`;
    const hintId = `${checkboxId}-hint`;

    // Base container styles
    const containerClasses = [
      'flex items-start',
      className
    ].filter(Boolean).join(' ');

    // Checkbox styles
    const checkboxClasses = [
      'h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary/50',
      disabled ? 'opacity-60 cursor-not-allowed' : '',
      error ? 'border-red-500' : '',
      checkboxClassName
    ].filter(Boolean).join(' ');

    // Label styles
    const labelClasses = [
      'ml-2 text-sm font-medium',
      disabled ? 'text-gray-400' : 'text-gray-700',
      labelClassName
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

    // Determine which description to associate with the checkbox
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null
    ].filter(Boolean).join(' ') || undefined;

    return (
      <div>
        <div className={containerClasses}>
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={checkboxClasses}
            disabled={disabled}
            required={required}
            aria-describedby={ariaDescribedBy}
            {...(error ? { 'aria-invalid': 'true' } : {})}
            {...rest}
          />
          <label 
            htmlFor={checkboxId} 
            className={labelClasses}
          >
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
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