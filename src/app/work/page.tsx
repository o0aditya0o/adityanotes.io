import BlogPostList from '@/components/BlogPostList';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function WorkPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>On Work</h1>
                <p className={styles.description}>
                    Insights on software engineering, architecture, and building scalable systems.
                </p>
            </header>
            <BlogPostList posts={posts} category="work" />
        </div>
    );
}
