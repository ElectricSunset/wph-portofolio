import Image from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';
import { TestimonialCard } from '@/components/ui/testimonialCards';

import { testimonialsData } from '@/constant/testimonials-data';
export const Testimonials: React.FC = () => {
  return (
    // <>
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
        <div className='relative mt-8 mb-10 md:mt-12 md:mb-20'>
          <div className='flex w-full flex-col gap-3 overflow-hidden md:gap-5'>
            <Marquee className='[--gap:1rem] md:[--gap:1.25rem]'>
              {testimonialsData.map((testimonial, index) => (
                <div className='group' key={index}>
                  <TestimonialCard
                    description={testimonial.description}
                    profileSrc={testimonial.profileSrc}
                    profileName={testimonial.profileName}
                    profileOccupation={testimonial.profileOccupation}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee reverse className='[--gap:1rem] md:[--gap:1.25rem]'>
              {testimonialsData.map((testimonial, index) => (
                <div className='group' key={index}>
                  <TestimonialCard
                    // key={`line2-${index}`}
                    description={testimonial.description}
                    profileSrc={testimonial.profileSrc}
                    profileName={testimonial.profileName}
                    profileOccupation={testimonial.profileOccupation}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className='absolute inset-y-0 left-0 w-[15%] from-neutral-500 to-transparent md:bg-gradient-to-r' />
          <div className='absolute inset-y-0 right-0 w-[15%] from-neutral-500 to-transparent md:bg-gradient-to-l' />
        </div>
      </div>
    </div>
  );
};
