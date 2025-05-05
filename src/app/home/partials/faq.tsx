import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';
import Image from 'next/image';
import React from 'react';

import { faqs } from '@/constant/faq-data';

const Faq: React.FC = () => {
  return (
    <div className='custom-container py-10 md:py-20'>
      <div className='flex-center mb-12 flex-col text-center'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          Frequenly Asked Question
        </h2>
        <span className='md:text-md font-regular text-sm text-neutral-200'>
          Find answers to some of the frequently asked questions below.
        </span>
      </div>
      {/* Adding Change Icon and create Border when accordion open */}
      <div>
        {faqs.map((faq) => (
          <Accordion
            type='single'
            collapsible
            className='mb-5 rounded-2xl bg-neutral-500 px-4 py-6'
            key={faq.value}
          >
            <AccordionItem value={faq.value}>
              <AccordionTrigger className='flex-between w-full'>
                <span className='pr-20 text-left text-xl font-semibold text-neutral-100'>
                  {faq.question}
                </span>
                <Image
                  src={'/icons/arrow-down.svg'}
                  width={13}
                  height={10}
                  alt={'arrow'}
                  className='block'
                />
              </AccordionTrigger>
              <AccordionContent className='md:text-md font-regular text-sm text-neutral-200'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
