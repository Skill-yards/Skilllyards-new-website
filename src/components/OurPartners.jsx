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
    className='relative py-20 overflow-hidden
      bg-gradient-to-b from-[#05070f] via-[#0b1b3f] to-[#0b1b3f]
      '
  >
    

    <div className={`relative z-10 text-center ${className} `}>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white tracking-tight">
        Our Placement Partners
      </h2>
      <p className="text-lg text-slate-200/90 max-w-xl mx-auto">
        We proudly collaborate with leading tech organizations driving innovation.
      </p>
      <div className="w-24 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-6 mb-12 shadow-lg" />

      
      <div className={`relative overflow-hidden ${className}`}>
        <div
          className="flex items-center p-12"
          style={{
            width: "200%",
            animation: "scroll 25s linear infinite",
          }}
        >
          {[...companyLogos, ...companyLogos].map(({ src, name }, i) => (
            <figure
              key={name + i}
              className="group relative min-w-[150px] sm:min-w-[180px] mx-8 flex flex-col items-center justify-center transition-transform duration-300 ease-out hover:scale-110"
            >
              {/* Logo Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg ring-1 ring-white/40">
                <img
                  src={src}
                  alt={`${name} logo`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            
              <figcaption className="mt-3 px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full backdrop-blur-sm shadow-sm">
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