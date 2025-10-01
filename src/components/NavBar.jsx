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
      ]
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-3">
     
    
      
      <nav 
  className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-full mx-3 sticky top-0 z-50 border border-white/30"
  role="navigation" 
  aria-label="Main navigation"
>
        <div className="container mx-auto flex items-center justify-between px-5 py-3">
          
          <div className="flex items-center">
            <img src="src\assets\logo.png" alt="Logo" className="h-10 w-35" />
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                
               
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="px-4 py-2 text-black font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {dropdownMenus.map((menu) => (
  <NavigationMenuItem key={menu.name}>
    <NavigationMenuTrigger className="px-4 py-2 text-white bg-blue-950 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150">
      {menu.name}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="min-w-[180px] p-2 bg-blue-900 shadow-lg border rounded">
      {menu.items.map((item) => (
        <NavigationMenuLink
          key={item.name}
          href={item.href}
          className="block px-4 py-2 text-sm text-white hover:bg-blue-950 rounded-full"
        >
          {item.name}
        </NavigationMenuLink>
      ))}
    </NavigationMenuContent>
  </NavigationMenuItem>
))}
<NavigationMenuItem>
                  <NavigationMenuLink
                    href="/Blog"
                    className="px-5  py-2 text-black font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
                  >
                    Blogs
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem></NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="px-4 py-2 text-black font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact"
                    className="px-4 py-2 text-black font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-800 hover:text-blue-600 transition-colors">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              
              <SheetContent side="right" className="bg-gray-200 w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                 
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-white font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                 
                  {dropdownMenus.map((menu) => (
                    <div key={menu.name} className="border-t border-gray-300 pt-4">
                      <h3 className="px-4 py-2 text-white bg-blue-950 font-medium rounded-full text-center">
                        {menu.name}
                      </h3>
                      <div className="ml-4 mt-2 space-y-2">
                        {menu.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
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