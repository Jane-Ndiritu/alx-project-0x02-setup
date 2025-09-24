// components/common/Button.tsx
import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  size = 'medium',
  shape = 'rounded-md',
  variant = 'primary',
  disabled = false,
  className = '',
  loading = false,
}) => {
  const baseStyles = "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
 
  const sizeStyles = {
    small: "px-3 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };
  const variantStyles = {
    primary: "bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    outline: "border-2 border-rose-500 text-rose-500 bg-transparent hover:bg-rose-50 focus:ring-rose-500",
    ghost: "text-rose-500 bg-transparent hover:bg-rose-50 focus:ring-rose-500",
  };
  const focusOffsetStyles = {
    'rounded-sm': 'focus:ring-offset-1',
    'rounded-md': 'focus:ring-offset-2',
    'rounded-full': 'focus:ring-offset-2',
  };

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${shape}
    ${variantStyles[variant]}
    ${focusOffsetStyles[shape]}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      <div className="flex items-center justify-center space-x-2">
        {loading && (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;