import React from 'react';

import CareerCard from '@/components/ui/careerCard';

import { Experiences } from '@/constant/experience-data';

const CareerJourney: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20'>
      <div className='flex-center mb-12 flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          Career Journey
        </h2>
        <p className='text-md font-regular text-neutral-200'>
          A visual timeline of key milestones and experiences from over the
          years.
        </p>
      </div>

      <ul>
        {Experiences.map((exp) => (
          <li
            key={`${exp.company}-${exp.title}`}
            className='relative flex items-start gap-6 pb-6'
          >
            <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-red-500'>
              <div className='gradient-pink-purple border-primary-100 h-3 w-3 rounded-full border-3' />
            </div>

            <CareerCard
              title={exp.title}
              company={exp.company}
              start_date={exp.start_date}
              end_date={exp.end_date}
              experience={exp.experience}
            ></CareerCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerJourney;
