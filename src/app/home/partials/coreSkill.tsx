import React from 'react';

import { AnimationItem } from '@/components/ui/core-skill-animation';
import { Progress } from '@/components/ui/progress';

import { allSkill } from '@/constant/core-skill';

const CoreSkill: React.FC = () => {
  return (
    <section id='skills'>
      <div className='custom-container mb:pb-20 pb-10'>
        <div className='flex-center mb-10 flex-col space-y-3'>
          <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
            My Core Skill
          </h2>
          <span className='md:text-md font-regular text-center text-sm text-neutral-200'>
            An overview of the key technologies and frameworks I specialize in
          </span>
        </div>
        <div className='flex flex-wrap'>
          <div className='flex-[5.13] basis-80'>
            <AnimationItem></AnimationItem>
          </div>
          <div className='flex-[4.87] basis-80 md:pl-26'>
            <ul>
              {allSkill.map((skill) => (
                <li key={skill.skill} className='mb-5 flex flex-col gap-3'>
                  <div className='flex-between flex'>
                    <p className='md:text-md text-sm font-semibold text-neutral-100'>
                      {skill.skill}
                    </p>
                    <p className='md:text-md text-sm font-semibold text-neutral-100'>{`${skill.level}%`}</p>
                  </div>
                  <Progress value={skill.level}></Progress>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkill;
