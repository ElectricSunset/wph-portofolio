import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import CSSIcon from '../../../public/icons/css-icon.svg';
import HTMLIcon from '../../../public/icons/html-icon.svg';
import JSIcon from '../../../public/icons/js-icon.svg';
import REACTIcon from '../../../public/icons/react-icon.svg';
import REDUXIcon from '../../../public/icons/redux-icon.svg';
import TSIcon from '../../../public/icons/ts-icon.svg';

const skillVariants: Variants = {
  animateFast: {
    rotate: -360,
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  counterAnimateFast: {
    rotate: 360,
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  animate: {
    rotate: -360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  counterAnimate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  animateSlow: {
    rotate: -360,
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  counterAnimateSlow: {
    rotate: 360,
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const AnimationItem: React.FC = () => {
  return (
    <div className='relative h-full w-full'>
      {/* OUTER RING */}
      <motion.div
        variants={skillVariants}
        animate='animateSlow'
        className='] absolute top-[-7.5%] h-full w-full rounded-full border-2 border-neutral-400'
      >
        {/* HTML */}
        <div className='absolute top-45 h-4 w-4 rounded-full bg-neutral-400'></div>
        <motion.div
          variants={skillVariants}
          animate='counterAnimateSlow'
          className='gradient-pink-purple absolute bottom-0 left-15 h-20 w-40 rounded-md p-0.25'
        >
          <div className='flex-center h-full w-full rounded-md bg-neutral-500'>
            <Image
              src={HTMLIcon}
              alt={'html icon'}
              className='h-13 w-13'
            ></Image>
          </div>
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={skillVariants}
          animate='counterAnimateSlow'
          className='gradient-pink-purple absolute top-30 -right-15 h-20 w-40 rounded-md p-0.25'
        >
          <div className='flex-center h-full w-full rounded-md bg-neutral-500'>
            <Image src={CSSIcon} alt={'css icon'} className='h-13 w-13'></Image>
          </div>
        </motion.div>
      </motion.div>
      {/* MIDDLE RING */}
      <motion.div
        variants={skillVariants}
        animate='animate'
        className='absolute top-[10%] left-[11.25%] h-96.25 w-96.25 rounded-full border-2 border-neutral-400'
      >
        <div className='absolute top-30 h-4 w-4 rounded-full bg-neutral-400'></div>
        {/* TYPE SCRIRT */}
        <motion.div
          variants={skillVariants}
          animate='counterAnimate'
          className='gradient-pink-purple absolute left-60 h-20 w-40 rounded-md p-0.25'
        >
          <div className='flex-center h-full w-full rounded-md bg-neutral-500'>
            <Image
              src={TSIcon}
              alt={'Type Script icon'}
              className='h-13 w-13'
            ></Image>
          </div>
        </motion.div>

        {/* REACT */}
        <motion.div
          variants={skillVariants}
          animate='counterAnimate'
          className='gradient-pink-purple absolute right-70 h-20 w-40 rounded-md p-0.25'
        >
          <div className='flex-center h-full w-full rounded-md bg-neutral-500'>
            <Image
              src={REACTIcon}
              alt={'React icon'}
              className='h-13 w-13'
            ></Image>
          </div>
        </motion.div>

        {/* JAVASCRIPT */}
        <motion.div
          variants={skillVariants}
          animate='counterAnimate'
          className='gradient-pink-purple absolute right-30 -bottom-15 h-20 w-40 rounded-md p-0.25'
        >
          <div className='flex-center h-full w-full rounded-md bg-neutral-500'>
            <Image
              src={JSIcon}
              alt={'Java Script icon'}
              className='h-13 w-13'
            ></Image>
          </div>
        </motion.div>
      </motion.div>
      {/* INNER RING */}
      <motion.div
        variants={skillVariants}
        animate='animateFast'
        className='absolute top-[25%] left-[21.5%] h-66.5 w-66.5 rounded-full border-2 border-neutral-400'
      >
        <div className='absolute top-20 h-4 w-4 rounded-full bg-neutral-400'></div>
        {/* REDUX */}
        <motion.div
          variants={skillVariants}
          animate='counterAnimateFast'
          className='gradient-pink-purple absolute right-0 bottom-0 h-20 w-40 rounded-md p-0.25'
        >
          <div className='flex-center h-full w-full rounded-md bg-neutral-500'>
            <Image
              src={REDUXIcon}
              alt={'Redux icon'}
              className='h-13 w-13'
            ></Image>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
