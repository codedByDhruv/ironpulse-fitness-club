import React from 'react';
import Hero from '../../components/Hero/Hero';
import Marquee from '../../components/Marquee/Marquee';
import Programs from '../../components/Programs/Programs';
import About from '../../components/About/About';
import Trainers from '../../components/Trainers/Trainers';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Programs />
      <About />
      <Trainers />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
