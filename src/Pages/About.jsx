import React from "react";
import { Play } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "143,000+", label: "paying customer countries" },
    { number: "$100B+", label: "revenue earned by Klaviyo users to date" },
    { number: "1,500+", label: "team members globally" },
    { number: "60B", label: "data points processed daily" },
  ];

  const features = [
    "Activate your data in real-time to deliver larger, personalized and better-targeted campaigns",
    "Connect with customers through a seamless email, SMS, mobile push, and web experiences",
    "Scale your marketing with built-in AI, automation, predictive analytics, and benchmarks",
    "Grow your audience, keep customer lifetime value, and over your brand voice",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
            about us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            143,000+ companies use Klaviyo to power smarter
            <br />
            digital relationships
          </h1>
        </div>

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16 group cursor-pointer">
          <img
            src="/api/placeholder/1200/600"
            alt="Team collaboration"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
          <button className="absolute left-8 bottom-8 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Features */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Intelligent marketing
              <br />
              automation powered by
              <br />
              customer data
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-300 text-sm leading-relaxed"
                >
                  <span className="mr-3 mt-1.5 flex-shrink-0">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Story */}
          <div>
            <h3 className="text-xl font-bold mb-6">How it started</h3>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                As the first IT training center in Agra, Skillyards is committed
                to building and making industry-ready professionals out of local
                talent. Our extensive work/study degree programs offer unique
                in-house training with guaranteed job opportunities post
                completion. We teach skills that various employers require.
                Unlike traditional learning, we teach through modern,
                industry-driven curriculum. Expert instructors guide students on
                live client projects where they learn through doing. With Club,
                students go beyond learning languages and public speaking. They
                acquire and develop these soft skills ensuring their holistic
                growth. Change the narrative of Agra's IT landscape by joining
                Skillyards. We equip you with confidence and real-world
                expertise.
              </p>
              <p className="italic">—Andreas Bialecki, Klaviyo co-founder</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-l-2 border-orange-500 pl-6 py-4 hover:border-orange-400 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
