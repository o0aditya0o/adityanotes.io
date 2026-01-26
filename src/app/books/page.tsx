import BlogPostList from '@/components/BlogPostList';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function BooksPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>On Books</h1>
                <p className={styles.description}>
                    Reviews and notes on books that shaped my thinking and perspective.
                </p>
            </header>
            <BlogPostList posts={posts} category="books" />
        </div>
    );
}
