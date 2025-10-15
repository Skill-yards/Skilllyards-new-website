import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Users, TrendingUp, Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StatItem({
  value,
  label,
  icon,
  suffix = "+",
  prefix = "",
  isPercent = false,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let start = 0;
    const duration = 2000;
    const step = Math.max(20, Math.floor(duration / value));

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= value) {
            clearInterval(timer);
          }
        }, step);

        gsap.fromTo(
          el,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      },
    });

    return () => trigger.kill();
  }, [value]);

  return (
    <div
      ref={ref}
      className="group backdrop-blur-lg bg-gradient-to-b from-white/80 to-sky-50/70 border border-cyan-300/60 
      rounded-2xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.2)] 
      py-6 px-4 min-h-[130px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] 
      hover:scale-105"
    >
      <span className="mb-2 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-transparent bg-clip-text flex items-center gap-1 drop-shadow-sm">
        {prefix}
        {count}
        {isPercent ? "%" : suffix}
      </p>
      <p className="text-blue-900 text-sm mt-1 font-semibold tracking-wide">
        {label}
      </p>
    </div>
  );
}

function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".stat-grid",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: 100,
      label: "Students Placed",
      icon: <Users size={30} />,
    },
    {
      value: 98,
      label: "Success Rate",
      icon: <BadgeCheck size={30} />,
      suffix: "",
      isPercent: true,
    },
    {
      value: 8,
      label: "Average Salary (LPA)",
      icon: <TrendingUp size={30} />,
      prefix: "₹",
      suffix: "L",
    },
    {
      value: 150,
      label: "Partnered Companies",
      icon: <Briefcase size={30} />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-sky-100 via-cyan-100 to-blue-100 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-20 w-[300px] h-[300px] bg-cyan-300/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-300/40 blur-3xl rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-2xl border border-cyan-300/40 rounded-3xl shadow-xl p-8 sm:p-12">
          <h2 className="stat-title text-center mb-10 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-700 bg-clip-text text-transparent drop-shadow-sm">
            Skillyards: Proven Impact in EdTech
          </h2>

          <div className="stat-grid grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
