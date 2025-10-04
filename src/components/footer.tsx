import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <footer className="flex flex-col border-t border-white/30 gap-6 lg:gap-10 pb-5 items-center justify-center bg-background-secondary w-full h-[15rem]">
      <div className="flex w-full lg:w-[50%] p-8 gap-10 lg:gap-30 justify-center pt-10">
        <NavLink
          to={"https://github.com/arcadyrajeev"}
          target="_blank"
          className="flex w-10 h-10"
        >
          <img
            src={isDarkMode ? "/icons/git-dark.png" : "/icons/git-light.png"}
          />
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/arcadyrajeev/"}
          target="_blank"
          className="flex w-10 h-10"
        >
          <img
            src={isDarkMode ? "/icons/link-dark.png" : "/icons/link-light.png"}
          />
        </NavLink>
        <NavLink
          to={"https://www.behance.net/arcadyarts"}
          target="_blank"
          className="flex w-10 h-10"
        >
          <img
            src={
              isDarkMode
                ? "/icons/behance-dark.png"
                : "/icons/behance-light.png"
            }
          />
        </NavLink>
      </div>
      <p className="w-full text-center fontCta text-[0.8rem] lg:text-[1rem] text-primary-text/50 tracking-wide ">
        &copy;2025 all rights reserved. www.arcadydesign.com
      </p>
    </footer>
  );
};

export default Footer;
