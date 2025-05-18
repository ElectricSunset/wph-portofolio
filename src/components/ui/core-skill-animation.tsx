import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import CSSIcon from '../../../public/icons/css-icon.svg';
import HTMLIcon from '../../../public/icons/html-icon.svg';
import JSIcon from '../../../public/icons/js-icon.svg';
import REACTIcon from '../../../public/icons/react-icon.svg';
import REDUXIcon from '../../../public/icons/redux-icon.svg';
import TSIcon from '../../../public/icons/ts-icon.svg';

const skillVariants: Variants = {
  animate: {
    rotate: -360,
    transition: {
      duration: 0,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  counterAnimate: {
    rotate: 360,
    transition: {
      duration: 0,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

type MotionSkillCardProps = {
  icon: StaticImageData;
  classname?: string;
  alt: string;
  animate: string;
};

const MotionSkillCard: React.FC<MotionSkillCardProps> = ({
  icon,
  classname,
  alt,
  animate,
}) => {
  return (
    <motion.div
      variants={skillVariants}
      animate={animate}
      className={cn(
        'gradient-pink-purple absolute rounded-sm p-0.25 md:rounded-md',
        classname
      )}
      style={{
        width: 'clamp(5.0rem,13.25vw,10.0rem)',
        height: 'clamp(2.5rem,6.62vw,5.0rem)',
      }}
    >
      <div className='flex-center h-full w-full rounded-sm bg-neutral-500 p-1.5 md:rounded-md md:p-3.5'>
        <Image src={icon} alt={alt} className='h-full w-full'></Image>
      </div>
    </motion.div>
  );
};

export const AnimationItem: React.FC = () => {
  return (
    <div
      className='relative'
      style={{
        width: 'clamp(20.0rem,48.59vw,36.69rem)',
        height: 'clamp(20.0rem,48.59vw,36.69rem)',
      }}
    >
      {/* OUTER RING */}
      <motion.div
        variants={skillVariants}
        animate='animate'
        className='absolute top-0 left-[15%] z-10 rounded-full border-2 border-neutral-400'
        style={{
          width: 'clamp(17.5rem,42.63vw,32.19rem)',
          height: 'clamp(17.5rem,42.63vw,32.19rem)',
        }}
      >
        <div className='absolute top-[0%] right-[37%] h-2 w-2 rounded-full bg-neutral-400 md:h-4 md:w-4'></div>
        <div className='absolute right-[43%] -bottom-[1.5%] h-2 w-2 rounded-full bg-neutral-400 md:h-4 md:w-4'></div>
      </motion.div>
      {/* MIDDLE RING */}
      <motion.div
        variants={skillVariants}
        animate='animate'
        className='absolute top-[11.25%] left-[26.125%] z-15 rounded-full border-2 border-neutral-400'
        style={{
          width: 'clamp(13.12rem,31.87vw,24.06rem)',
          height: 'clamp(13.12rem,31.87vw,24.06rem)',
        }}
      >
        <div className='absolute top-[15%] left-[10%] h-2 w-2 rounded-full bg-neutral-400 md:h-4 md:w-4'></div>
        <div className='absolute top-[35%] -right-[0.5%] h-2 w-2 rounded-full bg-neutral-400 md:h-4 md:w-4'></div>
        {/* TYPE SCRIRT */}
        <MotionSkillCard
          icon={TSIcon}
          alt={'Type Script icon'}
          classname='bottom-4 -right-2'
          animate='counterAnimate'
        />
        {/* REACT */}
        <MotionSkillCard
          icon={REACTIcon}
          alt={'React icon'}
          classname='-bottom-[2%] -left-[5%]'
          animate='counterAnimate'
        />

        {/* JAVASCRIPT */}
        <MotionSkillCard
          icon={JSIcon}
          alt={'JavaScript icon'}
          classname='-left-[30%] bottom-[48%]'
          animate='counterAnimate'
        />
        {/* HTML */}
        <MotionSkillCard
          icon={HTMLIcon}
          alt={'HTML icon'}
          classname='-top-[12%] -left-[7%]'
          animate='counterAnimate'
        />
        {/* CSS */}
        <MotionSkillCard
          icon={CSSIcon}
          alt={'CSS icon'}
          classname='-top-[3%] -right-[18%]'
          animate='counterAnimate'
        />
        {/* REDUX */}
        <MotionSkillCard
          icon={REDUXIcon}
          alt={'Redux icon'}
          classname='right-[9%] top-[25%]'
          animate='counterAnimate'
        />
      </motion.div>

      {/* INNER RING */}
      <motion.div
        variants={skillVariants}
        animate='animate'
        className='absolute top-[21.125%] left-[36.5%] rounded-full border-2 border-neutral-400'
        style={{
          width: 'clamp(9.06rem,22.02vw,16.62rem)',
          height: 'clamp(9.06rem,22.02vw,16.62rem)',
        }}
      >
        <div className='absolute top-[45%] -left-[3%] h-2 w-2 rounded-full bg-neutral-400 md:h-4 md:w-4'></div>
      </motion.div>
    </div>
  );
};
