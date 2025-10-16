import fullstack from "../assets/course/image1.png";
import react from "../assets/course/image.png";
import sql from "../assets/course/image3.png";
const upcomingBatches = [
  {
    title: "Full Stack Developer Bootcamp",
    startDate: "October 18, 2025",
    demo: "October 15, 2025",
    ctaLink: "/register-fullstack",
    workshop: "Building MERN Projects - Free Webinar (Oct 20)",
    image: fullstack,
  },
  {
    title: "Frontend with React.js",
    startDate: "November 2, 2025",
    demo: "October 28, 2025",
    ctaLink: "/register-react",
    workshop: "UI/UX Crash Course : Free Workshop for Beginners",
    image: react,
  },
  {
    title: "SQL & Database Foundations",
    startDate: "October 30, 2025",
    demo: "October 27, 2025",
    ctaLink: "/register-sql",
    workshop: "Databases for Beginners - Free Webinar with Q&A (Nov 1)",
    image: sql,
  },
];

const purpleConfig = {
  from: "from-yellow-50",
  to: "to-yellow-100",
  border: "border-purple-200",
  btn: "bg-purple-600 hover:bg-purple-700",
  accent: "bg-purple-100 text-purple-800",
};

const UpcomingBatches = ({ className }) => {
  return (
    <section
      className={`max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-800 drop-shadow-lg">
        Upcoming Batches & Events
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {upcomingBatches.map((batch) => (
          <div
            key={batch.title}
            className={`bg-gradient-to-tr ${purpleConfig.from} ${purpleConfig.to} rounded-2xl shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-2 ${purpleConfig.border} border border-gray-100 h-full cursor-pointer`}
          >
            <img
              src={batch.image}
              alt={`${batch.title} banner`}
              className="w-full h-40 object-cover rounded-xl mb-4 border border-purple-100 shadow-sm"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              {batch.title}
            </h3>
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-baseline gap-2">
                <span className="inline-block px-3 py-1 rounded-full font-semibold text-xs bg-purple-200 text-purple-700">
                  Next Batch
                </span>
                <span className="ml-2 text-sm text-gray-700 font-medium">
                  {batch.startDate}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="inline-block px-3 py-1 rounded-full font-semibold text-xs bg-purple-100 text-purple-800">
                  Demo Class
                </span>
                <span className="ml-2 text-sm text-gray-700 font-medium">
                  {batch.demo}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="inline-block px-3 py-1 rounded-full font-semibold text-xs bg-purple-200 text-purple-800">
                  Workshop
                </span>
                <span className="ml-2 text-sm text-gray-700 font-medium">
                  {batch.workshop}
                </span>
              </div>
            </div>
            <a
              href={batch.ctaLink}
              className={`${purpleConfig.btn} block w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-white text-center rounded-lg py-3 font-semibold tracking-tight shadow transition-all duration-200 mt-auto transform hover:scale-105`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingBatches;
