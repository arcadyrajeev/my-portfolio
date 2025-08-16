import { Moon, Sun } from "lucide-react";

import { useTheme } from "../contexts/themeContext";

const Navbar = () => {
  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className=" w-full h[4vw] bg-background flex items-center justify-between px-[4vw] py-[2vw] transition-[colors, transform] duration-300 ease-in-out">
      <img
        src={isDarkMode ? "/logo-white.svg" : "/logo-black.svg"}
        alt="Logo"
        className="w-12 h-12"
        id="logo"
      />
      <nav className="flex justify-center space-x-12 bg-primary-text px-[2vw] py-[1vw] rounded-[100vw] transition-[colors, transform] duration-300 ease-in-out">
        {navItems.map((item, key) => (
          <a key={key} href={item.path} className="text-secondary-text">
            {item.name}
          </a>
        ))}
      </nav>
      <button
        onClick={toggleTheme}
        className="cursor-pointer flex w-[5rem] h-full rounded-[100vw] bg-background-secondary  px-2 py-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]"
      >
        {isDarkMode ? (
          <div className="toggle translate-x-[2rem]" id="theme-toggle">
            <Moon className="text-accent " />
          </div>
        ) : (
          <div className="toggle" id="theme-toggle">
            <Sun className="text-accent " />
          </div>
        )}
      </button>
    </div>
  );
};

export default Navbar;
