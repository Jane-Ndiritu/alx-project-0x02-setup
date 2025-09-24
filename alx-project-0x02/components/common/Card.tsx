import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  content,
  variant = 'default',
  size = 'medium',
  className = '',
  onClick,
}) => {
  const baseStyles = "rounded-lg transition-all duration-200";
  
  const variantStyles = {
    default: "bg-white border border-gray-200 hover:border-gray-300",
    outlined: "border-2 border-gray-300 bg-transparent hover:border-gray-400",
    elevated: "bg-white shadow-md hover:shadow-lg",
  };
  const sizeStyles = {
    small: "p-3 max-w-sm",
    medium: "p-6 max-w-md",
    large: "p-8 max-w-lg",
  };
  const titleSizeStyles = {
    small: "text-lg font-semibold",
    medium: "text-xl font-semibold",
    large: "text-2xl font-bold",
  };

  const contentSizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const cardClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${onClick ? 'cursor-pointer hover:scale-105' : ''}
    ${className}
  `.trim();

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <h3 className={`${titleSizeStyles[size]} text-gray-800 mb-3`}>
        {title}
      </h3>
      <p className={`${contentSizeStyles[size]} text-gray-600 leading-relaxed`}>
        {content}
      </p>
    </div>
  );
};

export default Card;   
