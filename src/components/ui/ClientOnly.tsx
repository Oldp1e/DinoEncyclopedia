'use client';

import { ReactNode } from 'react';
import { useClientOnly } from '@/lib/hooks';
import { LoadingSkeleton } from './Loading';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
  showSkeleton?: boolean;
  skeletonClassName?: string;
}

export function ClientOnly({ 
  children, 
  fallback = null, 
  showSkeleton = false,
  skeletonClassName = 'h-4 w-20'
}: ClientOnlyProps) {
  const hasMounted = useClientOnly();

  if (!hasMounted) {
    if (showSkeleton) {
      return <LoadingSkeleton className={skeletonClassName} />;
    }
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
