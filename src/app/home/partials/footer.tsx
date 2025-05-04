import Image from 'next/image';
import React from 'react';

import Instagram from '../../../../public/icons/instagram_icon.svg';
import Linkedin from '../../../../public/icons/linkedin_icon.svg';
import Logo from '../../../../public/icons/logo.svg';
import Web from '../../../../public/icons/web_icon.svg';

const Footer: React.FC = () => {
  return (
    <div className='custom-container flex-between h-25'>
      <div className='flex-center gap-4'>
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
    </div>
  );
};

export default Footer;
