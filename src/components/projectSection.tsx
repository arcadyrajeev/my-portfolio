import ProjectCard from "./projectCard";

const ProjectSection = () => {
  const descList: string[] = [
    "Website for a Photography Service",
    "Mobile First Design",
    "Image optimization for fast loading",
    "Smooth animations",
  ];

  return (
    <div className="flex bg-transparent relative  w-full">
      <div className="flex flex-col gap-20 w-full  relative fontheading bg-background-secondary z-50 p-10 pb-60">
        <div className="flex w-full gap-[8vw] mt-15">
          <h1 className="flex  text-[6rem] h-fit text-primary-text">
            Featured Projects{" "}
          </h1>
          <p className="flex h-fit mt-16 fontBody w-[24vw] tracking-wide text-primary-text/70">
            A CURATED SELECTION OF MY MOST PASSIONATELY CRAFTED PROJECTS{" "}
          </p>
        </div>
        <ProjectCard
          imgLink="/"
          title="Lunaria Photography"
          desc={descList}
          liveSite="/"
        ></ProjectCard>
      </div>
    </div>
  );
};

export default ProjectSection;
