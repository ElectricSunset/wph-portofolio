import React from 'react';

import CareerCard from '@/components/ui/careerCard';

import { Experiences } from '@/constant/experience-data';

const CareerJourney: React.FC = () => {
  return (
    <div className='custom-container py-10 md:py-20'>
      <div className='flex-center mb-12 flex-col space-y-3'>
        <h2 className='md:text-display-2xl text-display-sm font-extrabold text-neutral-100'>
          Career Journey
        </h2>
        <p className='md:text-md font-regular text-center text-sm text-neutral-200'>
          A visual timeline of key milestones and experiences from over the
          years.
        </p>
      </div>

      {Experiences.map((exp, index) => (
        <div
          key={`${exp.company}-${exp.title}-${index}`}
          className='last grid grid-cols-[12px_minmax(73,1fr)] gap-x-4'
        >
          <div className='relative z-1 col-span-1 row-span-1'>
            {index !== Experiences.length - 1 && (
              <div className='gradient-pink-purple absolute top-1.5 left-1 z-0 h-full w-1' />
            )}
            <div className='gradient-pink-purple border-primary-100 absolute z-1 h-3 w-3 rounded-full border-3' />
          </div>

          <div className='z-1 col-span-1 row-span-1 mb-6 w-full'>
            <CareerCard
              title={exp.title}
              company={exp.company}
              start_date={exp.start_date}
              end_date={exp.end_date}
              experience={exp.experience}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerJourney;
