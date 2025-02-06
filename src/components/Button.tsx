// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'text';
  className?: string; // Allow custom classes
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className }) => {
  let buttonClasses = 'rounded px-4 py-2 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ';

  switch (variant) {
    case 'primary':
      buttonClasses += 'bg-primary text-white hover:bg-primary-dark focus:ring-primary-light';
      break;
    case 'secondary':
      buttonClasses += 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-light';
      break;
    case 'accent':
      buttonClasses += 'bg-accent text-white hover:bg-accent-dark focus:ring-accent-light';
      break;
    case 'text':
      buttonClasses += 'text-text-primary hover:text-primary';
      break;
    default:
      buttonClasses += 'bg-primary text-white hover:bg-primary-dark focus:ring-primary-light';
  }

  buttonClasses += ' ' + className; // Append custom classes

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;