import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const features = [
  "Industry-Relevant Courses: Learn Full-Stack Development, Data Analytics, and Advanced Digital Marketing designed for today’s job market.",
  "Hands-On Projects: Build real-world projects to develop practical, in-demand skills.",
  "Small Batch Mentorship: Personalized guidance with small batch sizes for maximum learning.",
  "Expert Instructors: Mentors with real industry experience dedicated to your success.",
  "Flexible Learning: Online and offline classes that fit your schedule and lifestyle.",
  "Agra Local Advantage: Join a community-focused startup in Agra, building local and global connections.",
  "Growing Career Network: Access workshops, hackathons, and networking events.",
  "Community-First Culture: Collaborative, energetic environment for learning and growth.",
  "Affordable, Transparent Fees: Quality education at startup-friendly pricing.",
  "Early Adopter Benefits: Exclusive offers and chances to help shape Skillyards as a founding learner.",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

const WhyChooseSkillyards = () => (
  <section className="py-16 px-6 bg-gradient-to-tr from-orange-200 via-yellow-100 to-blue-100 rounded-3xl shadow-xl">
    {/* Header */}
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        Why Choose <span className="text-orange-500">Skillyards</span>?
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        Discover what makes us the most learner-friendly tech community in Agra.
      </motion.p>
    </div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {features.map((text, idx) => (
        <motion.div
          key={idx}
          className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={idx}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <CheckCircleIcon className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
          <p className="text-gray-800">{text}</p>
        </motion.div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="flex justify-center mt-12">
      <motion.a
        href="/contact"
        className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        Book a Free Demo Class
      </motion.a>
    </div>
  </section>
);

export default WhyChooseSkillyards;
