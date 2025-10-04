import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start pt-[8rem] pb-20 bg-background-primary text-primary-text overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 md:px-16 max-w-[1200px]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="fontheading text-[3.5rem] md:text-[6rem] lg:text-[7rem] leading-tight font-bold"
        >
          Crafting Code <br /> with <span className="text-accent">Purpose</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="fontbody mt-6 md:mt-8 text-[1rem] md:text-[1.2rem] text-primary-text/70 max-w-[700px] leading-relaxed"
        >
          I'm a designer and developer focused on solving real problems through
          clean interfaces and meaningful user experiences. Every line of code I
          write, every layout I design — is driven by intent, not just
          aesthetics.
        </motion.p>
      </section>

      {/* Glass Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-[92%] xl:w-[80%]"
      >
        {[
          {
            value: "2+",
            label: "Years of Web Design & Development",
          },
          {
            value: "5+",
            label: "Years of Programming Experience",
          },
          {
            value: "∞",
            label: "Curiosity and Passion for Learning",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-[1.8rem] px-6 py-12 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          >
            <h2 className="fontheading text-[4rem] md:text-[5rem] text-primary-text/90 mb-2">
              {stat.value}
            </h2>
            <p className="fontbody text-center text-primary-text/70 max-w-[220px] text-[0.95rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.section>

      {/* Journey Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-28 w-[92%] xl:w-[75%] backdrop-blur-lg bg-white/5 border border-primary-text/20 rounded-[2rem] px-8 md:px-16 py-16 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
      >
        <h2 className="fontheading text-[2.5rem] md:text-[4rem] text-primary-text mb-10 text-center md:text-left">
          My Journey
        </h2>
        <div className="flex flex-col gap-10 fontbody text-primary-text/80 text-[1rem] md:text-[1.1rem] leading-8 text-justify tracking-wide">
          <p>
            My journey into tech began in 9th grade with a spark of curiosity
            and a little C++. Since then, I’ve evolved through Python and
            JavaScript — shaping ideas into code and design into impact.
          </p>
          <p>
            Over time, I realized that web development isn’t just about writing
            code. It’s about engineering experiences that feel intuitive,
            designing systems that scale, and building products that genuinely
            help people.
          </p>
          <p>
            Today, I specialize in crafting full-stack web applications —
            bridging creative design and technical precision through modern
            stacks like React, Node.js, and Supabase. My focus lies in making
            every interface feel alive, every interaction purposeful.
          </p>
        </div>
      </motion.section>

      {/* Philosophy / CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-28 text-center w-[92%] xl:w-[70%]"
      >
        <h2 className="fontheading text-[2.5rem] md:text-[4rem] text-primary-text mb-8">
          Designing for People. <br />
          Building for the Future.
        </h2>
        <p className="fontbody text-primary-text/70 text-[1rem] md:text-[1.1rem] leading-8 max-w-[700px] mx-auto mb-10">
          I believe in creating technology that feels human — interfaces that
          empower, not overwhelm. Whether it’s an app, a platform, or a brand
          experience, I aim for every product to tell a story that matters.
        </p>

        <NavLink
          to="/projects"
          className="inline-block mt-4 text-accent border border-accent/50 hover:bg-accent hover:text-background transition-all duration-300 px-8 py-3 rounded-full fontheading tracking-wide"
        >
          View My Work →
        </NavLink>
      </motion.section>
    </div>
  );
};

export default AboutSection;
