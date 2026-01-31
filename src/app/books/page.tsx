import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function BooksPage() {
    const bookPosts = posts.filter(post => post.category === 'books');

    return (
        <main>
            <header className={styles.header}>
                <div className={styles.overlay} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>On Books</h1>
                    <p className={styles.subtitle}>
                        Reviews and notes on books that shaped my thinking and perspective.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.postsList}`}>
                {bookPosts.map((post, index) => (
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
