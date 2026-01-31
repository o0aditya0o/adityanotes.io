import SectionCard from '@/components/SectionCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Hi! I am Aditya
        </h1>
        <p className={styles.heroSubtitle}>
          This is my space for ideas, reflections, and experiments.
        </p>
      </section>

      <section className={styles.sectionsGrid}>
        <div style={{ gridColumn: 'span 7' }}>
          <SectionCard
            title="On Work"
            description="Engineering structure, teams, and leverage."
            color="work"
            icon=""
            link="/work"
          />
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <SectionCard
            title="On Life"
            description="Balance & perspective."
            color="life"
            icon=""
            link="/life"
          />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <SectionCard
            title="On Books"
            description="Notes on what I'm reading."
            color="books"
            icon=""
            link="/books"
          />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <SectionCard
            title="On Projects"
            description="Selected work and experiments."
            color="projects"
            icon=""
            link="/projects"
          />
        </div>
      </section>
    </div>
  );
}
