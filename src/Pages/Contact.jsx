import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {

  const containerRef = useRef();
  const leftContentRef = useRef();
  const formRef = useRef();
  const quoteRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on mount
      gsap.fromTo(
        leftContentRef.current.children,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
      );

      // Form animation
      gsap.fromTo(
        formRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        quoteRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const button = formRef.current.querySelector("button");

      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.3 });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });

      // Input focus animations
      const inputs = formRef.current.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          gsap.to(input, { scale: 1.02, duration: 0.3 });
        });

        input.addEventListener("blur", () => {
          gsap.to(input, { scale: 1, duration: 0.3 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
    
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1659277424172-bf4e806d339e?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: "brightness(0.8)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 " />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Project Info */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
          <div ref={leftContentRef} className="max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Have a doubt
              <br />
              in mind?
            </h1>

            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Reach out to us. We can make
              <br />
              something awesome together.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">
                  ADDRESS
                </h3>
                <p className="text-white">India</p>
              </div>

              <div>
                <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">
                  EMAIL
                </h3>
                <p className="text-white">info@skillyards.com</p>
              </div>

              <div>
                <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-2">
                  PHONE
                </h3>
                <p className="text-white">+91-99999-99999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
          <div ref={formRef} className="max-w-md mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 pt-40">
              Contact Us
            </h2>

            <form className="space-y-8">
              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-full bg-transparent border-b-2 border-gray-200 text-white placeholder-gray-100 py-3 px-0 focus:border-white focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-transparent border-b-2 border-gray-200 text-white placeholder-gray-100 py-3 px-0 focus:border-white focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-3">
                  DETAILS
                </label>
                <textarea
                  placeholder="Enter your Project Details"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-200 text-white placeholder-gray-100 py-3 px-0 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black font-medium py-4 px-8 hover:bg-gray-100 transition-colors duration-300 mt-8"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
