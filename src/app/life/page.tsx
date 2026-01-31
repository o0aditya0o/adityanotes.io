import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { posts } from '@/data/posts';
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

            <div className={`container ${styles.postsList}`}>
                <div className={styles.emptyState}>
                    <p>Coming Soon...</p>
                </div>
            </div>
        </main>
    );
}
