import BlogPostList from '@/components/BlogPostList';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function LifePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>On Life</h1>
                <p className={styles.description}>
                    Reflections on productivity, balance, and navigating the modern world.
                </p>
            </header>
            <BlogPostList posts={posts} category="life" />
        </div>
    );
}
