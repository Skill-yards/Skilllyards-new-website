import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Marquee from "./components/ui/Marquee";



const Navbar = () => (
  
  <>
  
  <Marquee text={"+91 70601000562 join now"}  ></Marquee>

  
  <nav className="bg-slate-300 shadow-2xl rounded-full ml-3 mr-3 ">
    <div className="container mx-auto flex items-center justify-between px-6 py-3 shadow-2xl rounded-full">
      <div className="flex items-center">
        <img src="src/assets/logo.png" alt="Logo" className="h-10 w-35" />
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 text-slate-800 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 text-white bg-blue-950 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150">
              Programs
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[180px] p-2 bg-blue-900 shadow-lg border rounded">
              <NavigationMenuLink
                href="/programs/bca"
                className="block px-4 py-2 text-sm text-white hover:bg-blue-950 rounded-full"
              >
                BCA Programs
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/programs/bba"
                className="block px-4 py-2 text-sm text-white hover:bg-blue-950 rounded-full"
              >
                BBA Programs
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            
            
              <NavigationMenuTrigger className="px-4 py-2 text-white bg-blue-950 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[180px] p-2 bg-blue-900 shadow-lg border rounded absolute  z-50">
            
                <NavigationMenuLink
                  href="/programs/bca"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-950 rounded-full"
                >
                  Blogs & Articles
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/programs/bba"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-950 rounded-full"
                >
                  Study Material
                </NavigationMenuLink>
              </NavigationMenuContent>
            
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="px-4 py-2 text-skate-800 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className="px-4 py-2 text-slate-800 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
  </>
);

export default Navbar;



