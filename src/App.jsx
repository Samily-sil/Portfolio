import React from "react";
import {AboutMeSection} from "./components/AboutMeSection";
// import TechSection from "./components/TechSection";
// import ProjectsSection from "./components/ProjectsSection";
import { Header } from "./components/Header";
import { TechSection } from './components/TechSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  return (
    <div>
      <Header/>
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
