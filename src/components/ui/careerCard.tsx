import { Calendar1 } from 'iconsax-reactjs';
import Image from 'next/image';
import React from 'react';

import { Experience } from '@/constant/experience-data';

import Building from '../../../../public/icons/building.svg';

const CareerCard: React.FC<Experience> = ({
  title,
  company,
  start_date,
  end_date,
  experience,
}) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <div>
          <Image src={Building} alt={'building icon'} /> . {company}
        </div>
        <div>
          <Calendar1 size='20px' color='#ffffff' variant='Outline' />{' '}
          {start_date} - {end_date}
        </div>
      </div>
      <div>
        <ul>
          {experience.map((exp) => (
            <li key={company}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerCard;
