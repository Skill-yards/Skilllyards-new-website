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
      // Animate background section
      gsap.from(".why-section", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 90%",
        },
      });

      gsap.from(".why-header", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-header",
          start: "top 85%",
        },
      });

      gsap.from(".why-subtext", {
        opacity: 0,
        y: 30,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-subtext",
          start: "top 90%",
        },
      });

      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        },
      });

      gsap.from(".why-cta", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".why-cta",
          start: "top 90%",
        },
      });

      // Animate background glow elements
      gsap.to(".glow-left", {
        x: 30,
        y: -30,
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-right", {
        x: -30,
        y: 30,
        scale: 1.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="why-section relative py-20 px-6 bg-gradient-to-br from-sky-100 via-blue-200 to-cyan-100 overflow-hidden shadow-2xl"
    >
      {/* Animated gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="glow-left absolute top-10 left-10 w-[250px] h-[250px] bg-sky-300/40 blur-3xl rounded-full"></div>
        <div className="glow-right absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300/40 blur-3xl rounded-full"></div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="why-header text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
          Why Choose <span className="text-blue-600">Skillyards</span>?
        </h2>
        <p className="why-subtext text-lg text-blue-800 mt-3">
          Discover what makes us the most learner-friendly tech community in Agra.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((text, idx) => (
          <div
            key={idx}
            className="feature-card flex items-start gap-4 bg-white/70 backdrop-blur-lg border border-sky-300/50 p-6 shadow-md 
            hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <CheckCircleIcon className="h-6 w-6 text-sky-600 mt-1 flex-shrink-0" />
            <p className="text-blue-900 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-14">
        <a
          href="/contact"
          className="why-cta relative bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 text-white font-semibold px-10 py-4 rounded-full 
          shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 ease-in-out hover:scale-105"
        >
          Book a Free Demo Class
        </a>
      </div>
    </section>
  );
};

export default WhyChooseSkillyards;
