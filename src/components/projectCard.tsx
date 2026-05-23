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
    <section className="py-24 xl:py-32">
      <div
        className={`${orientation} relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111111] shadow-[0_25px_100px_rgba(0,0,0,0.45)]`}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-[#C6A77D]/10 blur-[120px] pointer-events-none" />

        <div className="flex flex-col xl:flex-row min-h-[680px]">
          {/* Left Side */}
          <div className="group relative xl:w-1/2 overflow-hidden">
            <NavLink
              to={liveSite}
              target="_blank"
              className="block w-full h-full"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent opacity-70" />

              <img
                src={imgLink}
                alt={`${title} preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex xl:w-1/2">
            <div className="flex flex-col justify-between w-full px-8 py-10 md:px-12 md:py-14 xl:px-16 xl:py-16">
              <div>
                {/* Label */}
                <span className="text-[0.72rem] uppercase tracking-[0.28em] text-white/40">
                  Selected Project
                </span>

                {/* Title */}
                <h2 className="mt-6 fontheading text-4xl md:text-5xl leading-[0.92] tracking-[-0.05em] text-white ">
                  {title}
                </h2>

                {/* Divider */}
                <div className="w-16 h-px bg-white/15 my-10" />

                {/* Description */}
                <ul className="flex flex-col gap-5 text-white/70 text-sm leading-[1.8]">
                  {desc.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-[0.7rem] h-[5px] w-[5px] rounded-full bg-[#C6A77D] shrink-0" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-14">
                <CtaButtonMain label="Visit Site" siteLink={liveSite} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
