import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function CoffeePage() {
    const coffeePosts = posts.filter(post => post.category === 'coffee');

    return (
        <main>
            <header className={styles.header}>
                <div className={styles.overlay} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>On Coffee</h1>
                    <p className={styles.subtitle}>
                        Notes on brewing methods, beans, and the pursuit of the perfect cup.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.postsList}`}>
                {coffeePosts.map((post, index) => (
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
