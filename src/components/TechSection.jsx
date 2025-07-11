// TechSection.jsx
import React from "react";
import { technologies } from "../data/technologies"; // ajuste o caminho se estiver diferente

export default function TechSection() {
  return (
    <section>
      <h2>Tecnologias</h2>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <img src={tech.img} alt={tech.name} style={{ width: "30px", marginRight: "8px" }} />
            {tech.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
