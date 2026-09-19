import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'On Work',
    description: 'Insights on software engineering, architecture, and building scalable systems.',
    openGraph: {
        title: 'On Work | Aditya Notes',
        description: 'Insights on software engineering, architecture, and building scalable systems.',
        url: '/work',
    },
};

export default function WorkPage() {
    const workPosts = posts.filter(post => post.category === 'work');

    return (
        <main>
            <header className={styles.header}>
                <div className={styles.overlay} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>On Work</h1>
                    <p className={styles.subtitle}>
                        Insights on software engineering, architecture, and building scalable systems.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.postsList}`}>
                {workPosts.map((post, index) => (
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
