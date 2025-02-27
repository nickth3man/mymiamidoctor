import React, { forwardRef } from 'react';
import { Text } from './Text';
import { cn } from '../../lib/utils';
import { colors } from '../../lib/design-tokens';
import { focusClasses } from '../../lib/design-tokens/focus';

export type TextFieldType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search' | 'date' | 'time';

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
  autocomplete?: string;
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
      autocomplete,
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    // Base container styles
    const containerClasses = cn(
      'flex flex-col',
      fullWidth ? 'w-full' : '',
      className
    );

    // Label styles
    const labelClasses = cn(
      'mb-1 font-medium text-sm',
      disabled ? 'text-gray-400' : 'text-gray-700',
      labelClassName
    );

    // Improved input styles with better visual indicators for validation states
    const inputClasses = cn(
      'px-4 py-2 rounded-md border',
      'focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500',
      'transition-colors duration-200',
      'min-h-[44px]', // Ensure minimum touch target height
      error ? 'border-red-500 bg-red-50' : 'border-gray-300',
      disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white',
      fullWidth ? 'w-full' : '',
      inputClassName
    );

    // Error styles with improved contrast
    const errorClasses = cn(
      'mt-1 text-red-600 text-sm font-medium',
      errorClassName
    );

    // Hint styles
    const hintClasses = cn(
      'mt-1 text-gray-600 text-sm',
      hintClassName
    );

    // Improved aria attributes for validation
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null
    ].filter(Boolean).join(' ') || undefined;

    return (
      <div className={containerClasses}>
        <label
          htmlFor={inputId}
          className={labelClasses}
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
        
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClasses}
          disabled={disabled}
          required={required}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? 'true' : 'false'}
          aria-required={required ? 'true' : 'false'}
          autoComplete={autocomplete}
          {...rest}
        />
        
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