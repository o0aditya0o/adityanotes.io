import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    index: number;
}

export default function ProjectCard({ title, excerpt, image, slug, index }: ProjectCardProps) {
    const isEven = index % 2 === 0;

    return (
        <Link href={`/projects/${slug}`} className={`${styles.card} ${!isEven ? styles.cardReverse : ''}`}>
            <div className={styles.imageWrapper}>
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
                <span className={styles.cta}>View Project</span>
            </div>
        </Link>
    );
}
