import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UpcomingBatches = ({ className }) => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://your-api-endpoint.com/upcoming-batches",
        );
        const data = await res.json();
        setBatches(data);
      } catch (error) {
        console.error("Failed to load batches:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (batches.length === 0) return;

    const cards = gsap.utils.toArray(".batch-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, [batches]);

  return (
    <section className={`relative py-20 px-6 overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 via-indigo-50 to-yellow-50">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-200/30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800 drop-shadow-md">
        Upcoming Batches & Events
      </h2>

      {batches.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Loading upcoming batches...
        </p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {batches.map((batch) => (
            <div
              key={batch.title}
              className="batch-card bg-white/70 backdrop-blur-lg rounded-2xl shadow-md p-6 flex flex-col border border-purple-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden rounded-xl mb-5">
                <img
                  src={batch.image}
                  alt={batch.title}
                  className="w-full h-48 object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-700/30 to-transparent rounded-xl"></div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {batch.title}
              </h3>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-baseline gap-2">
                  <span className="inline-block px-3 py-1 rounded-full font-semibold text-xs bg-purple-100 text-purple-700">
                    Next Batch
                  </span>
                  <span className="ml-1 text-sm text-gray-700 font-medium">
                    {batch.startDate}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="inline-block px-3 py-1 rounded-full font-semibold text-xs bg-purple-200 text-purple-800">
                    Demo Class
                  </span>
                  <span className="ml-1 text-sm text-gray-700 font-medium">
                    {batch.demo}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="inline-block px-3 py-1 rounded-full font-semibold text-xs bg-indigo-100 text-indigo-800">
                    Workshop
                  </span>
                  <span className="ml-1 text-sm text-gray-700 font-medium">
                    {batch.workshop}
                  </span>
                </div>
              </div>

              <a
                href={batch.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center hover:scale-105"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingBatches;
