import SectionCard from '@/components/SectionCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Thoughts on Work, Life, and Books
        </h1>
        <p className={styles.heroSubtitle}>
          A minimal space for ideas and reflections.
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
        <div style={{ gridColumn: 'span 12' }}>
          <SectionCard
            title="On Books"
            description="Notes on what I'm reading."
            color="books"
            icon=""
            link="/books"
          />
        </div>
      </section>
    </div>
  );
}
