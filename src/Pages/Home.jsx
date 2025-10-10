import Hero from '@/components/Hero';
import OurPartner from '@/components/OurPartners';
import Stats from '@/components/Stats';
import WhatStudentsSaid from '@/components/feedback-home/WhatStudentsSaid';
import WhyChooseSkillyards from '@/components/whyChooseSkillyards';

const Home = () => {
  return (
    <>
      <Hero />
      <OurPartner />
      <WhatStudentsSaid />
      <WhyChooseSkillyards />
      <Stats />
    </>
  );
};

export default Home;
