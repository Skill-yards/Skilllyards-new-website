import { useMemo } from "react";
import { COLORS } from "./colors";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { VideoPlayer } from "./VideoPlayer";
import { AllReviewsModal } from "./AllReviewsModal";
import girish from "../../assets/Students/girish.png";
import sumit from "../../assets/Students/sumit.webp";
import rajat from "../../assets/Students/rajat.webp";
import tushar from "../../assets/Students/tushar.webp";
import ayush from "../../assets/Students/ayush.webp";
import sachin from "../../assets/Students/sachin.webp";

export default function WhatStudentsSaid() {
  const reviews = useMemo(
    () => [
      {
        id: 1,
        name: "Girish Kumar",
        position: "Full-Stack Developer",
        text: "The full-stack course at Skillyards prepared me thoroughly for the industry. From writing clean code to understanding system design, I gained hands-on experience that helped me get placed at SN Digitech.",
        photo: girish,
        rating: 5,
      },
      {
        id: 2,
        name: "Sumit Kumar",
        position: "Full-Stack Developer",
        text: "Before joining Skillyards, I had no prior knowledge of coding. Over the past months, I've learned HTML, CSS, and JavaScript while improving my communication and confidence.",
        photo: sumit,
        rating: 4,
      },
      {
        id: 3,
        name: "Rajat Jha",
        position: "Trainee Software Engineer",
        text: "I started my journey with no prior knowledge of coding. After six months of training, I successfully built 5 to 6 dynamic websites and completed several hands-on projects. Throughout this experience, my communication skills also improved significantly.",
        photo: rajat,
        rating: 4.5,
      },
      {
        id: 4,
        name: "Tushar Shukla",
        position: "Frontend Developer",
        text: "When I joined Skillyards, I had no prior knowledge of coding. Six months later, I’ve built 5 to 6 dynamic websites and completed various JavaScript projects covering topics like functions, loops, setTimeout, and more. The lessons were clear and easy to follow, and the projects provided valuable real-world experience. The support from the team has been excellent throughout the journey.",
        photo: tushar,
        rating: 5,
      },
      {
        id: 5,
        name: "Ayush Kumar",
        position: "Backend Developer",
        text: "Skillyards gave me the skills, confidence, and real-world exposure I needed to become a job-ready full-stack developer. The structured curriculum, regular guidance, and industry-level project work helped me secure a position at a leading company. I’m truly grateful for the mentorship and growth I experienced here.",
        photo: ayush,
        rating: 5,
      },
      {
        id: 6,
        name: "Sachin Kumar",
        position: "Frontend Developer",
        text: "Thanks to Skillyards, I’ve transformed from a beginner to a confident full-stack developer. The practical training, updated curriculum, and continuous performance tracking helped me stay on the right path. I’m excited to start my career, and I credit this achievement to the incredible support from Skillyards.",
        photo: sachin,
        rating: 5,
      },
    ],
    [],
  );

  const videoIds = useMemo(
    () => ["e2Rutd_ZIoA", "oKJ8kzPf_Ds", "vphzE_WqcPc"],
    [],
  );

  return (
    <section className="py-12 px-4 lg:px-8" style={{ background: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2
            className="font-serif font-bold text-2xl md:text-3xl tracking-tight "
            style={{ color: COLORS.text }}
          >
            Hear from Our Students
          </h2>
          <div
            className="h-1 w-24 mx-auto mt-3 rounded-full"
            style={{ background: COLORS.accent }}
          />
          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: COLORS.subtext }}
          >
            Real outcomes, real stories , testimonials from our learners.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[68%]">
            <TestimonialCarousel items={reviews} />

            <AllReviewsModal reviews={reviews} />
          </div>

          <div className="w-full lg:w-[32%] lg:self-start">
            <VideoPlayer videoIds={videoIds} sticky />
          </div>
        </div>
      </div>
    </section>
  );
}
