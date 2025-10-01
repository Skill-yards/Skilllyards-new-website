import React, { useState, useEffect } from "react";

const icons = {
  fullstack: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h4M7 17h10" />
    </svg>
  ),
  marketing: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10l12-5v14l-12-5v-4z" />
      <path d="M16 7l4-2v14l-4-2" />
      <path d="M7 15v4" />
    </svg>
  ),
  analytics: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <rect x="5" y="11" width="3" height="7" rx="1" />
      <rect x="10.5" y="7" width="3" height="11" rx="1" />
      <rect x="16" y="4" width="3" height="14" rx="1" />
    </svg>
  ),
};

export default function SkillyardsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12 md:pb-16 bg-gray-100">
      {/* Background */}
      <div 
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{
          background: 'rgb(209, 208, 208)', 
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:grid-cols-3 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms ease-out, transform 600ms ease-out',
            transitionDelay: '200ms'
          }}
        >
          <TrackPanel
            icon={icons.fullstack}
            accent="indigo"
            title="Master Full Stack Development"
            desc="Build dynamic web apps from frontend to backend with real‑world projects."
            href="#fullstack"
          />

          <TrackPanel
            icon={icons.marketing}
            accent="emerald"
            title="Excel in Digital Marketing"
            desc="Grow brands with SEO, content, ads, and analytics to drive measurable ROI."
            href="#marketing"
          />

          <TrackPanel
            icon={icons.analytics}
            accent="amber"
            title="Launch Data Analytics Career"
            desc="Analyze, visualize, and communicate insights using modern data tools."
            href="#analytics"
          />
        </div>
      </div>
    </section>
  );
}

function TrackPanel({ icon, title, desc, href, accent = "indigo" }) {
  const [learnMoreHovered, setLearnMoreHovered] = useState(false);

  const accentClasses = {
    indigo: {
      pill: "bg-indigo-50 text-indigo-700",
      icon: "text-indigo-600",
      cta: "bg-indigo-600 hover:bg-indigo-700",
      underline: "bg-indigo-300",
      ring: "ring-indigo-200/60"
    },
    emerald: {
      pill: "bg-emerald-50 text-emerald-700",
      icon: "text-emerald-600",
      cta: "bg-emerald-600 hover:bg-emerald-700",
      underline: "bg-emerald-300",
      ring: "ring-emerald-200/60"
    },
    amber: {
      pill: "bg-amber-50 text-amber-800",
      icon: "text-amber-600",
      cta: "bg-amber-600 hover:bg-amber-700",
      underline: "bg-amber-300",
      ring: "ring-amber-200/60"
    }
  }[accent];

  const accentNums = {
    indigo: "79 70 229",
    emerald: "5 150 105",
    amber: "217 119 6"
  }[accent];

  const blobOpacities = {
    indigo: 0.35,
    emerald: 0.35,
    amber: 0.4
  }[accent];

  const blobGradient = `radial-gradient(60px 60px at 50% 50%, rgba(${accentNums}, ${blobOpacities}), transparent 70%)`;

  const underlineColors = {
    indigo: "rgb(165 180 252)",
    emerald: "rgb(110 231 183)",
    amber: "rgb(252 211 77)"
  }[accent];

  return (
    <article
      className={`group relative isolate overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 transition-all duration-300 shadow-sm ${accentClasses.ring} hover:shadow-lg`}
    >
      {/* Background Blob */}
      <div
        className="pointer-events-none absolute -right-8 -top-12 sm:-right-10 sm:-top-16 h-24 w-24 sm:h-32 sm:w-32 rounded-full opacity-20 blur-2xl"
        aria-hidden="true"
        style={{ background: blobGradient }}
      />

      {/* Pill with Icon */}
      <div
        className={`mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${accentClasses.pill}`}
      >
        <span className={accentClasses.icon}>{icon}</span>
        <span>Core Track</span>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-slate-900 leading-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
        {desc}
      </p>

      {/* CTA Buttons */}
      <div className="mt-4 sm:mt-6 flex flex-col xs:flex-row items-start xs:items-center gap-3">
        <a
          href={href}
          className={`inline-flex select-none items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 active:opacity-90 transition-colors duration-200 ${accentClasses.cta} w-full xs:w-auto text-center`}
        >
          Explore Courses
          <svg
            viewBox="0 0 24 24"
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href={href}
          className="relative inline-flex items-center text-sm font-medium focus:outline-none px-1 py-1 xs:py-0"
          style={{
            color: learnMoreHovered ? 'rgb(15 23 42)' : 'rgb(30 41 59)',
            transition: 'color 200ms ease-out'
          }}
          onMouseEnter={() => setLearnMoreHovered(true)}
          onMouseLeave={() => setLearnMoreHovered(false)}
          onFocus={() => setLearnMoreHovered(true)}
          onBlur={() => setLearnMoreHovered(false)}
        >
          Learn more
          <span
            className="absolute inset-x-0 -bottom-0.5 h-0.5"
            style={{
              backgroundColor: underlineColors,
              transform: learnMoreHovered ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: learnMoreHovered ? 'left' : 'right',
              transition: 'transform 200ms ease-out'
            }}
          />
        </a>
      </div>
    </article>
  );
}