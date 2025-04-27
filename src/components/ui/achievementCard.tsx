import React from 'react';

type AchievementCardProps = {
  type: 'full' | 'border';
  number: string;
  desc: string;
  className?: string;
  styles?: object;
};
const AchievementCard: React.FC<AchievementCardProps> = ({
  type,
  number,
  desc,
  className = '',
  styles = {},
}) => {
  return (
    <div
      className={`${className} gradient-pink-purple flex-center rounded-full border-none p-0.5`}
      style={styles}
    >
      <div
        className={`flex-center h-full w-full flex-col gap-2 rounded-full ${type === 'full' ? '' : 'bg-black'}`}
      >
        {/* Text not yet responsive */}
        <p className='text-display-2xl font-extrabold text-neutral-100'>
          {number}
        </p>
        <span className='text-md font-regular text-neutral-100'>{desc}</span>
      </div>
    </div>
  );
};

export default AchievementCard;
