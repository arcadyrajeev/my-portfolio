import { Moon, Sun } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";

type Item = { name: "Home" | "Projects" | "About"; path: string };

const navItems: Item[] = [
  { name: "Projects", path: "/projects" },
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

// Center current nav item logic
function centerOrdered(items: Item[], currentName: Item["name"]) {
  if (items.length !== 3) return items;
  const current = items.find((i) => i.name === currentName);
  if (!current) return items;
  const others = items.filter((i) => i.name !== currentName);
  return [others[0], current, others[1]];
}

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const current =
    (navItems.find((i) => i.path === pathname)?.name as Item["name"]) ?? "Home";

  const ordered = useMemo(() => centerOrdered(navItems, current), [current]);

  // ✅ Mobile toggle state
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => setIsNavOpen((prev) => !prev);
  const handleLinkClick = () => setIsNavOpen(false);

  return (
    <header className="fixed z-[99] w-full flex items-center justify-between px-[4vw] py-[2vw] transition-colors duration-300 ease-in-out">
      {/* Logo */}
      <NavLink to={"/"}>
        <img
          src={isDarkMode ? "/logo-white.svg" : "/logo-black.svg"}
          alt="Logo"
          className="w-12 h-12"
          id="logo"
        />
      </NavLink>

      {/* Nav Bubble */}
      <div
        onClick={handleToggleNav}
        className={`absolute top-full left-[2%] md:relative flex-shrink-0 flex  md:flex-row items-center justify-center overflow-hidden cursor-pointer px-10
        bg-primary-text fontbody text-secondary-text rounded-[100vw]
        transition-all duration-300 ease-in-out
        md:hover:w-[36vw]
        ${
          isNavOpen
            ? "w-[72vw] md:w-[48vw] "
            : "w-[24vw] md:w-[16vw] xl:w-[12vw] "
        } 
        `}
      >
        {ordered.map((item) => {
          const isActive = item.name === current;

          return (
            <NavLink
              key={item.name}
              to={isActive ? "#" : item.path} // disable click on current active
              onClick={isActive ? undefined : handleLinkClick}
              className={`flex flex-shrink-0 transition-colors justify-center items-center text-[1.2rem] lg:text-[2rem] rounded-full w-[24vw] md:w-[16vw] xl:w-[12vw] duration-200 p-1 md:px-3 ${
                isActive
                  ? "text-secondary-text/70 pointer-events-none select-none"
                  : "text-secondary-text/90 hover:text-secondary-text"
              }`}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="cursor-pointer flex w-[4rem] lg:w-[5rem] h-8 lg:h-full rounded-[100vw] bg-toggle px-1 lg:px-2 py-0.5 lg:py-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)]"
      >
        {isDarkMode ? (
          <div
            className="toggle translate-x-[1.6rem] lg:translate-x-[2rem]"
            id="theme-toggle"
          >
            <Moon className="text-accent" />
          </div>
        ) : (
          <div className="toggle" id="theme-toggle">
            <Sun className="text-accent" />
          </div>
        )}
      </button>
    </header>
  );
};

export default Navbar;
