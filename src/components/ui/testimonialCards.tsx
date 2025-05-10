import Image from 'next/image';

import { Testimonial } from '@/constant/testimonials-data';

export const TestimonialCard: React.FC<Testimonial> = ({
  description,
  profileName,
  profileOccupation,
  profileSrc,
}) => {
  return (
    <div className='hover:bg-gradient-purple-pink relative overflow-hidden rounded-2xl transition-all hover:p-[1px]'>
      <div className='pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl'>
        <div className='group-hover:animate-sweep-light absolute top-0 left-[-75%] h-full w-[250%] bg-white/50 opacity-0 blur-sm' />
      </div>
      <div className='relative z-20 h-auto w-75.5 rounded-2xl bg-neutral-500 p-4 md:w-125 md:p-5'>
        <div className='flex-start gap-2 md:gap-4'>
          <Image
            src={profileSrc}
            alt={profileName}
            className='size-12 md:size-15'
          />
          <div>
            <p className='text-sm-bold md:text-md-bold text-neutral-100'>
              {profileName}
            </p>
            <p className='text-sm-regular md:text-md-regular mt-0.75 text-neutral-200'>
              {profileOccupation}
            </p>
          </div>
        </div>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200 md:mt-5'>
          {description}
        </p>
      </div>
    </div>
  );
};
