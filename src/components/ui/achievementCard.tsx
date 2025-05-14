import { motion, useInView } from 'framer-motion';
import React from 'react';

type AchievementCardProps = {
  type: 'full' | 'border';
  number: string;
  desc: string;
  className?: string;
};

const AchievementCard: React.FC<AchievementCardProps> = ({
  type,
  number,
  desc,
  className = '',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  return (
    <motion.div
      className={`${className} gradient-pink-purple flex-center purple-shadow rounded-full border-none p-0.5`}
      ref={ref}
      style={{
        width: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
        height: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
      }}
      initial={{ opacity: 0, scale: 0.8, x: -100 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        x: isInView ? 0 : -100,
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div
        className={`flex-center h-full w-full flex-col gap-2 rounded-full ${type === 'full' ? '' : 'bg-black'}`}
      >
        <p className='md:text-display-2xl text-display-sm font-extrabold text-neutral-100'>
          {number}
        </p>
        <span className='md:text-md font-regular text-sm text-neutral-100'>
          {desc}
        </span>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
