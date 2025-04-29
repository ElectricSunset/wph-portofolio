import React from 'react';

const StandOut: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20'>
      <div className='flex-center mb-12 flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          Why I Stand Out
        </h2>
        <span className='text-md font-regular text-neutral-200'>
          A showcase of my unique approach and skill set compared to
          conventional front-end developers
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default StandOut;
