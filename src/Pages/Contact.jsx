import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Mail, Phone, CheckCircle2, AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const refs = useRef({});
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [err, setErr] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (err[name]) setErr((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name?.trim()) e.name = "Name is required";
    else if (form.name.length < 2) e.name = "At least 2 characters";
    if (!form.email?.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.details?.trim()) e.details = "Project details required";
    else if (form.details.length < 10) e.details = "Min 10 characters";
    setErr(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSuccess(true);
    setTimeout(() => {
      setForm({ name: "", email: "", details: "" });
      setSuccess(false);
    }, 3000);
    setLoading(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(refs.current.bg, {
        yPercent: -15,
        scale: 1.05,
        ease: "none",
        scrollTrigger: { trigger: refs.current.container, scrub: 1 },
      });

      gsap.fromTo(
        refs.current.left.children,
        { opacity: 0, x: -80, z: -50, rotateY: 10 },
        {
          opacity: 1,
          x: 0,
          z: 0,
          rotateY: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: { trigger: refs.current.left, start: "top 80%" },
        }
      );

      gsap.fromTo(
        refs.current.form,
        { opacity: 0, scale: 0.95, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: refs.current.form, start: "top 85%" },
        }
      );

      gsap.fromTo(
        refs.current.quote,
        { opacity: 0, y: 50, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: refs.current.quote, start: "top 90%" },
        }
      );

      if (refs.current.button) {
        refs.current.button.addEventListener("mouseenter", () => {
          gsap.to(refs.current.button, {
            scale: 1.05,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          });
        });
      }
    }, refs);
    return () => ctx.revert();
  }, []);

  const Field = ({ name, label, type = "text" }) => (
    <div className="relative" ref={(el) => (refs.current[name] = el)}>
      {type === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          value={form[name]}
          onChange={handleChange}
          placeholder=" "
          className="peer w-full bg-white/5 border-2 border-gray-600/50 text-white placeholder-transparent focus:border-blue-400 focus:bg-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-lg outline-none transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder=" "
          className="peer w-full bg-white/5 border-2 border-gray-600/50 text-white placeholder-transparent focus:border-blue-400 focus:bg-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-lg outline-none transition-all"
        />
      )}
      <label className="absolute left-4 top-2 text-gray-400 text-sm md:text-base transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
        {label}
      </label>
      {err[name] && (
        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" /> {err[name]}
        </p>
      )}
    </div>
  );

  const Info = ({ Icon, title, text }) => (
    <div className="flex items-start space-x-4 md:space-x-6 group cursor-pointer">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors mt-1">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
      </div>
      <div>
        <h3 className="text-gray-400 uppercase text-xs md:text-sm tracking-widest font-semibold mb-1 md:mb-2">{title}</h3>
        <p className="text-white text-sm md:text-lg font-medium hover:text-blue-300 transition-colors">{text}</p>
      </div>
    </div>
  );

  return (
    <div ref={(el) => (refs.current.container = el)} className="min-h-screen relative overflow-hidden">
      <div
        ref={(el) => (refs.current.bg = el)}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1659277424172-bf4e806d339e?q=80&w=1188&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
      {/* Left */}
      <div className="flex-1 flex items-center justify-center flex-wrap p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    <div
      ref={(el) => (refs.current.left = el)}
      className="max-w-2xl w-full space-y-8 mt-6 md:-mt-8"
    >   <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-full mt-8 md:mt-8">
          Have a project<br />in mind?
        </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-lg">
            Let's create something extraordinary together. Your vision, our expertise - perfect synergy.
          </p>
        </div>
        <div className="space-y-4 md:space-y-8 pt-4 md:pt-8">
          <Info Icon={MapPin} title="ADDRESS" text="Agra, India" />
          <Info Icon={Mail} title="EMAIL" text="info@skillyards.com" />
          <Info Icon={Phone} title="PHONE" text="+91-99999-99999" />
        </div>
      </div>
      </div>


        {/* Right */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="w-full max-w-lg">
            <div
              ref={(el) => (refs.current.form = el)}
              className="w-full bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 mt-8 md:mt-12 shadow-2xl border border-white/20"
            >
              {success ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Message Sent!</h3>
                  <p className="text-gray-300 text-sm md:text-base">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center">Start Your Project</h2>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <Field name="name" label="Your Name" />
                    <Field name="email" label="Email Address" type="email" />
                    <Field name="details" label="Project Details" type="textarea" />
                    <button
                      ref={(el) => (refs.current.button = el)}
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3 md:py-4 px-6 md:px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                        loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                      } text-white shadow-lg hover:shadow-xl`}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" /> SENDING...
                        </div>
                      ) : (
                        "START YOUR PROJECT"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
            <div ref={(el) => (refs.current.quote = el)} className="text-center mt-6 md:mt-12 opacity-0">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl italic font-light">
                "Let's build something awesome together."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
