import React from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import Marquee from "./ui/Marquee";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { type: "link", name: "Home", to: "/" },
    {
      type: "dropdown",
      name: "Programs",
      items: [
        { name: "BCA Programs", to: "/programs/bca" },
        { name: "BBA Programs", to: "/programs/bba" },
      ],
    },
    {
      type: "dropdown",
      name: "Resources",
      items: [
        { name: "Blogs & Articles", to: "/blogs" },
        { name: "Study Material", to: "/study-material" },
      ],
    },
    { type: "link", name: "About", to: "/about" },
    { type: "link", name: "Contact Us", to: "/contact" },
  ];

  const renderDesktopItem = (item) => (
    <NavigationMenuItem key={item.name}>
      {item.type === "link" ? (
        <Link
          to={item.to}
          className="px-4 py-2 text-slate-800 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150 block"
        >
          {item.name}
        </Link>
      ) : (
        <>
          <NavigationMenuTrigger className="px-4 py-2 text-white bg-blue-950 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150">
            {item.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[180px] p-2 bg-blue-900 shadow-lg border rounded">
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.to}
                className="block px-4 py-2 text-sm text-white hover:bg-blue-950 rounded-full"
              >
                {subItem.name}
              </Link>
            ))}
          </NavigationMenuContent>
        </>
      )}
    </NavigationMenuItem>
  );

  const renderMobileItem = (item) => (
    <React.Fragment key={item.name}>
      {item.type === "link" ? (
        <Link
          to={item.to}
          className="px-4 py-3 text-slate-800 font-medium hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150 block"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ) : (
        <div className="border-t border-gray-300 pt-4">
          <h3 className="px-4 py-2 text-white bg-blue-950 font-medium rounded-full text-center">
            {item.name}
          </h3>
          <div className="ml-4 mt-2 space-y-2">
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.to}
                className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Marquee text="+91 70601000562 join now" />
      <nav className="bg-[#D1D0D0] shadow-2xl rounded-full mx-3">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img src="src/assets/logo.png" alt="Logo" className="h-10 w-35" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                {menuItems.map(renderDesktopItem)}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-slate-800 hover:text-blue-600 transition-colors">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-200 w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map(renderMobileItem)}
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