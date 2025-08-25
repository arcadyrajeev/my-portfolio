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

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "440%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col w-full h-[230dvh] gap-10 pb-10 bg-background-primary overflow-hidden"
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
        className="relative z-30 w-[94%] h-[40%]  mt-20 mx-auto 
                      backdrop-blur-lg bg-white/5 
                      border border-primary-text/30 rounded-[2rem] py-10 px-20"
      >
        <h1 className="fontheading text-[6.6rem] text-primary-text text-right">
          About Me
        </h1>
        <div className="grid grid-cols-3  gap-10 w-full py-10 h-full  ">
          <div className="px-12">
            <p className="fontheading text-[6rem] font-bold text-primary-text/70">
              2+
            </p>
            <p className="text-primary-text fontbody ">
              years of Web design and development experience
            </p>
          </div>
          <div className="px-12">
            <p className="fontheading text-[6rem] font-bold text-primary-text/70">
              5+
            </p>
            <p className="text-primary-text fontbody ">
              years of coding and programming experience{" "}
            </p>
          </div>
          <p className="text-primary-text fontbody text-[1rem]  px-12 leading-8 col-span-2 ">
            I am a web developer and tech enthusiast with over 2 years of
            professional experience in web development and more than 5 years of
            coding expertise.
          </p>

          <p className=" px-5 text-primary-text fontbody text-[1rem] leading-10 text-justify row-start-1 row-end-4 col-start-3">
            My journey in tech began back in 9th grade with a little curiosity
            and C++, grew through Python in high school, and today thrives in
            full-stack JavaScript. I’m passionate about crafting modern,
            user-friendly websites and applications that turn ideas into
            effortless digital experiences.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
