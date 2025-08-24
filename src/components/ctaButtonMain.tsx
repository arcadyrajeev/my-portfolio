import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { scale } from "framer-motion";

interface CtaProps {
  label: string;
  siteLink: string;
}

const CtaButtonMain: React.FC<CtaProps> = ({ label, siteLink }) => {
  return (
    <NavLink
      to={siteLink}
      className="group relative flex items-center justify-center bg-accent w-64 h-16 rounded-[100vw] overflow-hidden"
    >
      <div className="buttonShine group-hover:rounded-[10vw] group-hover:scale-[1.2]"></div>
      <h1 className="fontheading font-500 text-secondary-text z-[2] text-[1.6rem] group-hover:translate-x-3 transition-all duration-300 ease-in-out">
        {label}
      </h1>
      <div className="flex w-10 h-10 items-start justify-end ml-5 overflow-hidden z-[2]">
        <div className="flex flex-col group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
          <ArrowUpRight color={"var(--secondary-text)"} size={40} />
          <ArrowUpRight color={"var(--secondary-text)"} size={40} />
        </div>
      </div>
    </NavLink>
  );
};

export default CtaButtonMain;
