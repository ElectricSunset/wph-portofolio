import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id='home'>
      <div className='bg-[url(/images/background_dots.png)] bg-contain bg-repeat'>
        <div className='custom-container flex-center relative overflow-hidden bg-[url(/images/background_pattern.png)] bg-contain bg-repeat pt-26 pb-10 md:pt-55.5 md:pb-55'>
          <Image
            src={'/images/hero_eclipse_small.png'}
            alt='small-dots'
            width={258}
            height={221}
            className='absolute top-[-120px] left-35'
          />
          <Image
            src={'/images/hero_eclipse_big.png'}
            alt='big-dots'
            width={690}
            height={690}
            className='absolute top-80 right-[-75px]'
          />
          <div className='flex-center max-w-239.25 flex-col gap-6'>
            {/* border not center enough try another way later*/}
            <div className='gradient-pink-purple flex-center rounded-full p-0.5'>
              <p className='md:text-md-medium rounded-full bg-black px-4 py-2 text-xs text-neutral-100 md:px-6'>
                {"🧑 Alex's Portofolio"}
              </p>
            </div>
            <h1 className='text-display-xl md:text-display-3xl text-center font-extrabold'>
              {'I am a '}
              <span className='gradient-pink-purple bg-clip-text text-transparent'>
                Front-end Developer
              </span>
              {' & Web Programming Instructor'}
            </h1>
            <p className='md:text-md text-center text-sm text-neutral-200'>
              {"Hi, I'm Alex, a passionate web developer with over "}
              <span className='text-neutral-100'>3 years of experience</span>
              {
                ' in creating responsive websites. I also teach aspiring developers to master modern web programming and bring their ideas to life.'
              }
            </p>
            <Button asChild className='purple-shadow z-2 w-full sm:w-auto'>
              <Link href='#projects' className='sm:text-md text-sm font-medium'>
                {'View Portofolio'}
              </Link>
            </Button>
          </div>
        </div>
        {/* <Image
        src={'/images/waves.png'}
        alt='big-dots'
        width={700}
        height={690}
        className='absolute bottom-[-50px] z-0 h-auto w-full sm:bottom-[-150px]'
      /> */}
      </div>
    </section>
  );
};

export default Hero;
