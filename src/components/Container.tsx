import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-3xl mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
};