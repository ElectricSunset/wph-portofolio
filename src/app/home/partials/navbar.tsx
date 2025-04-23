import { Sms } from 'iconsax-reactjs';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

import { navigationData } from '@/constant/navigation-data';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className={'fixed top-0 z-30 w-full'}
    >
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src={'/icons/logo.svg'}
          alt='logo'
          width={40}
          height={40}
          className='max-md:h-8 max-md:w-8'
        />

        <nav className='hidden md:block'>
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
          {/* {Visit Later for more proper solution} */}
          <Button
            asChild
            variant={'default'}
            size={'default'}
            className='hidden gap-1.5 md:flex'
          >
            <Link href={'#'}>
              {' '}
              <Sms></Sms>
              Hire Me
            </Link>
          </Button>

          <Button
            asChild
            variant={'default'}
            size={'icon'}
            className='gap-1.5 md:hidden'
          >
            <Link href={'#'}>
              {' '}
              <Sms></Sms>
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger>
              <Menu className='block md:hidden' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle />
                <SheetDescription>
                  <Image
                    src={'/icons/logo.svg'}
                    alt='logo'
                    width={28}
                    height={28}
                    className='mb-9.5'
                  />
                  <ul className='flex flex-col gap-6'>
                    {navigationData.map((data) => (
                      <li key={data.label}>
                        <Link
                          href={data.href}
                          className='text-md-regular text-neutral-100'
                        >
                          {data.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={'default'}
                    size={'default'}
                    className='mt-6 flex gap-1.5'
                  >
                    <Link href={'#'}>
                      {' '}
                      <Sms></Sms>
                      Hire Me
                    </Link>
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
