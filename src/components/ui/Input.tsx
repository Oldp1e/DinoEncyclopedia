'use client';

import { InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function Input({ 
  label, 
  error, 
  icon: Icon,
  className = '',
  ...props 
}: InputProps) {
  return (
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {label && (
        <label className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        )}
        <input
          className={`input-glass w-full ${Icon ? 'pl-10' : ''} ${className} ${error ? 'border-danger-500' : ''}`}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          className="text-danger-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}

interface SearchInputProps extends Omit<InputProps, 'icon'> {
  onSearch?: (value: string) => void;
}

export function SearchInput({ onSearch, ...props }: SearchInputProps) {
  return (
    <Input
      icon={Search}
      placeholder="Search dinosaurs..."
      onChange={(e) => onSearch?.(e.target.value)}
      {...props}
    />
  );
}
