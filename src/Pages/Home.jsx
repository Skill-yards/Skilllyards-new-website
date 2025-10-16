import Hero from "@/components/Hero";
import OurPartner from "@/components/OurPartners";
import Stats from "@/components/Stats";
import WhatStudentsSaid from "@/components/feedback-home/WhatStudentsSaid";
import useScrollAnimation from "../components/hooks/useScrollAnimation";
import WhyChooseSkillyards from "@/components/whyChooseSkillyards";
import UpcomingBatches from "@/components/UpcomingBatches";
import FAQ from "@/components/FAQ";

const Home = () => {
  useScrollAnimation(".reveal");

  return (
    <>
      <Hero className={"reveal"} />
      <OurPartner className={"reveal"} />
      <WhatStudentsSaid className={"reveal"} />
      <Stats className={"reveal"} />
      <WhyChooseSkillyards className={"reveal"} />
      <UpcomingBatches className={"reveal"} />
      <FAQ className={"reveal"} />
    </>
  );
};

export default Home;
