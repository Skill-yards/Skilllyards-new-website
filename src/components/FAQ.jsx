
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question:
      "Does Skillyards guarantee internships and job placements after program completion?",
    answer:
      "Yes, Skillyards provides a 100% placement guarantee and paid internships as part of select programs. Students are placed in roles with leading tech companies, supported by in-house job opportunities and attractive packages, ensuring a robust start to your career.",
  },
  {
    question:
      "What practical experience will I gain during a developer training program at Skillyards?",
    answer:
      "Skillyards emphasizes project-based learning, with students working on real client and live industry projects. You also benefit from hackathons, open-source contributions, and mentorship, building both your portfolio and job-ready skills before graduation.",
  },
  {
    question: "Are there networking and professional development sessions for students?",
    answer:
      "Absolutely. Through the Skillyards Club, students engage in networking events, personality development workshops, guest lectures, and leadership sessions, often led by industry experts to help them grow personally and professionally.",
  },
  {
    question:
      "Who can enroll in Skillyards programs—and do I need technical experience to start?",
    answer:
      "Programs are designed for beginners and graduates alike. Curriculum is beginner-friendly, comprehensive, and tailored to both those with and without prior experience so anyone interested in tech and software development can start building skills and advancing their careers.",
  },
];

const FAQ = () => (
  <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full mb-10"></div>

      <Accordion
        type="multiple"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
      >
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="
              bg-white 
              border 
              border-gray-200 
              rounded-2xl 
              shadow-md 
              transition-all 
              duration-300 
              hover:shadow-lg 
              data-[state=open]:border-teal-500 
              data-[state=open]:shadow-lg
            "
          >
            <AccordionTrigger
              className="
                flex 
                justify-between 
                items-center 
                p-6 
                text-left 
                w-full 
                cursor-pointer 
                text-gray-900 
                font-medium 
                text-lg 
                transition-colors 
                rounded-2xl
                hover:bg-teal-50 
                hover:no-underline 
                focus:outline-none 
                focus:ring-2 
                focus:ring-teal-400
              "
            >
              <span className="text-gray-900">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
