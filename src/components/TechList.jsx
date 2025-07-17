import { TechCard } from './TechCard';
import styles from '../styles/TechList.module.css';
import { technologies } from '../data/technologies';

export function TechList() {
  return (
    <ul className={styles.list}>
      {technologies.map((tech, index) => (
        <TechCard key={index} tech={tech} />
      ))}
    </ul>
  );
}
