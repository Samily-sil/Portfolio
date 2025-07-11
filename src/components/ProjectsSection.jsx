import React from "react";
import { projects } from "../data/projects"; // ajuste o caminho se necessário

export default function ProjectsSection() {
  return (
    <section>
      <h2>Projetos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
