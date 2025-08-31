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
      <div className="group relative flex justify-center xl:justify-start  w-full  xl:w-[50%] h-[40dvh] xl:h-[64dvh] xl:px-5 xl:px-10">
        <NavLink
          to={liveSite}
          target="_blank"
          className="relative flex overflow-hidden bg-background-primary justify-start w-full rounded-[1rem]"
        >
          <img
            src={imgLink}
            alt="project preview"
            className="absolute object-top-left w-[100%] h-[100%] object-cover group-hover:scale-[1.04] transition-scale duration-300 ease-out"
          />
        </NavLink>
      </div>
      <div className="flex gap-8 xl:gap-3 flex-col w-full xl:justify-start justify-center xl:w-[50%] justify-center lg:pl-20 mt-10">
        <h1 className="fontheading text-[2rem]  leading-10  lg:text-[3rem] text-primary-text">
          {title}
        </h1>
        <div className="flex flex-col xl:px-10 lg:py-5 pl-10">
          {desc.map((item) => (
            <p className=" fontBody text-[0.7rem] lg:text-[1.6rem] xl:text-[1rem] text-primary-text/80 my-2 lg:m-2">
              {item}
            </p>
          ))}
        </div>
        <div className="flex xl:pl-10 justify-center xl:justify-start  w-full  mt-5 xl:mt-10">
          <CtaButtonMain label="Visit Site" siteLink={liveSite} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
