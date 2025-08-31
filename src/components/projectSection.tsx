import ProjectCard from "./projectCard";

import projectData from "../data/projects.json";

const ProjectSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-transparent relative  w-full overflow-hidden">
      <div className="flex flex-col gap-8 lg:gap-25 w-full  relative fontheading bg-background-secondary z-50  p-4 md:p-5 lg:p-10 pb-30 lg:pb-60">
        <svg
          className="absolute opacity-[0] md:opacity-[1] z-0 top-[12%] w-auto h-[450vh] left-[-5%]"
          viewBox="0 0 3908 8783"
          fill="none"
        >
          <path
            d="M-934 14.5C-667.5 739.333 161.3 1983.7 1344.5 1162.5C2823.5 136 4006 2328 3014.5 2502C2023 2676 2597.5 2032 1727.5 2119C857.5 2206 179.5 3649.5 1727.5 4206.5C3275.5 4763.5 2753.5 5598 1849 6050.5C944.5 6503 301 7355 1953.5 7616C3606 7877 4267 8538.5 4371.5 8764.5"
            stroke="var(--svg)"
            stroke-width="84"
          />
        </svg>
        <div className="flex w-full justify-center md:justify-start flex-col md:flex-row items-center lg:gap-[8vw] mt-15">
          <h1 className="flex justify-center md:justify-start text-[2rem] w-full md:w-[70%] lg:text-[4rem] xl:text-[6rem] h-fit text-primary-text">
            Featured Projects{" "}
          </h1>
          <p className="flex h-fit w-[80%] lg:w-[30%] xl:w-[20%] m-10 lg:mt-16 text-center md:text-left fontbody text-[0.8rem] md:text-[1rem] xl:text-[1vw] w-[24vw] tracking-wider text-primary-text/90">
            A curated selection of my most passionately crafted projects{" "}
          </p>
        </div>
        <div className="flex items-center flex-col gap-30 md:gap-40 lg:gap-50 z-2">
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
