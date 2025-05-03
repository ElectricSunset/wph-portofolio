'use client';

import CareerJourney from './home/partials/careerJourney';
import ContactMe from './home/partials/contactMe';
import CoreSkill from './home/partials/coreSkill';
import Faq from './home/partials/faq';
import Hero from './home/partials/hero';
import Introduction from './home/partials/introduction';
import Navbar from './home/partials/navbar';
import Portofolio from './home/partials/portofolio';
import StandOut from './home/partials/standout';
import Testimony from './home/partials/testimony';

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
      <Testimony />
      <ContactMe />
    </div>
  );
};

export default Home;
