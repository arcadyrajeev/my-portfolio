import TechCard from "./techCard";

import frontendData from "../data/frontendData.json";
import backendData from "../data/backendData.json";
import devopsData from "../data/devopsData.json";

const TechStack = () => {
  return (
    <section className="flex items-center bg-background-primary flex-col w-full py-8  px-4 md:py-12 md:px-16">
      <div className="flex w-full  flex-col items-center md:flex-row md:px-6">
        <h1 className="flex fontheading justify-center md:justify-start  w-full md:w-[70%]  text-[3rem] md:text-[8vw] text-primary-text">
          Tech Stack
        </h1>
        <p className=" flex fontbody justify-center w-full md:w-[25%] text-[0.6rem] md:text-[1.2vw] tracking-wider  md:py-24 text-primary-text/80">
          Tools I use to design, build and deploy amazing things
        </p>
      </div>

      <TechCard title="Front end" iconList={frontendData} />
      <hr className="border-[0.2vw] w-full border-accent mx-10" />
      <TechCard title="Back end" iconList={backendData} />
      <hr className="border-[0.2vw] w-full border-accent mx-10" />
      <TechCard title="DevOps & Tools" iconList={devopsData} />
    </section>
  );
};

export default TechStack;
