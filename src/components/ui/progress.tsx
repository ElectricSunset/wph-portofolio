'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  value: number;
  className?: string;
  isInView: boolean;
}

const Progress: React.FC<AnimatedProgressProps> = ({
  className,
  value,
  isInView,
}) => {
  return (
    <div
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-neutral-400',
        className
      )}
    >
      <motion.div
        className='gradient-pink-purple h-full w-full flex-1'
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${value}%` : 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </div>
  );
};

export { Progress };
