
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'normal' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'normal', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50';

  const variantStyles = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700',
    ghost: 'text-slate-100 hover:bg-slate-800 hover:text-white',
  };

  const sizeStyles = {
    normal: 'h-10 px-4 py-2 text-sm',
    large: 'h-12 px-8 text-base',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};