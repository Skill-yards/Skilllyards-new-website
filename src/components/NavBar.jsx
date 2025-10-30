import React, { useState, } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Centralizes dropdown structure for scalability and easier updates
  const dropdownMenus = [
    {
      name: "Programs",
      items: [
        { name: "BCA Programs", href: "/programs/bca" },
        { name: "BBA Programs", href: "/programs/bba" },
      ],
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3">
      <nav
        className="mx-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
                   hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.55)] 
                   transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Combines logo and brand name to reinforce identity and provide homepage access */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <img
              src="/logo.png"
              alt="Skillyards Logo"
              className="w-10 h-10 rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-black group-hover:text-blue-800 transition-colors">
              Skillyards
            </span>
          </Link>

          {/* Displays full navigation only on medium and larger screens for better layout control */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                {/* Highlights homepage for quick access */}
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Adds dropdowns for grouped navigation items to reduce clutter */}
                {dropdownMenus.map((menu) => (
                  <NavigationMenuItem key={menu.name}>
                    <NavigationMenuTrigger
                      className="px-5 py-2 text-white font-medium rounded-full 
                                 bg-gradient-to-r from-blue-800/60 to-blue-950/60 
                                 hover:from-blue-700/60"
                    >
                      {menu.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[180px] p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
                      {menu.items.map((item) => (
                        <NavigationMenuLink
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white 
                                     rounded-lg transition duration-300"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Adds direct links for key informational pages to improve discoverability */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/blogs"
                    className="px-5 py-2 text-black font-medium rounded-full 
                               hover:bg-white/40 hover:text-blue-800 
                               transition-all duration-300"
                  >
                    Blogs
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="px-5 py-2 text-black font-medium rounded-full 
                               hover:bg-white/20 hover:text-blue-800 
                               transition-all duration-300"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact"
                    className="px-5 py-2 text-black font-medium rounded-full 
                               hover:bg-white/20 hover:text-blue-800 
                               transition-all duration-300"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Enables mobile-friendly navigation with collapsible menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-black hover:text-blue-800 transition-colors">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-6 bg-white/70 backdrop-blur-lg"
              >
                {/* Mirrors desktop links for consistency across devices */}
                <div className="flex flex-col gap-4">
                  <a
                    href="/"
                    className="text-lg font-medium text-black hover:text-blue-700"
                  >
                    Home
                  </a>
                  <a
                    href="/programs/bca"
                    className="text-lg font-medium text-black hover:text-blue-700"
                  >
                    BCA Programs
                  </a>
                  <a
                    href="/programs/bba"
                    className="text-lg font-medium text-black hover:text-blue-700"
                  >
                    BBA Programs
                  </a>
                  <a
                    href="/blogs"
                    className="text-lg font-medium text-black hover:text-blue-700"
                  >
                    Blogs
                  </a>
                  <a
                    href="/about"
                    className="text-lg font-medium text-black hover:text-blue-700"
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    className="text-lg font-medium text-black hover:text-blue-700"
                  >
                    Contact Us
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
