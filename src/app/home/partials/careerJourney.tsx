import React from 'react';

import CareerCard from '@/components/ui/careerCard';

import { Experiences } from '@/constant/experience-data';

const CareerJourney: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Career Journey</h2>
        <p>
          A visual timeline of key milestones and experiences from over the
          years.
        </p>
      </div>
      <div>
        {Experiences.map((exp) => (
          <CareerCard
            key={exp.company}
            title={exp.title}
            company={exp.company}
            start_date={exp.start_date}
            end_date={exp.end_date}
            experience={exp.experience}
          ></CareerCard>
        ))}
      </div>
    </div>
  );
};

export default CareerJourney;
