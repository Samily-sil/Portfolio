import styles from '../styles/ProjectsList.module.css';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsList() {
  return (
    <ul className={styles.list}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ul>
  );
}
