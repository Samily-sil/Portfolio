import styles from '../styles/ProjectsSection.module.css';
import { ProjectsList } from './ProjectsList';

export function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.title}>Projetos</h2>
      <ProjectsList />
    </section>
  );
}
