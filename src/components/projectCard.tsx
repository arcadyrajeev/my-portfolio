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
    <div className={`${orientation} flex w-full`}>
      <div className="group relative flex  w-[50%] h-[64dvh]  px-10 py-5">
        <div className="absolute flex bottom-[-5%] bg-accent rotate-[8deg] w-[80%] h-[24vw] rounded-[1.2rem]"></div>
        <NavLink
          to={liveSite}
          target="_blank"
          className="relative flex overflow-hidden bg-background-primary justify-start w-full rounded-[1rem]"
        >
          <img
            src={imgLink}
            alt="project preview"
            className="absolute top-0 object-top-left w-full h-full object-cover group-hover:scale-[1.04] transition-scale duration-300 ease-out"
          />
        </NavLink>
      </div>
      <div className="flex flex-col w-[50%] justify-center pl-20">
        <h1 className="fontheading text-[3rem] text-primary-text">{title}</h1>
        <div className="flex flex-col px-10 py-5">
          {desc.map((item) => (
            <p className=" fontBody text-primary-text/80 m-2">{item}</p>
          ))}
        </div>
        <div className="flex  w-full px-5 mt-10">
          <CtaButtonMain label="Visit Site" siteLink={liveSite} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
