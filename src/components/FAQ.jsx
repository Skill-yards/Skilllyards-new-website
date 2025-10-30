import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Does Skillyards guarantee internships or placements?",
    a: "Yes! Every enrolled learner gets a guaranteed internship or placement opportunity through Skillyards’ network. We focus on real growth and industry connection, not just certificates.",
  },
  {
    q: "Do I need coding experience to join?",
    a: "Not at all. Our programs are designed for both beginners and graduates. You start from the fundamentals and gradually move into real-world projects guided by mentors.",
  },
  {
    q: "What kind of projects will I build?",
    a: "You’ll work on live, industry-grade projects — from building full-stack apps to deploying real products. Every project adds to your portfolio and showcases your practical skills.",
  },
  {
    q: "How are classes conducted?",
    a: "All sessions are live and interactive. You’ll have access to mentor Q&As, recorded sessions, and 1:1 doubt support when needed.",
  },
  {
    q: "Will I get a certificate after completion?",
    a: "Yes. On successful completion, you’ll receive a verified certificate that reflects your specialization and project experience.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 via-white to-sky-100 overflow-hidden py-24 px-6">
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-sky-200/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-indigo-200/40 rounded-full blur-[140px]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-14 text-lg max-w-2xl mx-auto"
        >
          Everything you need to know about Skillyards programs and learning experience.
        </motion.p>

        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg transition-all duration-300 ${
                  isOpen ? "ring-2 ring-sky-400/70 shadow-sky-200/30" : "hover:shadow-sky-100/30"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900">{item.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-500"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6 text-gray-700 text-base leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-gray-700 text-lg mb-3">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;