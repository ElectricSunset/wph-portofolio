'use client';

import CareerJourney from './home/partials/careerJourney';
import CoreSkill from './home/partials/coreSkill';
import Faq from './home/partials/faq';
import Hero from './home/partials/hero';
import Introduction from './home/partials/introduction';
import Navbar from './home/partials/navbar';
import Portofolio from './home/partials/portofolio';
import StandOut from './home/partials/standout';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <CareerJourney />
      <CoreSkill />
      <Faq />
      <StandOut />
      <Portofolio />
    </div>
  );
};

export default Home;
