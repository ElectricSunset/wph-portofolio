import Image from 'next/image';
import React from 'react';

import AchievementCard from '@/components/ui/achievementCard';

const Introduction: React.FC = () => {
  return (
    <div className='flex-center custom-container flex-col'>
      <div className='gradient-pink-purple relative z-2 mb-20 h-112 w-full rounded-4xl'>
        <Image
          src={'/images/face.png'}
          width={800}
          height={448}
          alt='Profile Photo'
          className='mx-auto'
        ></Image>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={'/icons/play.svg'}
            width={71}
            height={71}
            alt='Play Button'
            className='mx-auto'
          ></Image>
        </div>
      </div>
      <div className='mb-20 flex items-start'>
        <h2 className='text-display-2xl pr-50.5 font-extrabold whitespace-nowrap text-neutral-100'>
          Who am I?
        </h2>
        <p className='text-md font-regular text-neutral-200'>
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
      <div className='flex-center gap-5'>
        <AchievementCard
          styles='border'
          number='3+'
          desc='Years Experience'
          className='h-68.25 w-68.25'
        />
        <AchievementCard
          styles='full'
          number='30+'
          desc='Projects'
          className='h-68.25 w-68.25'
        />
        <AchievementCard
          styles='border'
          number='90+'
          desc='Student'
          className='h-68.25 w-68.25'
        />
        <AchievementCard
          styles='full'
          number='20+'
          desc='Happy Clients'
          className='h-68.25 w-68.25'
        />
      </div>
    </div>
  );
};

export default Introduction;
