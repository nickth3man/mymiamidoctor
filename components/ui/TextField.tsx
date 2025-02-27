import React, { forwardRef } from 'react';
import { Text } from './Text';

export type TextFieldType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  id?: string;
  type?: TextFieldType;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      label,
      id,
      type = 'text',
      error,
      hint,
      fullWidth = false,
      className = '',
      labelClassName = '',
      inputClassName = '',
      errorClassName = '',
      hintClassName = '',
      disabled = false,
      required = false,
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

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

    // Input styles
    const inputClasses = [
      'px-4 py-2 rounded-md border',
      'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
      'transition-colors duration-200',
      error ? 'border-red-500' : 'border-gray-300',
      disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white',
      fullWidth ? 'w-full' : '',
      inputClassName
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

    // Determine which description to associate with the input
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null
    ].filter(Boolean).join(' ') || undefined;

    // Create input element with appropriate props
    const inputElement = (
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={inputClasses}
        disabled={disabled}
        required={required}
        aria-describedby={ariaDescribedBy}
        {...rest}
      />
    );

    // Add aria-invalid attribute conditionally
    const inputWithAriaInvalid = error 
      ? React.cloneElement(inputElement, { 'aria-invalid': 'true' })
      : React.cloneElement(inputElement, { 'aria-invalid': 'false' });

    return (
      <div className={containerClasses}>
        <label 
          htmlFor={inputId} 
          className={labelClasses}
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
        
        {inputWithAriaInvalid}
        
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

TextField.displayName = 'TextField'; 