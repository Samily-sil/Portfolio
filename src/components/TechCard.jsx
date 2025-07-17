import styles from '../styles/TechCard.module.css';

export function TechCard({ tech }) {
  return (
    <li className={styles.card}>
      <img src={tech.img} alt={tech.name} className={styles.icon} />
      <p className={styles.name}>{tech.name}</p>
    </li>
  );
}
