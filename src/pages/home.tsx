import Hero from "../components/hero";
import Navbar from "../components/nav";
import ProjectSection from "../components/projectSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <ProjectSection />
    </div>
  );
};

export default Home;
