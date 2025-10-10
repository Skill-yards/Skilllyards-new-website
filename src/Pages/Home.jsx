import Hero from '@/components/Hero';
import OurPartner from '@/components/OurPartners';
import Stats from '@/components/Stats';
import WhatStudentsSaid from '@/components/feedback-home/WhatStudentsSaid';
import useScrollAnimation from '../components/hooks/useScrollAnimation';


const Home = () => {
  useScrollAnimation(".reveal");
 
  return (
    <>
      <Hero  className={"reveal"}
      />
      <OurPartner className ={"reveal"} />
      <WhatStudentsSaid  className={"reveal"}/>
      <Stats />
      <div className="container mx-auto px-6 py-8 pt-28 reveal">
        <h1 className="text-3xl font-bold text-blue-950">Welcome to Home</h1>
        <p>This is the home page.</p>
      </div>
    </>
  );
};

export default Home;
