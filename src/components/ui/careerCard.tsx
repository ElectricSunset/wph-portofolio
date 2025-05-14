import { motion, useInView } from 'framer-motion';
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
      <p className='text-md md:text-display-xs font-bold text-neutral-100'>
        {title}
      </p>
      <div className='mt-5 gap-1.5 space-y-3 md:flex md:items-center md:space-y-0'>
        <div className='flex-start gap-1.5'>
          <Image src={Building} alt={'building icon'} className='h-5.5 w-5' />
          <p className='md:text-md font-regular text-sm text-neutral-100'>
            {company}
          </p>
        </div>
        <div className='mx-1 hidden h-1 w-1 rounded-full bg-white md:block' />
        <div className='flex-start gap-1.5'>
          <Calendar1 size='20px' color='#ffffff' variant='Outline' />{' '}
          <p className='md:text-md font-regular text-sm text-neutral-100'>
            {start_date} - {end_date}{' '}
          </p>
        </div>
      </div>
      <div>
        <ul>
          {experience.map((exp, index) => (
            <li
              key={`task-${company}-${index}`}
              className='md:text-md font-regular mt-3 text-sm text-neutral-200 md:mt-5'
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

export const TimelineBar: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      className='gradient-pink-purple absolute top-1.5 left-1 z-0 w-1'
      initial={{ height: 0 }}
      animate={{ height: isInView ? '100%' : 0 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
    />
  );
};
