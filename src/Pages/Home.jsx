import Hero from "@/components/Hero";
import OurPartner from "@/components/OurPartners";
import Stats from "@/components/Stats";
import WhatStudentsSaid from "@/components/feedback-home/WhatStudentsSaid";
import useScrollAnimation from "../components/hooks/useScrollAnimation";
import WhyChooseSkillyards from "@/components/whyChooseSkillyards";

const Home = () => {
  useScrollAnimation(".reveal");

  return (
    <>
      <Hero className={"reveal"} />
      <OurPartner className={"reveal"} />
      <WhatStudentsSaid className={"reveal"} />
      <Stats />
      <WhyChooseSkillyards />
    </>
  );
};

export default Home;
