import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  DialogClose,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogBody,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='max-w-119.75 overflow-clip px-6 py-8 md:px-8 md:py-10'>
        <DialogHeader className='relative items-center pt-8 pb-11.75'>
          <Image
            src={'/images/message_sent_shadow.png'}
            alt={variant}
            width={495}
            height={495}
            className='absolute top-[-40%]'
          />
          <Image
            src={'/icons/message_sent_icon.svg'}
            alt={variant}
            width={168}
            height={162}
          />
        </DialogHeader>
        <DialogBody className='flex-center flex-col'>
          <DialogTitle className='pb-2 text-xl font-semibold text-neutral-100'>
            {variant === 'success'
              ? 'Message Sent Successfully'
              : 'Message Failed to Sent'}
          </DialogTitle>
          <DialogDescription className='text-md font-regular pb-6 text-center text-neutral-200'>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'You can comeback and try again'}
          </DialogDescription>
          <DialogClose asChild>
            <Button className='w-full'>Back to Home</Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
