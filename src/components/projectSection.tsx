import ProjectCard from "./projectCard";

import projectData from "../data/projects.json";

const ProjectSection = () => {
  return (
    <div className="flex bg-transparent relative  w-full">
      <div className="flex flex-col gap-25 w-full  relative fontheading bg-background-secondary z-50 p-10 pb-60">
        <div className="flex w-full gap-[8vw] mt-15">
          <h1 className="flex  text-[6rem] h-fit text-primary-text">
            Featured Projects{" "}
          </h1>
          <p className="flex h-fit mt-16 fontBody w-[24vw] tracking-wide text-primary-text/70">
            A CURATED SELECTION OF MY MOST PASSIONATELY CRAFTED PROJECTS{" "}
          </p>
        </div>
        <div className="flex flex-col gap-50">
          {projectData.map((project) => (
            <ProjectCard
              imgLink={project.imgLink}
              title={project.title}
              desc={project.desc}
              liveSite={project.liveSite}
              orientation={project.orientation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
