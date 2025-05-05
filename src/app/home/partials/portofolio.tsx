import React from 'react';

import PortofolioCard from '@/components/ui/portofolioCard';

import { porto } from '@/constant/portofolio';
const Portofolio: React.FC = () => {
  return (
    <div className='custom-container py-10 md:py-20'>
      <div className='mb-8 md:mb-12 md:flex'>
        <h2 className='text-display-sm md:text-display-2xl mb-3 flex-[6.09] basis-80 font-extrabold text-neutral-100 md:mb-0'>
          Experience in Front-End Development
        </h2>
        <p className='md:text-md font-regular flex-[3.91] basis-80 justify-end text-sm text-neutral-200'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>
      </div>
      <div className='flex flex-wrap gap-x-6 gap-y-8 md:gap-y-12'>
        {porto.map((portos, index) => (
          <PortofolioCard
            image={portos.image}
            type={portos.type}
            stacks={portos.stacks}
            description={portos.description}
            key={`portofolio-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
