import { technologies } from "../data/technologies";
import TechCard from "./TechCard";

function TechList() {
  return (
    <ul>
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
}

export default TechList;
