import { useState, useEffect, createContext, useContext } from "react";

import type { ReactNode, Dispatch, SetStateAction } from "react";

type NavContextType = {
  currentNav: string;
  setCurrentNav: Dispatch<SetStateAction<string>>;
};

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [currentNav, setCurrentNav] = useState("Home");
  const navlink = document.getElementById("navlink");

  useEffect(() => {
    if (navlink && currentNav === navlink?.dataset.name) {
      navlink.classList.add("hidden");
    }
  }, []);

  return (
    <NavContext.Provider value={{ currentNav, setCurrentNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
