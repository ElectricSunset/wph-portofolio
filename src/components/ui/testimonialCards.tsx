import Image from 'next/image';

import { Testimonial } from '@/constant/testimonials-data';

export const TestimonialCard: React.FC<Testimonial> = ({
  description,
  profileName,
  profileOccupation,
  profileSrc,
}) => {
  return (
    <div className='hover:from-secondary-500 hover:to-primary-500 relative overflow-hidden rounded-2xl bg-neutral-500 p-[1px] transition-all hover:bg-gradient-to-r'>
      <div
        className='relative z-20 rounded-2xl bg-neutral-500 p-4 md:p-5'
        style={{
          width: 'clamp(18.88rem,41.39vw,31.25rem)',
          height: 'clamp(13.44rem,20.12vw,15.19rem)',
        }}
      >
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
