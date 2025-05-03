import { Calendar1 } from 'iconsax-reactjs';
import Image from 'next/image';
import React from 'react';

import { Experience } from '@/constant/experience-data';

import Building from '../../../public/icons/buliding.svg';

const CareerCard: React.FC<Experience> = ({
  title,
  company,
  start_date,
  end_date,
  experience,
}) => {
  return (
    <div className='rounded-xl bg-neutral-500 p-6'>
      <p className='text-display-xs font-bold text-neutral-100'>{title}</p>
      <div className='flex-start mt-5 gap-1.5'>
        <Image src={Building} alt={'building icon'} className='h-5.5 w-5' />
        <p className='text-md font-regular text-neutral-100'>{company}</p>
        <div className='mx-1 h-1 w-1 rounded-full bg-white' />
        <Calendar1 size='20px' color='#ffffff' variant='Outline' />{' '}
        <p className='text-md font-regular text-neutral-100'>
          {start_date} - {end_date}{' '}
        </p>
      </div>
      <div>
        <ul>
          {experience.map((exp, index) => (
            <li
              key={`task-${company}-${index}`}
              className='text-md font-regular mt-5 text-neutral-200'
            >
              <div className='flex items-center gap-3.25'>
                <div className='h-1 w-1 rounded-full bg-neutral-200' />
                {exp}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerCard;
