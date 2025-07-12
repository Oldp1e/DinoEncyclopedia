'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
  variant?: 'primary' | 'secondary' | 'amber' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  isLoading = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variants = {
    primary: 'bg-gradient-primary text-white shadow-lg hover:shadow-xl',
    secondary: 'glass text-white hover:bg-white/20',
    amber: 'bg-gradient-amber text-brown-900 shadow-lg hover:shadow-xl',
    danger: 'bg-gradient-danger text-white shadow-lg hover:shadow-xl',
    ghost: 'text-white hover:bg-white/10'
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.95 }}
      {...props}
    >
      {isLoading ? (
        <div className="loading-spinner w-5 h-5" />
      ) : (
        children
      )}
    </motion.button>
  );
}
