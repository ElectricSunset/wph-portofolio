import React from 'react';

type AchievementCardProps = {
  styles: 'full' | 'border';
  number: string;
  desc: string;
  className?: string;
};
const AchievementCard: React.FC<AchievementCardProps> = ({
  styles,
  number,
  desc,
  className = '',
}) => {
  return (
    <div
      className={`${className} gradient-pink-purple flex-center rounded-full border-none p-0.5`}
    >
      <div
        className={`flex-center h-full w-full flex-col gap-2 rounded-full ${styles === 'full' ? '' : 'bg-black'}`}
      >
        <p className='text-display-2xl font-extrabold text-neutral-100'>
          {number}
        </p>
        <span className='text-md font-regular text-neutral-100'>{desc}</span>
      </div>
    </div>
  );
};

export default AchievementCard;
