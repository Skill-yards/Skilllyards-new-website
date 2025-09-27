import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 w-full shadow">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center h-[70px] px-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gray-800 text-white"><Button>img</Button></NavigationMenuTrigger>
            </NavigationMenuItem>
            {["Item One", "Item Two", "Item Three", "Item Four"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuTrigger className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700'>
                  {item}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Add dropdown content if needed */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navbar Hamburger */}
      <div className="md:hidden flex justify-between items-center px-4 h-[70px]">
        <Button className="bg-gray-800 text-white">img</Button>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-2 py-4 px-4">
              {["Item One", "Item Two", "Item Three", "Item Four"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuTrigger className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 w-full text-left">
                    {item}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Add mobile dropdown/children here if needed */}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
}
export default App