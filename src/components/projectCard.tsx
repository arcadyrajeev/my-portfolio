import React from "react";
import { NavLink } from "react-router-dom";
import CtaButtonMain from "./ctaButtonMain";

interface ProjectCardProps {
  imgLink: string;
  title: string;
  desc: string[];
  liveSite: string;
  orientation: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgLink,
  title,
  desc,
  liveSite,
  orientation,
}) => {
  return (
    <section
      className={`${orientation} flex flex-col xl:flex-row items-center xl:items-stretch w-full gap-10 xl:gap-16 py-20 xl:py-28`}
    >
      {/* Image Section */}
      <div className="relative w-full xl:w-1/2 overflow-hidden rounded-2xl group shadow-2xl">
        <NavLink to={liveSite} target="_blank" className="block w-full h-full">
          <img
            src={imgLink}
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        </NavLink>
      </div>

      {/* Text Section (Glass Card) */}
      <div className="relative portrait:w-full flex flex-col justify-center w-[90%] xl:w-1/2  text-center xl:text-left px-6 py-10 rounded-3xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {/* Subtle glass highlight */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-[0.15] pointer-events-none" />

        <h2 className="fontheading text-3xl md:text-4xl lg:text-[2.8rem] text-primary-text drop-shadow-md mb-6 tracking-tight">
          {title}
        </h2>

        <ul className="flex flex-col gap-3 md:gap-4 text-primary-text/90 fontBody text-left text-[0.9rem] md:text-[1.2rem] xl:text-[1rem] leading-relaxed max-w-[90%] mx-auto xl:mx-0">
          {desc.map((item, i) => (
            <li
              key={i}
              className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-primary-text/50"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center xl:justify-start">
          <CtaButtonMain label="Visit Site" siteLink={liveSite} />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
