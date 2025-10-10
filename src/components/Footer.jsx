import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InstagramIcon,
  Facebook01Icon,
  NewTwitterIcon,
  Linkedin01Icon,
} from "hugeicons-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t py-8 md:py-20 px-4 md:px-20 shadow-2xl mt-auto w-full rounded-xl">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
        <Card className="bg-transparent border-none shadow-none space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex items-start gap-2 p-0">
            <CardTitle className="text-lg">
              <img
                src="src/assets/logo.png"
                alt="logo"
                className="w-32 md:w-40 mb-6 md:mb-10"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground"></CardContent>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Facebook01Icon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <NewTwitterIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin01Icon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </Card>

        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-base md:text-lg">Company</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-2 text-sm text-muted-foreground">
            {["About", "Team", "blogs", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-foreground block transition-colors duration-200 py-1"
              >
                {item}
              </a>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-transparent border-none shadow-none col-span-1 sm:col-span-2 lg:col-span-1">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-base md:text-lg">Newsletter</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <form className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 min-w-0"
                />
                <Button
                  type="submit"
                  className="bg-blue-950 hover:bg-gray-300 hover:text-slate-950 whitespace-nowrap transition-colors duration-200"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="border-t border-muted-foreground/20 mt-8 md:mt-20 pt-6">
        <p className="text-center text-xs md:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Skilllyards. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
