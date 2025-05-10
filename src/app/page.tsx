'use client';

import CareerJourney from './home/partials/careerJourney';
import ContactMe from './home/partials/contactMe';
import CoreSkill from './home/partials/coreSkill';
import Faq from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Introduction from './home/partials/introduction';
import Navbar from './home/partials/navbar';
import Portofolio from './home/partials/portofolio';
import StandOut from './home/partials/standout';
import { Testimonials } from './home/partials/testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <CareerJourney />
      <CoreSkill />
      <StandOut />
      <Portofolio />
      <Testimonials />
      <Faq />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
