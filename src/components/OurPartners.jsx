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

const OurPartner = ({className}) => (
  <section className={`relative py-20 overflow-hidden bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f8e9] ${className}`}>
    {/* Decorative gradient orbs */}
    <div className="absolute top-[-10rem] right-[-10rem] w-[400px] h-[400px] bg-gradient-to-r from-[#00bcd4]/40 to-[#1de9b6]/30 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-8rem] left-[-8rem] w-[300px] h-[300px] bg-gradient-to-r from-[#f48fb1]/30 to-[#fdd835]/30 blur-[100px] rounded-full animate-pulse" />

    <div className="relative z-10 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#0d3e39] tracking-tight">
        Our Placement Partners
      </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        We proudly collaborate with leading tech organizations driving innovation.
      </p>
      <div className="w-24 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#1de9b6] rounded-full mx-auto mt-6 mb-12 shadow-lg" />

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        <div
          className="flex items-center"
          style={{
            width: "200%",
            animation: "scroll 30s linear infinite",
          }}
        >
          {[...companyLogos, ...companyLogos].map(({ src, name }, i) => (
            <figure
              key={name + i}
              className={`group relative min-w-[150px] sm:min-w-[180px] mx-8 flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 ease-out ${className}`}
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00bcd4]/30 to-[#1de9b6]/30 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

              {/* Logo Container */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg ring-1 ring-white/30 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,188,212,0.4)]">
                <img
                  src={src}
                  alt={`${name} logo`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Caption */}
              <figcaption className="mt-3 px-4 py-1.5 bg-gradient-to-r from-[#00bcd4]/20 to-[#1de9b6]/20 text-[#0d3e39] text-sm font-semibold rounded-full backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:from-[#00bcd4]/30 group-hover:to-[#1de9b6]/30">
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
