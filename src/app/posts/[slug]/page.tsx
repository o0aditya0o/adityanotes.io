import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { postContent } from '@/content';
import Newsletter from '@/components/Newsletter';
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const title = post.title;
    const description = post.excerpt.trim();
    const siteUrl = 'https://www.adityanotes.com';
    const postUrl = `${siteUrl}/posts/${post.slug}`;
    const relativeImage = post.coverImage || '/images/og-default.jpg';
    const absoluteImageUrl = relativeImage.startsWith('http')
        ? relativeImage
        : `${siteUrl}${relativeImage}`;
    const imageType = relativeImage.endsWith('.png') ? 'image/png' : 'image/jpeg';

    let publishedTime: string | undefined;
    try {
        const d = new Date(post.date);
        if (!isNaN(d.getTime())) {
            publishedTime = d.toISOString();
        }
    } catch {
        // ignore parse error
    }

    return {
        title: title,
        description: description,
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: `${title} | Aditya Notes`,
            description: description,
            url: postUrl,
            siteName: 'Aditya Notes',
            locale: 'en_US',
            type: 'article',
            publishedTime: publishedTime,
            authors: ['Aditya'],
            section: post.category,
            images: [
                {
                    url: absoluteImageUrl,
                    secureUrl: absoluteImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                    type: imageType,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Aditya Notes`,
            description: description,
            images: [absoluteImageUrl],
        },
    };
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const content = postContent[slug];

    const categoryColor = {
        work: 'var(--color-work)',
        life: 'var(--color-life)',
        books: 'var(--color-books)',
        piano: 'var(--color-piano)',
        coffee: 'var(--color-coffee)',
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

                    {post.coverImage && (
                        <div className={styles.coverImageWrapper}>
                            <img
                                src={post.coverImage}
                                alt=""
                                className={styles.coverImage}
                            />
                        </div>
                    )}

                    <h1 className={styles.title}>{post.title}</h1>
                    <time className={styles.date}>{post.date}</time>
                </header>

                <div className={styles.content}>
                    <p className={styles.excerpt}>{post.excerpt}</p>

                    {content ? (
                        <div className={styles.postContent}>
                            {content}
                        </div>
                    ) : (
                        <>
                            <h2>Full Content Coming Soon</h2>
                            <p>
                                This is a placeholder for the full blog post content. In a real implementation,
                                you would integrate a markdown renderer or CMS to display rich content here.
                            </p>

                            <p>
                                For now, this demonstrates the blog post page structure with proper routing,
                                category theming, and navigation.
                            </p>
                        </>
                    )}
                </div>

                <Newsletter />
            </article>
        </div>
    );
}
