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
          <span><h1>Skillyards</h1></span>
         

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
                                 hover:from-blue-700/60"
                                
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

            
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
