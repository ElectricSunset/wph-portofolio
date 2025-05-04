import React from 'react';

import { Marquee, MarqueeCards } from '@/components/ui/marquee';

import { Testimonies } from '@/constant/testimonies';
const Testimony: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20'>
      <div className='flex-center mb-12 flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          {'What People Say About Me'}
        </h2>
        <p className='text-md font-regular text-neutral-200'>
          {
            'Hear from clients and colleagues about their experiences working with me.'
          }
        </p>
      </div>
      <TestimonyMarquee />
    </div>
  );
};

export default Testimony;

const TestimonyMarquee = () => {
  return (
    <div className='custom-container relative flex h-121.5 flex-col items-center gap-5'>
      <div className='w-full overflow-hidden'>
        <Marquee className='py-4'>
          {Testimonies.map((eachTestimony, i) => (
            <MarqueeCards
              key={`testi-${i}`}
              photo={eachTestimony.photo}
              name={eachTestimony.name}
              position={eachTestimony.position}
              testi={eachTestimony.testi}
              className='h-full w-125 object-contain select-none'
            />
          ))}
        </Marquee>
      </div>
      <div className='w-full overflow-hidden'>
        <Marquee className='py-4' reverse={true}>
          {Testimonies.map((eachTestimony, i) => (
            <MarqueeCards
              key={`testi-${i}`}
              photo={eachTestimony.photo}
              name={eachTestimony.name}
              position={eachTestimony.position}
              testi={eachTestimony.testi}
              className='h-full w-125 object-contain select-none'
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
