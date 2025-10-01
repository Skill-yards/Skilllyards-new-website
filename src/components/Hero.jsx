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
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Subtle background gradient */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, rgb(248 250 252), rgb(255 255 255), rgb(241 245 249))'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        
        

        {/* Three responsive panels */}
        <div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3"
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
  const [isHovered, setIsHovered] = useState(false);
  const [learnMoreHovered, setLearnMoreHovered] = useState(false);

  // Accent color configurations
  const accents = {
    indigo: {
      ring: "rgb(199 210 254 / 0.6)",
      iconColor: "rgb(79 70 229)",
      pillBg: "rgb(238 242 255)",
      pillText: "rgb(67 56 202)",
      ctaBg: "rgb(79 70 229)",
      ctaBgHover: "rgb(67 56 202)",
      underlineColor: "rgb(165 180 252)",
      shadowColor: "rgb(238 242 255)",
      blobGradient: "radial-gradient(60px 60px at 50% 50%, rgba(79,70,229,0.35), transparent 70%)"
    },
    emerald: {
      ring: "rgb(167 243 208 / 0.6)",
      iconColor: "rgb(5 150 105)",
      pillBg: "rgb(236 253 245)",
      pillText: "rgb(4 120 87)",
      ctaBg: "rgb(5 150 105)",
      ctaBgHover: "rgb(4 120 87)",
      underlineColor: "rgb(110 231 183)",
      shadowColor: "rgb(236 253 245)",
      blobGradient: "radial-gradient(60px 60px at 50% 50%, rgba(5,150,105,0.35), transparent 70%)"
    },
    amber: {
      ring: "rgb(254 215 170 / 0.6)",
      iconColor: "rgb(217 119 6)",
      pillBg: "rgb(255 251 235)",
      pillText: "rgb(146 64 14)",
      ctaBg: "rgb(217 119 6)",
      ctaBgHover: "rgb(180 83 9)",
      underlineColor: "rgb(252 211 77)",
      shadowColor: "rgb(255 251 235)",
      blobGradient: "radial-gradient(60px 60px at 50% 50%, rgba(217,119,6,0.4), transparent 70%)"
    },
  }[accent];

  return (
    <article
      className="group relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 lg:p-8 transition-shadow shadow-sm"
      style={{
        boxShadow: isHovered 
          ? `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px ${accents.ring}`
          : `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 0 0 1px ${accents.ring}`,
        transition: 'box-shadow 300ms ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative blob */}
      <div
        className="pointer-events-none absolute -right-10 -top-16 h-32 w-32 rounded-full opacity-20 blur-2xl"
        aria-hidden="true"
        style={{ background: accents.blobGradient }}
      />

      {/* Pill label */}
      <div
        className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
        style={{
          backgroundColor: accents.pillBg,
          color: accents.pillText
        }}
      >
        <span style={{ color: accents.iconColor }}>{icon}</span>
        <span>Core Track</span>
      </div>

      {/* Title & description */}
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-slate-600">
        {desc}
      </p>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-3">
        <a
          href={href}
          className="inline-flex select-none items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 active:opacity-90"
          style={{
            backgroundColor: accents.ctaBg,
            transition: 'background-color 200ms ease-out'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = accents.ctaBgHover}
          onMouseLeave={(e) => e.target.style.backgroundColor = accents.ctaBg}
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
          className="relative inline-flex items-center text-sm font-medium text-slate-800 focus:outline-none"
          style={{
            color: learnMoreHovered ? 'rgb(15 23 42)' : 'rgb(30 41 59)',
            transition: 'color 200ms ease-out'
          }}
          onMouseEnter={() => setLearnMoreHovered(true)}
          onMouseLeave={() => setLearnMoreHovered(false)}
        >
          Learn more
          {/* Animated underline using pseudo-element simulation */}
          <span
            className="absolute inset-x-0 -bottom-0.5 h-0.5"
            style={{
              backgroundColor: accents.underlineColor,
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
