import React, { useState, useEffect } from "react";

const icons = {
  fullstack: (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
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
      className="h-10 w-10"
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
      className="h-10 w-10"
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
    <section className="relative overflow-hidden min-h-screen">
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'rgb(209, 208, 208)', 
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 mt-8 sm:mt-12"
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
      className={`group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8 transition-shadow duration-300 shadow-sm ${accentClasses.ring} group-hover:shadow-lg`}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-16 h-32 w-32 rounded-full opacity-20 blur-2xl"
        aria-hidden="true"
        style={{ background: blobGradient }}
      />

      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${accentClasses.pill}`}
      >
        <span className={accentClasses.icon}>{icon}</span>
        <span>Core Track</span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-slate-600">
        {desc}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={href}
          className={`inline-flex select-none items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 active:opacity-90 ${accentClasses.cta}`}
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
          className="relative inline-flex items-center text-sm font-medium focus:outline-none"
          style={{
            color: learnMoreHovered ? 'rgb(15 23 42)' : 'rgb(30 41 59)',
            transition: 'color 200ms ease-out'
          }}
          onMouseEnter={() => setLearnMoreHovered(true)}
          onMouseLeave={() => setLearnMoreHovered(false)}
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