import { motion, type Variants } from "framer-motion";
import ProjectCard from "./projectCard";
import projectData from "../data/allprojects.json";

const ProjectPageSection = () => {
  // ✅ Typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col md:flex-row bg-transparent relative w-full overflow-hidden"
    >
      <div className="flex flex-col gap-8 lg:gap-25 w-full relative fontheading bg-background-secondary z-50 p-4 md:p-5 lg:p-10 pb-30 lg:pb-60">
        {/* Animated Background Line */}
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          className="absolute opacity-[0] md:opacity-[1] z-0 top-[12%] w-auto h-[450vh] left-[-5%]"
          viewBox="0 0 3908 8783"
          fill="none"
        >
          <motion.path
            d="M-934 14.5C-667.5 739.333 161.3 1983.7 1344.5 1162.5C2823.5 136 4006 2328 3014.5 2502C2023 2676 2597.5 2032 1727.5 2119C857.5 2206 179.5 3649.5 1727.5 4206.5C3275.5 4763.5 2753.5 5598 1849 6050.5C944.5 6503 301 7355 1953.5 7616C3606 7877 4267 8538.5 4371.5 8764.5"
            stroke="var(--svg)"
            strokeWidth="84"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="flex w-full justify-center md:justify-start flex-col md:flex-row items-center lg:gap-[8vw] mt-15"
        >
          <h1 className="flex justify-center md:justify-start text-[2rem] w-full md:w-[70%] lg:text-[4rem] xl:text-[6rem] h-fit text-primary-text leading-tight">
            My Works
          </h1>
          <p className="flex h-fit w-[80%] lg:w-[30%] xl:w-[20%] m-10 lg:mt-16 text-center md:text-left fontbody text-[0.8rem] md:text-[1rem] xl:text-[1vw] tracking-wider text-primary-text/90">
            A showcase of products that merge strategy, usability, and
            technology — built to perform, scale, and inspire.
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          variants={containerVariants}
          className="flex items-center flex-col gap-30 md:gap-40 lg:gap-50 z-2"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              <ProjectCard
                imgLink={project.imgLink}
                title={project.title}
                desc={project.desc}
                liveSite={project.liveSite}
                orientation={project.orientation}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPageSection;
