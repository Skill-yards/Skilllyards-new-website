import React, { useState } from "react";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

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
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="h-10 w-auto drop-shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="px-5 py-2 text-black font-medium rounded-full 
                               hover:bg-white/20 hover:text-blue-800 
                               transition-all duration-300"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {dropdownMenus.map((menu) => (
                  <NavigationMenuItem key={menu.name}>
                    <NavigationMenuTrigger
                      className="px-5 py-2 text-white font-medium rounded-full 
                                 bg-gradient-to-r from-blue-800/60 to-blue-950/60 
                                 hover:from-blue-700/60 hover:to-blue-800/60 
                                 transition-all duration-300"
                    >
                      {menu.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="min-w-[180px] p-2 bg-white/10 backdrop-blur-lg border border-white/20 
                                 rounded-2xl shadow-lg"
                    >
                      {menu.items.map((item) => (
                        <NavigationMenuLink
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-black hover:bg-blue-600 
                                     rounded-lg transition duration-300"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

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
                               hover:bg-white/20  hover:text-blue-800 
                               transition-all duration-300"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-black  hover:text-blue-800  transition-colors">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-white/10 backdrop-blur-xl border-l border-white/20 
                           w-[300px] sm:w-[350px] text-white"
              >
                <div className="flex flex-col space-y-4 mt-10">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  {dropdownMenus.map((menu) => (
                    <div key={menu.name} className="border-t border-white/20 pt-4">
                      <h3 className="px-4 py-2 text-center text-lg font-semibold bg-gradient-to-r from-blue-800/50 to-blue-950/50 rounded-full">
                        {menu.name}
                      </h3>
                      <div className="ml-4 mt-2 space-y-2">
                        {menu.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm hover:bg-white/20 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
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
