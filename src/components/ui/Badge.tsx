'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  variant?: 'danger' | 'warning' | 'safe' | 'period' | 'status';
  className?: string;
}

export function Badge({ children, variant = 'safe', className = '' }: BadgeProps) {
  const variants = {
    danger: 'bg-danger-700 text-white',
    warning: 'bg-amber-500 text-brown-900',
    safe: 'bg-primary-600 text-white',
    period: 'bg-stone-700 text-white',
    status: 'bg-stone-600 text-white'
  };

  return (
    <motion.span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {children}
    </motion.span>
  );
}
