'use client';

import CareerJourney from './home/partials/careerJourney';
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
    </div>
  );
};

export default Home;
