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
      <div className="relative flex  w-[50%] h-[64dvh]  px-10 py-5">
        <div className="absolute flex bottom-[-5%] bg-accent rotate-[8deg] w-[80%] h-[24vw] rounded-[2rem]"></div>
        <NavLink
          to={liveSite}
          target="blank"
          className=" relative overflow-hidden flex bg-background-primary w-full rounded-[2rem]"
        >
          <img src={imgLink} className="w-[100%] h-[100%] object-cover" />
        </NavLink>
      </div>
      <div className="flex flex-col w-[50%] p-10 pl-20">
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
