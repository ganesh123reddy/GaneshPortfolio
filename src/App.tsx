// import ListGroup from "./components/ListGroup";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import WorkSection from "./components/WorkSection";

import EducationSection from "./components/EducationSection";
import Techstack from "./components/TechnicalSkills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="app-css">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <Techstack />
      <EducationSection />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
