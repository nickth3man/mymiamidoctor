import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = false
}) => {
  const hoverStyles = hoverable ? 'hover:shadow-lg transition-shadow duration-300' : '';
  const cursorStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverStyles} ${cursorStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{children: React.ReactNode; className?: string}> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`px-6 py-4 border-b ${className}`}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<{children: React.ReactNode; className?: string}> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{children: React.ReactNode; className?: string}> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`px-6 py-4 border-t ${className}`}>
      {children}
    </div>
  );
}; 