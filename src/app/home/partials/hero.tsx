import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(max-width: 768px)');

    const handleChange = (event: MediaQueryListEvent): void => {
      setIsMobile(event.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Add listener (modern browsers)
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <section id='home'>
      <div className='bg-[url(/images/hero-circle-decoration.png)] bg-[length:40vw_40vw] bg-repeat'>
        <div className='custom-container flex-center relative overflow-hidden bg-[url(/images/hero-grid-decoration.png)] bg-[length:10vw_10vw] bg-repeat pt-26 pb-10 md:pt-55.5 md:pb-55'>
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
            <div className='gradient-pink-purple flex-center rounded-full p-0.5'>
              <p className='md:text-md-medium rounded-full bg-black px-4 py-2 text-xs text-neutral-100 md:px-6'>
                {"🧑 Alex's Portofolio"}
              </p>
            </div>
            <h1 className='text-display-xl md:text-display-3xl text-center font-bold md:font-extrabold'>
              {'I am a '}
              {isMobile ? (
                <>
                  <span className='gradient-pink-purple p-[1px] leading-20'>
                    <span className='relative bg-black px-[4px]'>
                      <span className='gradient-pink-purple bg-clip-text text-transparent'>
                        Front
                      </span>
                      <div className='gradient-pink-purple absolute -top-0.75 -left-1 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                      <div className='gradient-pink-purple absolute -top-0.75 -right-1 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                      <div className='gradient-pink-purple absolute -bottom-0.75 -left-1 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                      <div className='gradient-pink-purple absolute -right-1 -bottom-0.75 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                    </span>
                  </span>
                  {'  '}
                  <span className='gradient-pink-purple px-[1px] py-[1px]'>
                    <span className='relative bg-black px-[4px]'>
                      <span className='gradient-pink-purple inline-block bg-clip-text text-transparent'>
                        End Developer
                      </span>
                      <div className='gradient-pink-purple absolute -top-0.75 -left-1 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                      <div className='gradient-pink-purple absolute -top-0.75 -right-1 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                      <div className='gradient-pink-purple absolute -bottom-0.75 -left-1 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                      <div className='gradient-pink-purple absolute -right-1 -bottom-0.75 p-[1px]'>
                        <div className='h-1.25 w-1.75 bg-white' />
                      </div>
                    </span>
                  </span>
                </>
              ) : (
                <span className='gradient-pink-purple inline-block px-[1px] py-[5px]'>
                  <span className='relative bg-black px-[4px]'>
                    <span className='gradient-pink-purple bg-clip-text text-transparent'>
                      Front-End Developer
                    </span>
                    <div className='gradient-pink-purple absolute -top-1.25 -left-2.5 p-[1px]'>
                      <div className='h-2.25 w-4.75 bg-white' />
                    </div>
                    <div className='gradient-pink-purple absolute -bottom-1.25 -left-2.5 p-[1px]'>
                      <div className='h-2.25 w-4.75 bg-white' />
                    </div>
                    <div className='gradient-pink-purple absolute -right-2.5 -bottom-1.25 p-[1px]'>
                      <div className='h-2.25 w-4.75 bg-white' />
                    </div>
                    <div className='gradient-pink-purple absolute -top-1.25 -right-2.5 p-[1px]'>
                      <div className='h-2.25 w-4.75 bg-white' />
                    </div>
                  </span>
                </span>
              )}
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
      </div>
    </section>
  );
};

export default Hero;
