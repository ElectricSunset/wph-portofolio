import React from 'react';

import { Marquee } from '@/components/ui/marquee';

const Testimony: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20'>
      <div className='flex-center flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          {'What People Say About Me'}
        </h2>
        <p className='text-md font-regular text-neutral-200'>
          {
            'Hear from clients and colleagues about their experiences working with me.'
          }
        </p>
      </div>
      <div>
        <TestimonyMarquee />
      </div>
    </div>
  );
};

export default Testimony;

const TestimonyMarquee = () => {
  return (
    <div className='custom-container relative flex items-center'>
      <div>
        <Marquee></Marquee>
      </div>
    </div>
  );
};
