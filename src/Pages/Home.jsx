import Hero from '@/components/Hero';
import OurPartner from '@/components/OurPartners';
import Stats from '@/components/Stats';
import WhatStudentsSaid from '@/components/feedback-home/WhatStudentsSaid';

const Home = () => {
  return (
    <>
      <Hero />
      <OurPartner />
      <WhatStudentsSaid />
      <Stats />
      <div className="container mx-auto px-6 py-8 pt-28">
        <h1 className="text-3xl font-bold text-blue-950">Welcome to Home</h1>
        <p>This is the home page.</p>
      </div>
    </>
  );
};

export default Home;
