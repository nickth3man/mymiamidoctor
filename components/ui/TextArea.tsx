import React, { forwardRef } from 'react';
import { colors } from '../../lib/design-tokens/colors';
import { focusClasses } from '../../lib/design-tokens/focus';
import { spacingTokens } from '../../lib/design-tokens/spacing';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  /** Label text for the textarea */
  label: string;
  /** Optional ID for the textarea element (auto-generated if not provided) */
  id?: string;
  /** Error message to display */
  error?: string;
  /** Hint text to provide additional guidance */
  hint?: string;
  /** Additional CSS classes for the component */
  className?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
  /** Additional CSS classes for the textarea element */
  textareaClassName?: string;
  /** Additional CSS classes for the error message */
  errorClassName?: string;
  /** Additional CSS classes for the hint text */
  hintClassName?: string;
  /** Additional CSS classes for the container */
  containerClassName?: string;
  /** Number of visible text rows */
  rows?: number;
  /** Maximum character length */
  maxLength?: number;
  /** Whether to show character count */
  showCharacterCount?: boolean;
  /** Whether the textarea should resize automatically */
  autoResize?: boolean;
  /** Optional group name for the textarea */
  group?: string;
}

/**
 * TextArea component for multi-line text input
 *
 * @example
 * // Basic usage
 * <TextArea
 *   label="Comments"
 *   name="comments"
 *   rows={4}
 * />
 *
 * @example
 * // With character count and validation
 * <TextArea
 *   label="Bio"
 *   name="bio"
 *   maxLength={500}
 *   showCharacterCount
 *   hint="Tell us about yourself in 500 characters or less"
 *   required
 * />
 */
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
      autoResize = false,
      value = '',
      group,
      ...rest
    } = props;

    // Generate a unique ID if not provided
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;
    const countId = `${textareaId}-count`;
    const groupId = group ? `group-${group}` : undefined;

    // Container styles
    const containerClasses = [
      'w-full',
      containerClassName
    ].filter(Boolean).join(' ');

    // Label styles using text tokens
    const labelClasses = [
      'block text-sm font-medium mb-1',
      disabled ? `text-[${colors.text.disabled}]` : `text-[${colors.text.secondary}]`,
      labelClassName
    ].filter(Boolean).join(' ');

    // TextArea styles with improved focus states and accessibility
    const textareaClasses = [
      'block w-full rounded-md px-4 py-2',
      'min-h-[44px]', // Ensure minimum touch target height (WCAG 2.1)
      focusClasses.default, // Use focus tokens
      'transition-colors duration-200',
      autoResize ? 'resize-none' : 'resize-vertical',
      disabled ? `bg-[${colors.gray[100]}] text-[${colors.text.disabled}] cursor-not-allowed` : 'bg-white',
      error ? `border-[${colors.error[500]}] bg-[${colors.error[50]}]` : `border-[${colors.border.medium}]`,
      textareaClassName
    ].filter(Boolean).join(' ');

    // Error styles using error tokens
    const errorClasses = [
      'mt-1.5 text-[#dc2626] text-sm font-medium',
      errorClassName
    ].filter(Boolean).join(' ');

    // Hint styles using text tokens
    const hintClasses = [
      'mt-1.5 text-[#6b7280] text-sm',
      hintClassName
    ].filter(Boolean).join(' ');

    // Calculate character count
    const characterCount = typeof value === 'string' ? value.length : 0;
    
    // Character count styles
    const countClasses = [
      'mt-1.5 text-[#6b7280] text-sm text-right',
      characterCount >= (maxLength || 0) * 0.9 ? 'text-[#dc2626]' : ''
    ].filter(Boolean).join(' ');

    // Determine which description to associate with the textarea
    const ariaDescribedBy = [
      error ? errorId : null,
      hint ? hintId : null,
      showCharacterCount && maxLength ? countId : null,
      groupId
    ].filter(Boolean).join(' ') || undefined;

    // Handle auto-resize if enabled
    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      if (autoResize && e.currentTarget) {
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
      }
    };

    return (
      <div className={containerClasses} role="group" aria-labelledby={groupId}>
        <label
          htmlFor={textareaId}
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
        
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClasses}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? 'true' : 'false'}
          aria-required={required ? 'true' : 'false'}
          onInput={autoResize ? handleInput : undefined}
          value={value}
          {...rest}
        />
        
        {showCharacterCount && maxLength && (
          <div id={countId} className={countClasses} aria-live="polite">
            <span className="sr-only">
              {characterCount === maxLength
                ? 'Maximum character limit reached: '
                : 'Character count: '}
            </span>
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