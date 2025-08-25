"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

import CtaButtonSecond from "./ctaButtonSecond";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(`scroll progress ${latest}`);
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "560%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "900%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "125%"]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col w-full h-[250dvh] gap-10 bg-background-primary overflow-hidden"
      id="hero"
    >
      <motion.div
        style={{ y: y1 }}
        className="flex top-0 absolute z-0 w-full h-[100dvh] justify-end"
      >
        <div className="blob-1 "></div>
        <div className="blob-2 "></div>
        <div className="blob-3 "></div>
      </motion.div>
      <div className="flex relative w-full h-[40%]">
        {/* Text content */}
        <motion.div
          className="flex w-[90vw]  absolute bottom-[5%] flex-col px-[4vw] z-1"
          style={{ y: y2 }}
        >
          <h2 className="flex text-[2vw] text-primary-text fontbody">
            Rajeev Das
          </h2>
          <h1 className="flex text-[9rem] transition fonthero text-primary-text leading-[9rem] bg-testcolor">
            Web Designer & Developer
          </h1>
          <p className="fontCta text-[1rem] text-primary-text mt-5 px-2">
            Code and design are my tools, but problem-solving is my craft
          </p>
        </motion.div>

        {/* Parallax image */}
        <motion.div
          style={{ y: y1 }}
          className="flex top-0 absolute z-5 w-full h-[100dvh] justify-end"
        >
          <img
            src="./imagerkd2.webp"
            className="relative h-[100vh] z-6 w-auto object-cover mr-20"
            alt="Rajeev Das"
          />
        </motion.div>

        {/* Outlined duplicate text (overlay) */}
        <motion.div
          className="absolute z-10 flex w-[90vw]  bottom-[5%] flex-col px-[4vw]"
          style={{ y: y2 }}
        >
          <h2 className="flex text-[2vw] text-primary-text fontbody">
            Rajeev Das
          </h2>
          <h1 className="flex text-[9rem] fonthero text-transparent text-outline leading-[9rem] bg-testcolor">
            Web Designer & Developer
          </h1>
          <p className="fontCta text-[1rem] text-primary-text mt-5 px-2">
            Code and design are my tools, but problem-solving is my craft
          </p>
        </motion.div>
      </div>
      <motion.div
        style={{ y: y3 }}
        className="relative z-30 w-[94%] h-[43rem]  mt-20 mx-auto 
                      backdrop-blur-lg bg-white/5 
                      border border-primary-text/30 rounded-[2rem] py-10 px-20"
      >
        <div className="absolute left-[10%] top-[10%]">
          <CtaButtonSecond label="view a Case Study" siteLink="/" />
        </div>
        <h1 className="fontheading text-[6.6rem] text-primary-text text-right">
          About Me
        </h1>
        <div className="grid grid-cols-3  gap-5 w-full py-10 h-full  ">
          <div className="px-12">
            <p className="fontheading text-[6rem] font-bold text-primary-text/70">
              2+
            </p>
            <p className="text-primary-text text-[0.8rem] fontbody pr-10">
              years of Web design and development experience
            </p>
          </div>
          <div className="px-12">
            <p className="fontheading text-[6rem] font-bold text-primary-text/70">
              5+
            </p>
            <p className="text-primary-text text-[0.8rem] fontbody pr-10">
              years of coding and programming experience{" "}
            </p>
          </div>
          <div className="text-primary-text fontbody text-[0.9rem] text-justify tracking-wider px-12 leading-8 col-span-2 ">
            <p className="mb-6">
              I am a web developer and tech enthusiast with over 5 years of
              design and coding experience. To me, being a developer isn’t just
              about coding features - It’s about Solving Problems, Optimizing
              Experiences, and Bringing Ideas to Life.
            </p>
            <NavLink to={"/about"} className={"underline"}>
              Read More &gt;
            </NavLink>
          </div>
          <p className=" px-4 text-primary-text fontbody tracking-wide  text-[0.8rem] leading-10 text-justify row-start-1 row-end-4 col-start-3">
            My journey in tech began back in 9th grade with a little curiosity
            and C++, grew through Python in high school, and today thrives in
            full-stack JavaScript. I’m passionate about crafting modern,
            user-friendly websites and applications that turn ideas into
            effortless digital experiences. I bridge the gap between creativity
            and logic, not just writing code or designing interfaces, but
            solving real problems with purposeful solutions
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
