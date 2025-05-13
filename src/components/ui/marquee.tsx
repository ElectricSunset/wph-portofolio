import { ComponentPropsWithRef } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

const MarqueeStyles = () => {
  return (
    <style>
      {`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% - var(--gap)));
          }
        }
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        .animate-marquee-vertical {
          animation: marquee-vertical var(--duration) linear infinite;
        }
        
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-vertical {
          animation-play-state: paused;
        }
      `}
    </style>
  );
};

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
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
      <MarqueeStyles />
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={`marquee-number-${i}`}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
            })}
            style={{
              animationDirection: reverse ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
