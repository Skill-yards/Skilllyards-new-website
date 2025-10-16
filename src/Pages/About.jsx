import React from "react";
import { Play } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "1st", label: "IT training center in Agra" },
    { number: "50+", label: "students graduated" },
    { number: "200+", label: "corporate hiring partners" },
    { number: "100%", label: "placement support for eligible students" },
  ];

  const features = [
    "Project-based, industry-driven curriculum",
    "Work/study degree programs with in-house training",
    "Guaranteed job opportunities post completion",
    "Expert instructors with real client experience",
    "Focus on modern IT, programming, and soft skills",
    "Active clubs for language, public speaking, and leadership",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#10151f] via-[#192233] to-[#0c0c0c] text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md mt-6">
            Shaping IT careers in Agra—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Skillyards Where learning meets opportunity
            </span>
          </h1>
        </div>

        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-xl mx-auto max-w-3xl">
          <video
            className="w-full h-[300px] md:h-[420px] object-cover rounded-3xl border-4 border-orange-400/40 shadow"
            controls
            autoPlay
            muted
            poster="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Practical learning,
              <span className="text-orange-400"> real results</span>
              <br />
              <span className="font-medium text-blue-200">
                Your career starts here
              </span>
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-200 text-base"
                >
                  <span className="mr-4 mt-2 text-orange-400 font-black text-xl">
                    •
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Story */}
          <div>
            <div className="bg-white/10 border-l-4 border-orange-400 rounded-xl p-8 shadow-lg space-y-4 text-gray-200 text-base">
              <h3 className="text-xl font-extrabold mb-2 text-orange-300">
                How it started
              </h3>
              <p>
                Founded in Agra in 2022, Skillyards was born out of a simple
                mission: to bridge the gap between education and employability.
                Our vision is to empower local youth with real-world IT
                skills—coding, teamwork, and communication—that companies
                genuinely value. Instead of rote theory, we deliver hands-on
                learning through active mentorship, client projects, and
                industry-aligned coursework.
              </p>
              <p>
                Skillyards is proud to be Agra’s pioneer in structured
                work/study degree programs, collaborating with regional
                employers to guarantee placement support for every successful
                student. Our unique clubs focus on soft skills so graduates
                leave not just job-ready but future-ready.
              </p>
              <p className="italic text-orange-200">—Skillyards Team</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-tr from-blue-900/80 to-blue-700/70 border-l-4 border-orange-400 pl-7 pr-6 py-7 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black mb-1 text-orange-300">
                {stat.number}
              </div>
              <div className="text-gray-200 text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
