import React, { useState, useMemo } from "react";
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


  const navItems = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Blogs", href: "/blogs" },
      { name: "About", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
    []
  );

  const dropdownMenus = useMemo(
    () => [
      {
        name: "Programs",
        items: [
          { name: "BCA Programs", href: "/programs/bca" },
          { name: "BBA Programs", href: "/programs/bba" },
        ],
      },
    ],
    []
  );

  // Shared classes for consistency and reusability
  const linkClasses =
    "px-5 py-2 text-white font-medium rounded-full hover:bg-white/20 hover:text-white transition-all duration-300";
  const triggerClasses =
    "px-5 py-2 text-white font-medium rounded-full bg-gradient-to-r from-blue-800/60 to-blue-950/60 hover:from-blue-700/60 transition-all duration-300";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3">
      <nav className="mx-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.55)] transition-all duration-500 ease-in-out">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
      
          <h1 className="text-white font-bold text-xl">Skillyards</h1>

         
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={linkClasses}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

              
                {dropdownMenus.map((menu) => (
                  <NavigationMenuItem key={menu.name}>
                    <NavigationMenuTrigger className={triggerClasses}>
                      {menu.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[180px] p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
                      {menu.items.map((item) => (
                        <NavigationMenuLink
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-black hover:bg-blue-600/50 hover:text-white rounded-lg transition duration-300"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

            
                {navItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink href={item.href} className={linkClasses}>
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

        
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-white hover:text-white/80 transition-colors">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-slate-900/95 backdrop-blur-lg border-l border-white/20"
              >
                <div className="flex flex-col gap-4 mt-8">
                 
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white text-lg font-medium hover:text-blue-400 transition-colors px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  
                  {dropdownMenus.map((menu) => (
                    <div key={menu.name} className="border-t border-white/10 pt-4">
                      <h3 className="text-white font-semibold mb-2 px-4">
                        {menu.name}
                      </h3>
                      {menu.items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-white/80 text-base hover:text-blue-400 transition-colors px-8 py-2 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
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

export default React.memo(Navbar);
