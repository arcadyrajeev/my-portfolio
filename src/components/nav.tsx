import { Moon, Sun } from "lucide-react";
import { useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";

type Item = { name: "Home" | "Projects" | "About"; path: string };

const navItems: Item[] = [
  { name: "Projects", path: "/projects" },
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

// Pure “rotate so active is in the middle”
function centerOrdered(items: Item[], currentName: Item["name"]) {
  if (items.length !== 3) return items; // only works cleanly for 3 elements

  const current = items.find((i) => i.name === currentName);
  if (!current) return items;

  const others = items.filter((i) => i.name !== currentName);

  // Put current in the middle, and others on left/right
  return [others[0], current, others[1]];
}

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  // derive the current item from the URL (robust to refresh/back/forward)
  const current =
    (navItems.find((i) => i.path === pathname)?.name as Item["name"]) ?? "Home";

  const ordered = useMemo(() => centerOrdered(navItems, current), [current]);

  return (
    <div className="absolute z-99 w-full h[4vw] flex items-center justify-between px-[4vw] py-[2vw] transition-[colors, transform] duration-300 ease-in-out">
      <img
        src={isDarkMode ? "/logo-white.svg" : "/logo-black.svg"}
        alt="Logo"
        className="w-12 h-12"
        id="logo"
      />
      <nav
        className="flex w-[9vw] overflow-hidden justify-center 
             bg-primary-text text-[1rem] rounded-[100vw] 
             transition-all
             duration-300 ease-in-out fontbody hover:w-[27vw]"
      >
        {ordered.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-text navlink"
                : "text-secondary-text/70 navlink"
            }
          >
            {item.name}
          </NavLink>
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
