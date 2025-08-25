import TechCard from "./techCard";

import frontendData from "../data/frontendData.json";
import backendData from "../data/backendData.json";
import devopsData from "../data/devopsData.json";

const TechStack = () => {
  return (
    <section className="flex bg-background-primary flex-col w-full   py-12 px-16">
      <div className="flex w-full ">
        <h1 className="fontheading text-[8rem] text-primary-text">
          Tech Stack
        </h1>
        <p className="fontbody text-[1.2rem] py-20 w-[32vw] pl-60 text-primary-text/80">
          Tools I use to build amazing things
        </p>
      </div>

      <TechCard title="Front end" iconList={frontendData} />
      <hr className="border-[0.2vw] border-accent mx-10" />
      <TechCard title="Back end" iconList={backendData} />
      <hr className="border-[0.2vw] border-accent mx-10" />
      <TechCard title="DevOps & Tools" iconList={devopsData} />
    </section>
  );
};

export default TechStack;
