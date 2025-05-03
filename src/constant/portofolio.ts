import { StaticImageData } from 'next/image';

import Landingpage1 from '../../public/images/landingpage1.png';
import Landingpage2 from '../../public/images/landingpage2.png';
import Landingpage3 from '../../public/images/landingpage3.png';
import Landingpage4 from '../../public/images/landingpage4.png';
import Landingpage5 from '../../public/images/landingpage5.png';
import Landingpage6 from '../../public/images/landingpage6.png';

export type portoProps = {
  image: StaticImageData;
  type: string;
  stacks: string[];
  description: string;
};

export const porto: portoProps[] = [
  {
    image: Landingpage1,
    type: 'Landing Page',
    stacks: ['React', 'HTML', 'CSS'],
    description:
      'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme"Unity in Creativity"',
  },
  {
    image: Landingpage2,
    type: 'Landing Page',
    stacks: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
  },
  {
    image: Landingpage3,
    type: 'Landing Page',
    stacks: ['React', 'HTML', 'CSS'],
    description:
      'Private hospital in the city of Padang that provides special surgical services.',
  },
  {
    image: Landingpage4,
    type: 'Landing Page',
    stacks: ['React', 'HTML', 'CSS'],
    description:
      'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa)  of experience as an internet solution provider company',
  },
  {
    image: Landingpage5,
    type: 'Landing Page',
    stacks: ['React', 'HTML', 'CSS'],
    description: 'UKUR is a constructor and interior marketplace in Indonesia.',
  },
  {
    image: Landingpage6,
    type: 'Landing Page',
    stacks: ['React', 'HTML', 'CSS'],
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
  },
];
