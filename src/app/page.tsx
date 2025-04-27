'use client';

import Hero from './home/partials/hero';
import Introduction from './home/partials/introduction';
import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
    </div>
  );
};

export default Home;
