import React from "react";
import CtaButtonMain from "./ctaButtonMain";
import { NavLink } from "react-router-dom";

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
    <div className={`${orientation} flex flex-col w-full`}>
      <div className="group md:flex-row flex-col relative flex justify-center md:justify-start  w-full md:w-[50%] h-[64dvh]  md:px-10 py-5">
        <div className="md:absolute relative flex bottom-[-5%] bg-accent rotate-[8deg] w-[80%] h-[24vw] rounded-[1.2rem]"></div>
        <NavLink
          to={liveSite}
          target="_blank"
          className="relative flex overflow-hidden bg-background-primary justify-start w-full rounded-[1rem]"
        >
          <img
            src={imgLink}
            alt="project preview"
            className="absolute object-center w-full h-full object-cover group-hover:scale-[1.04] transition-scale duration-300 ease-out"
          />
        </NavLink>
      </div>
      <div className="flex gap-8 md:gap-3 flex-col w-full md:justify-start justify-center md:w-[50%] justify-center md:pl-20">
        <h1 className="fontheading text-[1.4rem] leading-10 md:text-[3rem] md:text-[3rem] text-primary-text">
          {title}
        </h1>
        <div className="flex flex-col md:px-10 md:py-5">
          {desc.map((item) => (
            <p className=" fontBody  text-[0.7rem] md:text-[1rem] text-primary-text/80 my-2 md:m-2">
              {item}
            </p>
          ))}
        </div>
        <div className="flex justify-center  w-full px-5 mt-10">
          <CtaButtonMain label="Visit Site" siteLink={liveSite} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
