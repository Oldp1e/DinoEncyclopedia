import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

export function formatDateShort(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

export function getTimeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

export function getDangerLevelColor(level: number): string {
  switch (level) {
    case 1: return 'bg-primary-600';
    case 2: return 'bg-amber-500';
    case 3: return 'bg-amber-600';
    case 4: return 'bg-danger-600';
    case 5: return 'bg-danger-700';
    default: return 'bg-stone-600';
  }
}

export function getDangerLevelText(level: number): string {
  switch (level) {
    case 1: return 'Safe';
    case 2: return 'Caution';
    case 3: return 'Warning';
    case 4: return 'Dangerous';
    case 5: return 'Extreme';
    default: return 'Unknown';
  }
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'active': return 'bg-primary-600';
    case 'contained': return 'bg-amber-500';
    case 'escaped': return 'bg-danger-700';
    case 'unknown': return 'bg-stone-600';
    default: return 'bg-stone-600';
  }
}

export function getAlertLevelColor(level: string): string {
  switch (level) {
    case 'low': return 'bg-primary-600';
    case 'medium': return 'bg-amber-500';
    case 'high': return 'bg-danger-600';
    case 'critical': return 'bg-danger-700';
    default: return 'bg-stone-600';
  }
}

export function getSystemHealthColor(percentage: number): string {
  if (percentage >= 90) return 'text-primary-400';
  if (percentage >= 70) return 'text-amber-400';
  if (percentage >= 50) return 'text-amber-500';
  return 'text-danger-400';
}

export function generateParticles(count: number = 50): Array<{
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}> {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6
  }));
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
