import React, { forwardRef } from 'react';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  className?: string;
  labelClassName?: string;
  textareaClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  containerClassName?: string;
  rows?: number;
  maxLength?: number;
  showCharacterCount?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      label,
      id,
      error,
      hint,
      className = '',
      labelClassName = '',
      textareaClassName = '',
      errorClassName = '',
      hintClassName = '',
      containerClassName = '',
      disabled = false,
      required = false,
      rows = 4,
      maxLength,
      showCharacterCount = false,
      value = '',
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;
    const countId = `${textareaId}-count`;

    // Container styles
    const containerClasses = [
      'w-full',
      containerClassName
    ].filter(Boolean).join(' ');

    // Label styles
    const labelClasses = [
      'block text-sm font-medium text-gray-700 mb-1',
      labelClassName
    ].filter(Boolean).join(' ');

    // TextArea styles
    const textareaClasses = [
      'block w-full rounded-md shadow-sm',
      'focus:ring-primary/50 focus:border-primary',
      disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white',
      error ? 'border-red-500' : 'border-gray-300',
      textareaClassName
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

    // Character count styles
    const countClasses = 'mt-1 text-gray-500 text-sm text-right';

    // Determine which description to associate with the textarea
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null,
      showCharacterCount && maxLength ? countId : null
    ].filter(Boolean).join(' ') || undefined;

    // Calculate character count
    const characterCount = typeof value === 'string' ? value.length : 0;

    return (
      <div className={containerClasses}>
        <label 
          htmlFor={textareaId} 
          className={labelClasses}
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
        </label>
        
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClasses}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          aria-describedby={ariaDescribedBy}
          {...(error ? { 'aria-invalid': 'true' } : {})}
          value={value}
          {...rest}
        />
        
        {showCharacterCount && maxLength && (
          <div id={countId} className={countClasses}>
            {characterCount} / {maxLength}
          </div>
        )}
        
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

TextArea.displayName = 'TextArea'; 