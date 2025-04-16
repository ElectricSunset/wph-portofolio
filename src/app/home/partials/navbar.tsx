import { Sms } from 'iconsax-reactjs';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { navigationData } from '@/constant/navigation-data';

const Navbar: React.FC = () => {
  return (
    <header>
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src={'/icons/logo.svg'}
          alt='logo'
          width={40}
          height={40}
          className='max-md:h-8 max-md:w-8'
        />

        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='text-md-regular px-2'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-between gap-4.5'>
          <Button variant={'default'} size={'default'} className='gap-1.5'>
            <Sms></Sms>
            Hire Me
          </Button>

          <Menu className='block lg:hidden' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
