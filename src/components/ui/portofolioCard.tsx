import Image from 'next/image';
import React from 'react';

import { portoProps } from '@/constant/portofolio';

const PortofolioCard: React.FC<portoProps> = ({
  image,
  type,
  stacks,
  description,
}) => {
  return (
    <div className='flex-1 basis-92.5'>
      <Image
        src={image}
        alt='porto-image'
        className='mb-4 h-92.5 rounded-4xl object-cover'
      />
      <div>
        <h3 className='text-xl font-bold text-neutral-100'>{type}</h3>
        <div className='my-3 flex gap-2'>
          {stacks.map((stack) => (
            <div
              key={stack}
              className='rounded-full border-2 border-neutral-300 px-4 py-2 text-sm'
            >
              {stack}
            </div>
          ))}
        </div>

        <p className='text-md font-regular h-15 overflow-clip text-neutral-200'>
          {description}
        </p>
      </div>

      <div className='mt-10 flex gap-1.5'>
        <h3 className='gradient-pink-purple bg-clip-text text-lg font-bold text-transparent'>
          {'Visit'}
        </h3>
        <Image
          src={'/icons/arrow-porto.svg'}
          alt='arrow'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default PortofolioCard;
