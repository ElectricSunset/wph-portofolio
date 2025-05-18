import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import { faqs } from '@/constant/faq-data';

const Faq: React.FC = () => {
  return (
    <section id='faq'>
      <div className='custom-container py-10 md:py-20'>
        <div className='flex-center mb-12 flex-col text-center'>
          <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
            Frequenly Asked Question
          </h2>
          <span className='md:text-md font-regular text-sm text-neutral-200'>
            Find answers to some of the frequently asked questions below.
          </span>
        </div>

        <Accordion type='single' collapsible>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className='data-[state=open]:from-secondary-500 data-[state=open]:to-primary-500 mb-5 rounded-2xl bg-neutral-500 p-0.5 last:mb-0 data-[state=open]:bg-gradient-to-r'
            >
              <div className='rounded-2xl bg-neutral-500 px-6'>
                <AccordionTrigger className='flex w-full cursor-pointer items-center'>
                  <span className='pr-4 text-left text-xl font-semibold text-neutral-100'>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className='md:text-md font-regular text-sm text-neutral-200'>
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
