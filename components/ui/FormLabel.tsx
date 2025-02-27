import React from 'react';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({
  children,
  htmlFor,
  required = false,
  className = '',
  disabled = false,
  ...rest
}) => {
  const labelClasses = [
    'block mb-1 font-medium text-sm',
    disabled ? 'text-gray-400' : 'text-gray-700',
    className
  ].filter(Boolean).join(' ');

  return (
    <label 
      htmlFor={htmlFor} 
      className={labelClasses}
      {...rest}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  );
};

FormLabel.displayName = 'FormLabel'; 