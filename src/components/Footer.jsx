import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InstagramIcon,
  Facebook01Icon,
  NewTwitterIcon,
  Linkedin01Icon,
  YoutubeIcon,
} from "hugeicons-react";

const Footer = () => {
  return (
    <footer className="relative bg-muted/50 backdrop-blur-xl border-t border-white/10 shadow-inner py-10 md:py-20 px-6 md:px-20 w-full rounded-t-2xl">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-40" />

      {/* Creates a responsive grid layout to organize footer content into logical sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        {/* Highlights brand identity and mission to build trust and recognition */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <img
            src="src/assets/logo.png"
            alt="logo"
            className="w-28 md:w-36 mb-2"
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering learners through practical, project-based tech training.
          </p>

          {/* Encourages social engagement by linking to active community platforms */}
          <div className="flex gap-4 pt-3">
            {[
              {
                icon: InstagramIcon,
                label: "Instagram",
                url: "https://www.instagram.com/skillyardss/",
              },
              {
                icon: Facebook01Icon,
                label: "Facebook",
                url: "https://www.facebook.com/people/Skillyards-Versatility-Pvt-ltd/61561551050537/#",
              },
              {
                icon: NewTwitterIcon,
                label: "Twitter",
                url: "https://twitter.com/skillyardss",
              },
              {
                icon: YoutubeIcon,
                label: "YouTube",
                url: "https://www.youtube.com/channel/UC6kThn-QYTEepYVFNSkhwFQ",
              },
              {
                icon: Linkedin01Icon,
                label: "LinkedIn",
                url: "https://www.linkedin.com/company/skillyards/",
              },
            ].map(({ icon: Icon, label, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Provides quick access to company-related pages to improve site navigation */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">Company</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            {["About", "Team", "Blogs", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-foreground block transition-all duration-200 hover:translate-x-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Lists available programs to guide users toward learning opportunities */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">Programs</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            {[
              "Full-Stack Development",
              "Digital Marketing",
              "Android Development",
              "UI/UX Design",
            ].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-foreground block transition-all duration-200 hover:translate-x-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Captures user interest for updates and promotions via email subscription */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Newsletter
          </h3>
          <form className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 min-w-0 bg-white/10 border-none text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-indigo-600 hover:opacity-90 transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
            {/* Clarifies legal agreement for users opting into communication */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              By subscribing, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="underline hover:text-foreground"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Displays copyright notice to assert ownership and protect content */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs md:text-sm text-muted-foreground">
        © {new Date().getFullYear()} Skillyards. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
