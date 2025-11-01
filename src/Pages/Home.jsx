import Hero from "@/components/home/Hero";
import OurPartner from "@/components/home/OurPartners";
import Stats from "@/components/home/Stats";
import WhatStudentsSaid from "@/components/feedback-home/WhatStudentsSaid";
import useScrollAnimation from "../components/hooks/useScrollAnimation";
import WhyChooseSkillyards from "@/components/home/whyChooseSkillyards";
import UpcomingBatches from "@/components/home/UpcomingBatches";
import FAQ from "@/components/home/FAQ";

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
