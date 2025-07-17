import styles from '../styles/AboutMeSection.module.css';

export function AboutMeSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.textContainer}>
        <p className={styles.greeting}>Olá, meu nome é</p>
        <h1 className={styles.name}>Samily Sousa</h1>
        <h2 className={styles.role}>Futura desenvolvedora Full Stack</h2>
        <p className={styles.bio}>
          Atualmente estou terminando o curso na Kenzie Academy
        </p>

        <a href="#projects" className={styles.button}>Ver projetos</a>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/profile/IMG_8590.jpg"
          alt="Samily Sousa Silveira"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
}
