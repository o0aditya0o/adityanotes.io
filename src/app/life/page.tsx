import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function LifePage() {
    const lifePosts = posts.filter(post => post.category === 'life');

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
                {lifePosts.map((post, index) => (
                    <ProjectCard
                        key={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        image={post.coverImage || '/images/default-cover.png'}
                        slug={post.slug}
                        index={index}
                        href={`/posts/${post.slug}`}
                    />
                ))}
            </div>
        </main>
    );
}
