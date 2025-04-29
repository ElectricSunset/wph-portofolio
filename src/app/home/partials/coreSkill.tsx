import React from 'react';

import { Progress } from '@/components/ui/progress';

import { allSkill } from '@/constant/core-skill';

const CoreSkill: React.FC = () => {
  return (
    <div className='custom-container mt-20 mb-20'>
      <div className='flex-center mb-10 flex-col'>
        <h2 className='text-display-2xl font-extrabold text-neutral-100'>
          My Core Skill
        </h2>
        <span className='text-md font-regular text-neutral-200'>
          An overview of the key technologies and frameworks I specialize in
        </span>
      </div>
      <div>{/* Placeholder for skill muter - muter */}</div>
      <div>
        <ul>
          {allSkill.map((skill) => (
            <li key={skill.skill} className='mb-5 flex flex-col gap-3'>
              <div className='flex-between flex'>
                <p className='text-md font-semibold text-neutral-100'>
                  {skill.skill}
                </p>
                <p className='text-md font-semibold text-neutral-100'>{`${skill.level}%`}</p>
              </div>
              <Progress value={skill.level}></Progress>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoreSkill;
