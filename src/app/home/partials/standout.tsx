import { Check, X } from 'lucide-react';
import React from 'react';

import { benefits } from '@/constant/standout';

const StandOut: React.FC = () => {
  return (
    <div className='custom-container pb-10 md:pt-20 md:pb-20'>
      <div className='flex-center mb-12 flex-col space-y-3'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          Why I Stand Out
        </h2>
        <span className='md:text-md font-regular text-center text-sm text-neutral-200'>
          A showcase of my unique approach and skill set compared to
          conventional front-end developers
        </span>
      </div>
      <div className='rounded-3xl bg-neutral-500 p-2.5 md:p-6'>
        <table className='textsm md:text-md w-full font-bold text-neutral-100'>
          <thead>
            <tr>
              <th className='from-secondary-500 to-secondary-400 purple-shadow w-2/3 rounded-l-full bg-gradient-to-r py-3.25 md:w-1/3'>
                Skill
              </th>
              <th className='from-secondary-400 to-primary-400 purple-shadow w-1/6 bg-gradient-to-r py-3.25 md:w-1/3'>
                Me
              </th>
              <th className='from-primary-400 to-primary-500 purple-shadow w-1/6 rounded-r-full bg-gradient-to-r py-3.25 md:w-1/3'>
                Other
              </th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit) => (
              <tr
                key={benefit.skill}
                className='w-full border-t-1 border-neutral-400 first:border-none'
              >
                <th className='py-5.5'>{benefit.skill}</th>
                <th className='py-5.5'>
                  <div className='flex-center'>
                    {benefit.me ? (
                      <div className='flex-center gradient-pink-purple h-5 w-5 rounded-full md:h-7 md:w-7'>
                        <Check
                          className='size-3 md:size-5'
                          color='#ffffff'
                          strokeWidth={3}
                        />
                      </div>
                    ) : (
                      <div className='flex-center h-5 w-5 rounded-full bg-neutral-300 md:h-7 md:w-7'>
                        <X
                          className='size-3 md:size-5'
                          color='#ffffff'
                          strokeWidth={3}
                        />
                      </div>
                    )}
                  </div>
                </th>

                <th className='py-5.5'>
                  <div className='flex-center'>
                    {benefit.other ? (
                      <div className='flex-center gradient-pink-purple h-5 w-5 rounded-full md:h-7 md:w-7'>
                        <Check
                          color='#ffffff'
                          strokeWidth={3}
                          className='size-3 md:size-5'
                        />
                      </div>
                    ) : (
                      <div className='flex-center h-5 w-5 rounded-full bg-neutral-300 md:h-7 md:w-7'>
                        <X
                          color='#ffffff'
                          strokeWidth={3}
                          className='size-3 md:size-5'
                        />
                      </div>
                    )}
                  </div>
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
