import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface CtaProps {
  label: string;
  siteLink: string;
}

const CtaButtonSecond: React.FC<CtaProps> = ({ label, siteLink }) => {
  return (
    <NavLink
      to={siteLink}
      target="blank"
      className="group relative flex items-center justify-center bg-accent w-72 h-8 md:w-84 md:h-16 rounded-[100vw] overflow-hidden"
    >
      <div className="buttonShine hidden lg:block group-hover:rounded-[10vw] group-hover:scale-[1.2]"></div>
      <h1 className="fontCta tracking-wider text-secondary-text z-[2] text-[1rem] lg:text-[1.4rem] group-hover:translate-x-3 transition-all duration-300 ease-in-out">
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

export default CtaButtonSecond;
