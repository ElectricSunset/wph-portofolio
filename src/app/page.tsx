'use client';

import CareerJourney from './home/partials/careerJourney';
import CoreSkill from './home/partials/coreSkill';
import Hero from './home/partials/hero';
import Introduction from './home/partials/introduction';
import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <CareerJourney />
      <CoreSkill />
    </div>
  );
};

export default Home;
