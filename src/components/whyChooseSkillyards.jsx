"use client";
import { useEffect, useRef } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Industry-Relevant Courses: Learn Full-Stack Development, Data Analytics, and Advanced Digital Marketing designed for today's job market.",
  "Hands-On Projects: Build real-world projects to develop practical, in-demand skills.",
  "Small Batch Mentorship: Personalized guidance with small batch sizes for maximum learning.",
  "Expert Instructors: Mentors with real industry experience dedicated to your success.",
  "Flexible Learning: Online and offline classes that fit your schedule and lifestyle.",
  "Agra Local Advantage: Join a community-focused startup in Agra, building local and global connections.",
  "Growing Career Network: Access workshops, hackathons, and networking events.",
  "Community-First Culture: Collaborative, energetic environment for learning and growth.",
  "Affordable, Transparent Fees: Quality education at startup-friendly pricing.",
  "Early Adopter Benefits: Exclusive offers and chances to help shape Skillyards as a founding learner.",
];

const WhyChooseSkillyards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const featureCards = gsap.utils.toArray(".feature-card");

      featureCards.forEach((card, index) => {
        const isLeft = index % 2 === 0;
        gsap.from(card, {
          x: isLeft ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-100 overflow-hidden shadow-2xl"
    >
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-sky-300/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300/40 blur-3xl rounded-full"></div>
      </div>

   
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
          Why Choose <span className="text-blue-600">Skillyards</span>?
        </h2>
        <p className="text-lg text-blue-800 mt-3">
          Discover what makes us the most learner-friendly tech community in Agra.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((text, idx) => (
          <div
            key={idx}
            className="feature-card flex items-start gap-4 bg-white/70 backdrop-blur-lg border border-sky-300/50 p-6 rounded-lg shadow-md 
            hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <CheckCircleIcon className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0" />
            <p className="text-blue-900 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center mt-14">
        <a
          href="/contact"
          className="relative bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 text-white font-semibold px-10 py-4 rounded-full 
          shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 ease-in-out hover:scale-105"
        >
          Book a Free Demo Class
        </a>
      </div>
    </section>
  );
};

export default WhyChooseSkillyards;
