import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <Card className="bg-transparent border-none shadow-none space-y-4">
          <CardHeader className="flex items-center gap-2 p-0">
            <CardTitle className="text-lg">Skilllyards</CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground">
            A collection of 100+ responsive HTML templates for your startup
            business or side project.
          </CardContent>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </Card>

        {/* Product Section */}
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-base">Product</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-2 text-sm text-muted-foreground">
            {[
              "Overview",
              "Pricing",
              "Marketplace",
              "Features",
              "Integrations",
              "Marketing",
            ].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-foreground block"
              >
                {item}
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Company Section */}
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-base">Company</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-2 text-sm text-muted-foreground">
            {["About", "Team", "Blog", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-foreground block"
              >
                {item}
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Newsletter Section */}
        <Card className="bg-transparent border-none shadow-none">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-base">Newsletter</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <form className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Email" required />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-foreground"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Skilllyards. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
