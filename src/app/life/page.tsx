import SectionCard from '@/components/SectionCard';
import styles from './page.module.css';

export default function LifePage() {
    return (
        <main>
            <header className={styles.header}>
                <div className={styles.overlay} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>On Life</h1>
                    <p className={styles.subtitle}>
                        Reflections on productivity, balance, and navigating the modern world.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.sectionsGrid}`}>
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
                        title="On Piano"
                        description="My journey learning piano."
                        color="life"
                        icon=""
                        link="/piano"
                    />
                </div>
                <div style={{ gridColumn: 'span 6' }}>
                    <SectionCard
                        title="On Coffee"
                        description="Brewing methods and bean reviews."
                        color="work"
                        icon=""
                        link="/coffee"
                    />
                </div>
            </div>
        </main>
    );
}
