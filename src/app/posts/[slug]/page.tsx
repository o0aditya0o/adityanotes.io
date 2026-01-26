import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/data/posts';
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const categoryColor = {
        work: 'var(--color-work)',
        life: 'var(--color-life)',
        books: 'var(--color-books)',
    }[post.category];

    return (
        <div className={styles.container}>
            <Link href={`/${post.category}`} className={styles.backLink}>
                ← Back to {post.category}
            </Link>

            <article className={styles.article}>
                <header className={styles.header}>
                    <span
                        className={styles.category}
                        style={{ color: categoryColor }}
                    >
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <time className={styles.date}>{post.date}</time>
                </header>

                <div className={styles.content}>
                    <p className={styles.excerpt}>{post.excerpt}</p>

                    <h2>Full Content Coming Soon</h2>
                    <p>
                        This is a placeholder for the full blog post content. In a real implementation,
                        you would integrate a markdown renderer or CMS to display rich content here.
                    </p>

                    <p>
                        For now, this demonstrates the blog post page structure with proper routing,
                        category theming, and navigation.
                    </p>
                </div>
            </article>
        </div>
    );
}
