import { useEffect } from "react";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Projects from "./components/projects/Projects";
import Hero from "./components/hero/Hero";
// import Sidebar from "./components/sidebar/Sidebar";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="bg-dark ">
      <SmoothScroll>
        {/* <Sidebar /> */}
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </SmoothScroll>
    </div>
  );
}

export default App;
