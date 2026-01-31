import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    index: number;
    href?: string;
    variant?: 'landscape' | 'portrait';
}

export default function ProjectCard({ title, excerpt, image, slug, index, href, variant = 'landscape' }: ProjectCardProps) {
    const isEven = index % 2 === 0;
    const linkPath = href || `/projects/${slug}`;

    return (
        <Link href={linkPath} className={`${styles.card} ${!isEven ? styles.cardReverse : ''}`}>
            <div className={`${styles.imageWrapper} ${variant === 'portrait' ? styles.imageWrapperPortrait : ''}`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.excerpt}>{excerpt}</p>
                <span className={styles.cta}>View {href ? 'Post' : 'Project'}</span>
            </div>
        </Link>
    );
}
