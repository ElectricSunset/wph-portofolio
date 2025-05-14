import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { portoProps } from '@/constant/portofolio';

const PortofolioCard: React.FC<portoProps> = ({
  image,
  type,
  stacks,
  description,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div className='flex-1 basis-92.5'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: isInView ? 1 : 0,

          x: isInView ? 0 : -50,
        }}
        transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt='porto-image'
          className='mb-4 h-92.5 rounded-4xl object-cover'
        />
      </motion.div>

      <div>
        <h3 className='text-lg font-bold text-neutral-100 md:text-xl'>
          {type}
        </h3>
        <div className='my-3 flex gap-2'>
          {stacks.map((stack) => (
            <div
              key={stack}
              className='rounded-full border-1 border-neutral-300 px-4 py-1 text-sm md:py-2'
            >
              {stack}
            </div>
          ))}
        </div>

        <p className='md:text-md font-regular overflow-clip text-sm text-neutral-200 md:h-15'>
          {description}
        </p>
      </div>

      <div className='mt-3 flex gap-1.5 md:mt-10'>
        <h3 className='gradient-pink-purple text-md bg-clip-text font-bold text-transparent md:text-lg'>
          {'Visit'}
        </h3>
        <Image
          src={'/icons/arrow-porto.svg'}
          alt='arrow'
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default PortofolioCard;
