import React from 'react';
import Hero from './Hero';
import HowWeWork1 from './HowWeWork1';
import TechFlowchart from './TechFlowchart';
import ServicesSection from './ServicesSection';
import Footer from './Footer';
import TestimonialCarousel from './TestimonialCarousel';
import ClientProjects from './ClientProjects';
import ScrollReveal from './ScrollReveal';

const Home = () => {
  return (
    <div>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <HowWeWork1 />
      </ScrollReveal>

      <ScrollReveal>
        <ClientProjects />
      </ScrollReveal>

      {/* <ScrollReveal>
        <TechFlowchart />
      </ScrollReveal> */}

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialCarousel />
      </ScrollReveal>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Home;
