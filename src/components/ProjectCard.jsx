import styles from '../styles/ProjectCard.module.css';

export function ProjectCard({ project }) {
  return (
    <li className={styles.card}>
      {/* <img src={project.img} alt={project.name} className={styles.image} /> */}
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.links}>
        <a href={project.repo} target="_blank" rel="noreferrer">Repositório</a>
        <a href={project.deploy} target="_blank" rel="noreferrer">Deploy</a>
      </div>
    </li>
  );
}
