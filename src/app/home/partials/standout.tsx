import React from 'react';

import { benefits } from '@/constant/standout';

const StandOut: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20'>
      <div className='flex-center mb-12 flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          Why I Stand Out
        </h2>
        <span className='text-md font-regular text-neutral-200'>
          A showcase of my unique approach and skill set compared to
          conventional front-end developers
        </span>
      </div>
      <div className='custom-container rounded-3xl bg-neutral-500 p-6'>
        <table className='text-md w-full font-bold text-neutral-100'>
          <thead>
            <tr>
              <th className='from-secondary-500 to-secondary-400 w-1/3 rounded-l-full bg-gradient-to-r p-3.25'>
                Skill
              </th>
              <th className='from-secondary-400 to-primary-400 w-1/3 bg-gradient-to-r p-3.25'>
                Me
              </th>
              <th className='from-primary-400 to-primary-500 w-1/3 rounded-r-full bg-gradient-to-r p-3.25'>
                Other
              </th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit) => (
              <tr key={benefit.skill} className='flex'>
                <th className='p-3.25'>{benefit.skill}</th>
                <th className='w-1/3 justify-center py-3.25'>
                  {benefit.me ? (
                    <div className='flex-center gradient-pink-purple h-7 w-7 rounded-full'></div>
                  ) : (
                    <div className='flex-center h-7 w-7 rounded-full bg-neutral-300'></div>
                  )}
                </th>
                <th className='justify-center py-3.25'>
                  {' '}
                  {benefit.other ? (
                    <div className='flex-center gradient-pink-purple h-7 w-7 rounded-full'></div>
                  ) : (
                    <div className='flex-center h-7 w-7 rounded-full bg-neutral-300'></div>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandOut;
