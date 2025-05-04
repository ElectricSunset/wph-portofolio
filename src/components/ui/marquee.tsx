import Image from 'next/image';
import React, { ComponentProps } from 'react';

import { TestimonyProps } from '@/constant/testimonies';
import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentProps<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

interface MarqueeCardsProps extends TestimonyProps {
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:3rem]',
        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export const MarqueeCards: React.FC<MarqueeCardsProps> = ({
  photo,
  name,
  position,
  testi,
  className = '',
}) => {
  return (
    <div className={cn('p-5', className)}>
      <div className='mb-5 flex gap-2'>
        <Image
          src={photo}
          alt='profile-photo'
          className='h-15 w-15 rounded-full'
        />
        <div>
          <p className='text-md font-bold text-neutral-100'>{name}</p>
          <p className='text-md text-neutral-200'>{position}</p>
        </div>
      </div>
      <p className='text-md text-neutral-200'>{testi}</p>
    </div>
  );
};
