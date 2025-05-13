import { StaticImageData } from 'next/image';

import css_icon from '../../public/icons/css-icon.svg';
import html_icon from '../../public/icons/html-icon.svg';
import js_icon from '../../public/icons/js-icon.svg';
import react_icon from '../../public/icons/react-icon.svg';
import redux_icon from '../../public/icons/redux-icon.svg';
import ts_icon from '../../public/icons/ts-icon.svg';

export type Skills = {
  skill: string;
  level: number;
  icon: StaticImageData;
};

export const allSkill: Skills[] = [
  { skill: 'HTML', level: 100, icon: html_icon },
  {
    skill: 'Redux',
    level: 85,
    icon: redux_icon,
  },
  { skill: 'Javascript', level: 90, icon: js_icon },
  {
    skill: 'React',
    level: 90,
    icon: react_icon,
  },
  { skill: 'CSS', level: 80, icon: css_icon },
  {
    skill: 'Typescript',
    level: 70,
    icon: ts_icon,
  },
];
