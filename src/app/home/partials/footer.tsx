import Image from 'next/image';
import React from 'react';

import Instagram from '../../../../public/icons/instagram_icon.svg';
import Linkedin from '../../../../public/icons/linkedin_icon.svg';
import Logo from '../../../../public/icons/logo.svg';
import Web from '../../../../public/icons/web_icon.svg';

const Footer: React.FC = () => {
  return (
    <div className='custom-container space-y-6 py-10 md:flex md:h-25 md:items-center md:justify-between md:space-y-0'>
      <div className='md:flex-center hidden gap-4 md:flex'>
        <Image src={Logo} alt={'icon'} className='h-10 w-10'></Image>
        <p className='text-md text-neutral-200'>{'© Shendy2025'}</p>
      </div>
      <div className='flex gap-4'>
        <div className='flex-center h-12 w-12 rounded-full border-1 border-neutral-400'>
          <Image src={Web} alt={'Web Icon'}></Image>
        </div>
        <div className='flex-center h-12 w-12 rounded-full border-1 border-neutral-400'>
          <Image src={Instagram} alt={'Web Icon'}></Image>
        </div>
        <div className='flex-center h-12 w-12 rounded-full border-1 border-neutral-400'>
          <Image src={Linkedin} alt={'Web Icon'}></Image>
        </div>
      </div>
      <div className='flex gap-4 md:hidden'>
        <Image src={Logo} alt={'icon'} className='h-10 w-10'></Image>
        <p className='text-md text-neutral-200'>{'© Shendy2025'}</p>
      </div>
    </div>
  );
};

export default Footer;
