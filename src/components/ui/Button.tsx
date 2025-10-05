import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function Button({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false 
}: ButtonProps) {
  // Base styles
  const baseStyles = 'inline-block font-medium rounded-md transition-colors text-center focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-12 py-6 text-lg font-semibold'
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 disabled:bg-blue-300',
    secondary: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500 disabled:bg-gray-100 disabled:text-gray-400'
  };
  
  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // Disabled styles
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-50' : '';
  const finalClasses = `${classes} ${disabledClasses}`;
  
  // Render as Link (React Router)
  if (to && !disabled) {
    return (
      <Link to={to} className={finalClasses}>
        {children}
      </Link>
    );
  }
  
  // Render as external link
  if (href && !disabled) {
    return (
      <a 
        href={href} 
        className={finalClasses}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // Render as button
  return (
    <button 
      onClick={onClick} 
      className={finalClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
