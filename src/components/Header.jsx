import styles from '../styles/Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Portifólio</h1>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#techs">Tecnologias</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
