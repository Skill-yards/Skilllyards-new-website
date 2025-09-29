import React, { useState } from "react";
import { Phone } from "lucide-react";

const Marquee = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="marquee-wrapper overflow-hidden whitespace-nowrap flex text-center ml-80 mr-80 mt-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="marquee animate-marquee inline-block min-w-full"
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        <Phone className=" mr-2 inline animate-bounce text-yellow-300" /><a href=""> {text}</a>
      </div>
    </div>
  );
};

export default Marquee;
