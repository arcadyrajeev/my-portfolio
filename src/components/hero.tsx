"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(`scroll progress ${latest}`);
  });

  // Parallax effect: as you scroll, image moves slower than text
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col w-full h-[250dvh] gap-10 pb-10 bg-background overflow-hidden"
      id="hero"
    >
      <div className="flex relative w-full h-[40%]">
        {/* Text content */}
        <motion.div
          className="flex w-[90vw]  absolute bottom-[10%] flex-col px-[4vw] z-1"
          style={{ y: y2 }}
        >
          <h2 className="flex text-[2vw] text-primary-text fontbody">
            Rajeev Das
          </h2>
          <h1 className="flex text-[9rem] transition fonthero text-primary-text leading-[9rem] bg-testcolor">
            Web Designer & Developer
          </h1>
        </motion.div>

        {/* Parallax image */}
        <motion.img
          src="./imagerkd.png"
          style={{ y: y1 }}
          className="h-[120vh] w-auto z-5 absolute right-[8%] bottom-0"
          alt="Rajeev Das"
        />

        {/* Outlined duplicate text (overlay) */}
        <motion.div
          className="absolute z-10 flex w-[90vw]  bottom-[10%] flex-col px-[4vw]"
          style={{ y: y2 }}
        >
          <h2 className="flex text-[2vw] text-primary-text fontbody">
            Rajeev Das
          </h2>
          <h1 className="flex text-[9rem] fonthero text-transparent text-outline leading-[9rem] bg-testcolor">
            Web Designer & Developer
          </h1>
        </motion.div>
      </div>
      <motion.div
        style={{ y: y3 }}
        className="relative z-30 w-[94%] h-[40%]  mx-auto 
                      backdrop-blur-md bg-white/5 
                      border border-primary-text/30 rounded-[2rem] py-10 px-20"
      >
        <h1 className="fontheading text-[5rem] text-primary-text text-right">
          About Me
        </h1>
        <div className="flex flex-col gap-10 w-[50%] py-10 h-full  mt-4">
          <p className="text-primary-text fontbody text-[1.28rem] text-justify">
            I am a web developer and tech enthusiast with over 2 years of
            professional experience in web development and more than 5 years of
            coding expertise.
          </p>
          <p className="text-primary-text fontbody text-[1.28rem] text-justify">
            My journey in tech began back in 9th grade with C++, grew through
            Python in high school, and today thrives in full-stack JavaScript.
            I’m passionate about crafting modern, user-friendly websites and
            applications that turn ideas into effortless digital experiences.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
