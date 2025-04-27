import Image from 'next/image';
import React from 'react';

import AchievementCard from '@/components/ui/achievementCard';

import PlayButton from '../../../../public/icons/play.svg';
import ProfilePhoto from '../../../../public/images/face.png';

const Introduction: React.FC = () => {
  return (
    <div className='flex-center custom-container flex-col'>
      <div
        className='gradient-pink-purple relative z-2 mb-20 rounded-4xl'
        style={{
          width: 'clamp(20.0rem,96.03vw,72.5rem)',
          height: 'clamp(7.91rem,38.0vw,28.69rem)',
        }}
      >
        <Image
          src={ProfilePhoto}
          alt='Profile Photo'
          layout='fill'
          objectFit='contain'
        ></Image>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={PlayButton}
            alt='Play Button'
            className='mx-auto'
            style={{
              width: 'clamp(1.17rem,4.61vw,3.48rem)',
              height: 'clamp(1.17rem,4.61vw,3.48rem)',
            }}
          ></Image>
        </div>
      </div>
      <div className='mb-20 flex flex-wrap items-start'>
        <h2 className='text-display-2xl flex-[2.69] basis-80 pr-50.5 font-extrabold whitespace-nowrap text-neutral-100'>
          Who am I?
        </h2>
        <p className='text-md font-regular flex-[7.31] basis-80 text-neutral-200'>
          Hi, I’m Alex, a Front-End Developer & Web Programming Instructor based
          in Jakarta. With over{' '}
          <span className='text-md font-regular text-neutral-100'>
            3 years of experience
          </span>
          , I specialize in crafting interactive, responsive, and user-friendly
          websites that deliver exceptional digital experiences. My expertise
          spans across various industries, including e-commerce, education, and
          SaaS. I am proficient in modern front-end technologies, clean coding
          practices, and performance optimization.
        </p>
      </div>
      {/* Make it Responsive */}
      <div className='flex-center flex-wrap gap-5'>
        <AchievementCard
          type='border'
          number='3+'
          desc='Years Experience'
          styles={{
            width: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
            height: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
          }}
        />
        <AchievementCard
          type='full'
          number='30+'
          desc='Projects'
          styles={{
            width: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
            height: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
          }}
        />
        <AchievementCard
          type='border'
          number='90+'
          desc='Student'
          styles={{
            width: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
            height: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
          }}
        />
        <AchievementCard
          type='full'
          number='20+'
          desc='Happy Clients'
          styles={{
            width: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
            height: 'clamp( 9.25rem, 22.59vw ,17.0625rem)',
          }}
        />
      </div>
    </div>
  );
};

export default Introduction;
