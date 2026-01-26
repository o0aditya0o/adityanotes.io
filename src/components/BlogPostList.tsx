import Link from 'next/link';
import styles from './BlogPostList.module.css';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: 'work' | 'life' | 'books';
}

interface BlogPostListProps {
    posts: BlogPost[];
    category: 'work' | 'life' | 'books';
}

export default function BlogPostList({ posts, category }: BlogPostListProps) {
    const categoryPosts = posts.filter(post => post.category === category);

    if (categoryPosts.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>No posts yet. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className={styles.postList}>
            {categoryPosts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className={`${styles.postCard} ${styles[category]}`}
                >
                    <div className={styles.postHeader}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <time className={styles.postDate}>{post.date}</time>
                    </div>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>Read more →</span>
                </Link>
            ))}
        </div>
    );
}
