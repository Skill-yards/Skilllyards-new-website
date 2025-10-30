import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (selector = ".reveal", options = {}) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 60 });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: options.start || "top 90%",
          end: options.end || "bottom 70%",
          toggleActions: "play none none reverse",
          scrub: options.scrub || false,
          // markers: true, // uncomment for debugging
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, options]);
};

export default useScrollAnimation;
