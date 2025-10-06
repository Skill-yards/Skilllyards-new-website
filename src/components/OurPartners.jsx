import forelsket from '../assets/companies/forelsket.png';
import s7c from '../assets/companies/s7c.png';
import sndigitech from '../assets/companies/sndigitech.webp';
import webmobril from '../assets/companies/webmobril.png';
import attrix from '../assets/companies/attrix1.svg';
import Infosys from '../assets/companies/infosys.webp';
import Tcl from '../assets/companies/tcl.webp';
import genpact from '../assets/companies/genpact.webp';

const companyLogos = [
  { src: forelsket, name: 'Forelsket' },
  { src: s7c, name: 'S7C' },
  { src: sndigitech, name: 'SN Digitech' },
  { src: webmobril, name: 'Webmobril' },
  { src: attrix, name: 'Attrix' },
  { src: Infosys, name: 'Infosys' },
  { src: Tcl, name: 'TCL' },
  { src: genpact, name: 'Genpact' },
];

const OurPartner = () => (
  <section className="py-16 overflow-hidden bg-[#d8d4c5]">
    <div className="relative z-10">
      <h2 className="text-4xl font-extrabold text-center mb-2 text-[#0a2259] tracking-tight">
        Our Placement Partners
      </h2>
      <p className="text-center text-lg text-gray-600 mb-4">
        Connecting students with industry leaders
      </p>
      <div className="w-32 h-1 bg-indigo-600 rounded mx-auto mb-10" />
      <div className="marquee">
        <div className="marquee-track">
          {[...companyLogos, ...companyLogos].map(({ src, name }, i) => (
            <figure
              key={name + i}
              className="group min-w-[150px] mx-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-110"
              tabIndex={0}
            >
              <div className="bg-[#f8fafd] rounded-2xl shadow-lg ring-1 ring-indigo-100 p-4 group-hover:shadow-indigo-400 transition-shadow duration-300">
                <img
                  src={src}
                  alt={`${name} logo`}
                  className="w-24 h-24 object-contain rounded-xl drop-shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${(i % companyLogos.length) * 0.15}s` }}
                />
              </div>
              <figcaption className="mt-3 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full shadow group-hover:bg-indigo-200 group-hover:text-indigo-900 transition-colors duration-200">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurPartner;
