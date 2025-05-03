import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20 flex'>
      <div className='flex w-15 flex-[4.61] basis-80 flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          {'Contact Me'}
        </h2>
        <p className='text-md font-regular text-neutral-200'>
          {'Feel free to drop a message for any inquiries or collaborations.'}
        </p>
      </div>
      <div className='bg-opacity-50 flex-[5.39] basis-80 rounded-4xl bg-[#262626]'>
        {' '}
      </div>
    </div>
  );
};

export default ContactMe;
