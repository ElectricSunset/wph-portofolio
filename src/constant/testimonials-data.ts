import { StaticImageData } from 'next/image';

import profile1Src from '../../public/images/Testi1.png';
import profile2Src from '../../public/images/Testi2.png';
import profile3Src from '../../public/images/Testi3.png';
import profile4Src from '../../public/images/Testi4.png';

export type Testimonial = {
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

export const testimonialsData: Testimonial[] = [
  {
    profileSrc: profile1Src,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
  {
    profileSrc: profile2Src,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
  {
    profileSrc: profile3Src,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
  {
    profileSrc: profile4Src,
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
];
