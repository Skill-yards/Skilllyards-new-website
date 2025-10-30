import React from "react";
import forelsket from "../assets/companies/forelsket.png";
import s7c from "../assets/companies/s7c.png";
import sndigitech from "../assets/companies/sndigitech.webp";
import webmobril from "../assets/companies/webmobril.png";
import attrix from "../assets/companies/attrix1.svg";
import Infosys from "../assets/companies/infosys.webp";
import Tcl from "../assets/companies/tcl.webp";
import genpact from "../assets/companies/genpact.webp";

const companyLogos = [
  { src: forelsket, name: "Forelsket" },
  { src: s7c, name: "S7C" },
  { src: sndigitech, name: "SN Digitech" },
  { src: webmobril, name: "Webmobril" },
  { src: attrix, name: "Attrix" },
  { src: Infosys, name: "Infosys" },
  { src: Tcl, name: "TCL" },
  { src: genpact, name: "Genpact" },
];

const OurPartner = ({ className }) => (
  <section
    className={`relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-[#2b3769] via-white to-[#578dca] ${className}`}
  >
    {/* Decorative gradient orbs */}
    <div className="absolute top-[10rem] right-[10rem] w-[300px] h-[300px] max-w-[90vw] bg-gradient-to-r from-[#00bcd4]/40 to-[#1de9b6]/30 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-8rem] left-[-8rem] w-[250px] h-[250px] max-w-[90vw] bg-gradient-to-r from-[#f48fb1]/30 to-[#fdd835]/30 blur-[100px] rounded-full animate-pulse" />

    <div className="relative z-10 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#0d3e39] tracking-tight">
        Our Placement Partners
      </h2>
      <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
        We proudly collaborate with leading tech organizations driving innovation.
      </p>
      <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#1de9b6] rounded-full mx-auto mt-6 mb-12 shadow-lg" />

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        <div
          className="flex items-center gap-6 sm:gap-8 min-w-max animate-[scroll_25s_linear_infinite]"
        >
          {[...companyLogos, ...companyLogos].map(({ src, name }, i) => (
            <figure
              key={name + i}
              className="group relative w-[120px] sm:w-[150px] flex-shrink-0 flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-out"
            >
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-lg ring-1 ring-white/30 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,188,212,0.4)]">
                <img
                  src={src}
                  alt={`${name} logo`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-2 sm:mt-3 px-3 py-1 bg-gradient-to-r from-[#00bcd4]/20 to-[#1de9b6]/20 text-[#0d3e39] text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:from-[#00bcd4]/30 group-hover:to-[#1de9b6]/30">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default OurPartner;