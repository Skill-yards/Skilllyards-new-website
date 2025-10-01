import React, { useState } from "react";
import { Phone } from "lucide-react";

const Marquee = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="marquee-wrapper relative overflow-hidden whitespace-nowrap flex text-center ml-80 mr-80 mt-2 rounded-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="marquee animate-marquee inline-block min-w-full rounded-full border-none"
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        <Phone className="mr-2 inline animate-bounce text-yellow-300" />
        <a href="">{text}</a>
      </div>
      
      
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-md z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent backdrop-blur-md z-10 pointer-events-none"></div>
    </div>
  );
};

export default Marquee;
