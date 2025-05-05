import Image from 'next/image';
import React from 'react';

import { Marquee, MarqueeCards } from '@/components/ui/marquee';

import { Testimonies } from '@/constant/testimonies';
const Testimony: React.FC = () => {
  return (
    <div className='relative w-full overflow-clip py-10 md:py-20'>
      <Image
        src={'/images/hero_eclipse_big.png'}
        alt='big-dots'
        width={1000}
        height={1000}
        className='absolute right-[-200px] z-0'
      />
      <div className='custom-container'>
        <div className='flex-center mb-12 flex-col text-center'>
          <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
            {'What People Say About Me'}
          </h2>
          <p className='md:text-md font-regular text-sm text-neutral-200'>
            {
              'Hear from clients and colleagues about their experiences working with me.'
            }
          </p>
        </div>
        <TestimonyMarquee />
      </div>
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
