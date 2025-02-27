import React from 'react';

export interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({
  children,
  id,
  className = '',
  ...rest
}) => {
  if (!children) return null;

  const errorClasses = [
    'mt-1 text-red-500 text-sm',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      id={id} 
      className={errorClasses} 
      role="alert"
      {...rest}
    >
      {children}
    </div>
  );
};

FormError.displayName = 'FormError'; 