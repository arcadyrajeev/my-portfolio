import Hero from "../components/hero";
import Navbar from "../components/nav";
import ProjectSection from "../components/projectSection";
import TechStack from "../components/techStack";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <ProjectSection />
      <TechStack />
    </div>
  );
};

export default Home;
