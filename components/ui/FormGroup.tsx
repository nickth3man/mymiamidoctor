import React from 'react';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  className = '',
  ...rest
}) => {
  const formGroupClasses = [
    'mb-6',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={formGroupClasses} {...rest}>
      {children}
    </div>
  );
};

FormGroup.displayName = 'FormGroup'; 