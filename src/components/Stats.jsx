import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Users, TrendingUp, Briefcase } from "lucide-react"; // run: npm i lucide-react

function StatItem({
  value,
  label,
  icon,
  suffix = "+",
  prefix = "",
  isPercent = false,
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 2000;
          const step = Math.max(20, Math.floor(duration / value));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) {
              clearInterval(timer);
              setHasAnimated(true);
            }
          }, step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="backdrop-blur-lg bg-white/5 border border-white/25 rounded-2xl flex flex-col items-center justify-center shadow-inner py-6 px-4 min-h-[110px] transition-all duration-300"
    >
      <span className="mb-2">{icon}</span>
      <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#f9bf1e] flex items-center gap-1 drop-shadow">
        {prefix}
        {hasAnimated ? value : count}
        {isPercent ? "%" : suffix}
      </p>
      <p className="text-[#ededed] text-xs sm:text-sm mt-1">{label}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    {
      value: 100,
      label: "Students Placed",
      icon: <Users size={30} className="text-[#f9bf1e]" />,
    },
    {
      value: 98,
      label: "Success Rate",
      icon: <BadgeCheck size={30} className="text-[#19db76]" />,
      suffix: "",
      isPercent: true,
    },
    {
      value: 8,
      label: "Average Salary (LPA)",
      icon: <TrendingUp size={30} className="text-[#2979ff]" />,
      prefix: "₹",
      suffix: "L",
    },
    {
      value: 150,
      label: "Partnered Companies",
      icon: <Briefcase size={30} className="text-[#ff5277]" />,
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-[#101432] via-[#223b7c] to-[#101432]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/[0.10] rounded-3xl shadow-2xl backdrop-blur-2xl pt-8 pb-8 px-4 sm:px-8">
          <h2 className="text-center mb-6 text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
            Skillyards: Proven Impact in EdTech
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
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
