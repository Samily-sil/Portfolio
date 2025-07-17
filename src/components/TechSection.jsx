import styles from '../styles/TechSection.module.css';
import { TechList } from './TechList';

export function TechSection() {
  return (
    <section className={styles.section} id="techs">
      <h2 className={styles.title}>Tecnologias</h2>
      <TechList />
    </section>
  );
}
