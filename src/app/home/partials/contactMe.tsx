import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is Required' })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({ required_error: 'Email is Required' })
    .email('Please enter a valid email address'),
  message: z
    .string({ required_error: 'Message is Required' })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        { name: data.name, email: data.email, memssage: data.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error Sending Email: ', error);
      setVariant('error');
    } finally {
      setLoading(false);
      setShowDialog(true);
    }
  }

  return (
    <section id='contact'>
      <div className='w-full overflow-clip bg-[url(/images/background_pattern.png)] bg-contain bg-repeat py-10 md:pt-20 md:pb-25'>
        <div className='custom-container flex-center relative flex-wrap bg-[url(/images/background_dots.png)] bg-contain bg-repeat'>
          <Image
            src={'/images/hero_eclipse_big.png'}
            alt='big-dots'
            width={2000}
            height={2000}
            className='absolute right-[-50px] bottom-[-200px] z-0 md:right-[-300px] md:bottom-[-900px]'
          />
          <Image
            src={'/images/hero_eclipse_big.png'}
            alt='big-dots'
            width={2000}
            height={2000}
            className='absolute right-[-50px] bottom-[-200px] z-0 md:right-[-300px] md:bottom-[-900px]'
          />
          <div className='mb-6 flex w-15 flex-[4.61] basis-80 flex-col space-y-3'>
            <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
              {'Contact Me'}
            </h2>
            <p className='md:text-md font-regular text-sm text-neutral-200'>
              {
                'Feel free to drop a message for any inquiries or collaborations.'
              }
            </p>
          </div>
          <div className='z-1 max-w-120 flex-[5.39] basis-80 rounded-4xl bg-[#26262680] p-6'>
            <Form {...form}>
              <form
                className='space-y-5'
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>Name</FormLabel>
                      <Input
                        disabled={loading}
                        placeholder='Name'
                        {...field}
                        className='text-md font-regular h-12 rounded-2xl border-none bg-neutral-500 text-neutral-200'
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>Email</FormLabel>
                      <Input
                        disabled={loading}
                        placeholder='Email'
                        {...field}
                        style={{ height: '48px' }}
                        className='text-md font-regular rounded-2xl border-none bg-neutral-500 text-neutral-200'
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>Message</FormLabel>
                      <Textarea
                        disabled={loading}
                        placeholder='Message'
                        {...field}
                        style={{ height: '168px' }}
                        className='text-md font-regular resize-none rounded-2xl border-none bg-neutral-500 text-neutral-200'
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className='gradient-pink-purple text-md purple-shadow mt-5 w-full font-medium'
                  disabled={loading}
                >
                  {loading ? <ClipLoader size={20} color='#fff' /> : 'Send'}
                </Button>
              </form>
            </Form>
            <FormStatusDialog
              variant={variant}
              open={showDialog}
              onOpenChange={setShowDialog}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
