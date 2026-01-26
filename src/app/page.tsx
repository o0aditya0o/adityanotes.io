import SectionCard from '@/components/SectionCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Aditya Notes</h1>
        <p className={styles.heroSubtitle}>
          Thoughts on work, life, and books — a minimal space for ideas and reflections.
        </p>
      </section>

      <section className={styles.sectionsGrid}>
        <SectionCard
          title="On Work"
          description="Insights on software engineering, architecture, and building scalable systems."
          color="work"
          icon="💼"
          link="/work"
        />
        <SectionCard
          title="On Life"
          description="Reflections on productivity, balance, and navigating the modern world."
          color="life"
          icon="🌱"
          link="/life"
        />
        <SectionCard
          title="On Books"
          description="Reviews and notes on books that shaped my thinking and perspective."
          color="books"
          icon="📚"
          link="/books"
        />
      </section>
    </div>
  );
}
