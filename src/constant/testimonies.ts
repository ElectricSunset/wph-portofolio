import { StaticImageData } from 'next/image';

import Testi1 from '../../public/images/Testi1.png';
import Testi2 from '../../public/images/Testi2.png';
import Testi3 from '../../public/images/Testi3.png';
import Testi4 from '../../public/images/Testi4.png';

export type TestimonyProps = {
  photo: StaticImageData;
  name: string;
  position: string;
  testi: string;
};

export const Testimonies: TestimonyProps[] = [
  {
    photo: Testi1,
    name: 'Rafel Struick',
    position: 'CEO',
    testi:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    photo: Testi2,
    name: 'Rafel Struick',
    position: 'CEO',
    testi:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    photo: Testi3,
    name: 'Rafel Struick',
    position: 'CEO',
    testi:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
  {
    photo: Testi4,
    name: 'Rafel Struick',
    position: 'CEO',
    testi:
      '“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”',
  },
];
