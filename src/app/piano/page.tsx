import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function PianoPage() {
    const pianoPosts = posts.filter(post => post.category === 'piano');

    return (
        <main>
            <header className={styles.header}>
                <div className={styles.overlay} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>On Piano</h1>
                    <p className={styles.subtitle}>
                        Notes, analysis, and reflections on pieces I'm learning and the music theory behind them.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.postsList}`}>
                {pianoPosts.map((post, index) => (
                    <ProjectCard
                        key={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        image={post.coverImage || '/images/default-cover.png'}
                        slug={post.slug}
                        index={index}
                        href={`/posts/${post.slug}`}
                        variant="portrait"
                    />
                ))}
            </div>
        </main>
    );
}
